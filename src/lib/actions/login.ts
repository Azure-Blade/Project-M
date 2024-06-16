"use server";
import { db } from "@/db/index";
import { session, users } from "@/db/schema";
import { z } from "zod";
import crypto from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const validator = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type Result = Promise<{
  message: string;
}>;

export async function login(prevState: any, formData: FormData) {
  const data = {};

  for (const [key, value] of formData.entries())
    Object.assign(data, { [key]: value });

  const result = await validator.safeParseAsync(data);

  if (!result.success) {
    console.log("Incorrect input!");
    return {
      message: "Incorrect input!",
    };
  }

  const user = await db.query.users.findFirst({
    where: (user, { eq, and }) =>
      and(
        eq(user.email, result.data.email),
        eq(user.password, result.data.password)
      ),
  });

  if (!user) {
    return {
      message: "Invalid email or password!",
    };
  }

  if (!user.verified) {
    return {
      message: "Your account has not been activated!",
    };
  }

  const token = crypto.randomBytes(64).toString("hex");
  await db.insert(session).values({
    token,
    userId: user.id,
  });
  const now = new Date().getTime();
  const expires = now + 1000 * 30;
  cookies().set("session", token, { expires });

  redirect("/")
}
