import { type TypeOf, z, SafeParseReturnType } from 'zod';

export function formDataToValidatedObject<T extends z.ZodType<any, any, any>>(
  formData: FormData,
  validator: T
): Promise<SafeParseReturnType<TypeOf<T>, TypeOf<T>>> {
  const object = {};

  for (const [key, value] of formData.entries())
    Object.assign(object, { [key]: value });

  return validator.safeParseAsync(object);
}
