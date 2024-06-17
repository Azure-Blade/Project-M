'use server';
import { db } from '@/db/index';
import { users } from '@/db/schema';
import z from 'zod';
import { formDataToValidatedObject } from '../utils';

const validator = z.object({
  username: z.string().min(8),
  password: z.string().min(8),
  email: z.string().email(),
});

const s = validator.spa({});

export async function register(formData: FormData) {
  const { data, success, error } = await formDataToValidatedObject(
    formData,
    validator
  );
  if (!success) {
    console.log('Incorrect input!', error.message);
    return null;
  }

  const insertResult = await db.insert(users).values(data);
  console.log(`Created new user with an id: ${insertResult[0].insertId}`);
}
