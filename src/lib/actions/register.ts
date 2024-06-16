"use server"
import { db } from "@/db/index";
import { users } from "@/db/schema";
import z from "zod"


const validator = z.object({
  username: z.string().min(8),
  password: z.string().min(8),
  email: z.string().email()
})

export async function register(formData: FormData) {
  const data = {};
  for (const [key, value] of formData.entries())
    Object.assign(data, { [key]: value });

  console.log(data)
  const result = await validator.safeParseAsync(data)

  if (!result.success) {
    console.log("Incorrect input!")
    return
  }

  const inserResult = await db.insert(users).values(result.data)
  console.log(`Created new user with an id: ${inserResult[0].insertId}`)
  
}
