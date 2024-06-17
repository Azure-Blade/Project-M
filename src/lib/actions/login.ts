'use server';
import { db } from '@/db/index';
import { session, users } from '@/db/schema';
import crypto from 'node:crypto';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { formDataToValidatedObject } from '../utils';
import { z } from 'zod';

const validator = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type Result = Promise<{
  message: string;
}>;

export async function login(_: any, formData: FormData): Promise<Result> {
  const { data, success } = await formDataToValidatedObject(
    formData,
    validator
  );
  if (!success) {
    return {
      message: 'Invalid email or password!',
    };
  }

  const user = await db.query.users.findFirst({
    where: (user, { eq, and }) =>
      and(eq(user.email, data.email), eq(user.password, data.password)),
  });

  if (!user) {
    return {
      message: 'Invalid email or password!',
    };
  }

  if (!user.verified) {
    return {
      message: 'Your account has not been activated!',
    };
  }

  const token = crypto.randomBytes(32).toString('hex');
  await db.insert(session).values({
    token,
    userId: user.id,
  });
  const now = new Date().getTime();
  const expires = now + 1000 * 30;
  cookies().set('session', token, { expires });

  redirect('/');
}
