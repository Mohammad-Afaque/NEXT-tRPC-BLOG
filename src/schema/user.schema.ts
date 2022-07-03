import z from "zod"

export const createUserInputSchema = z.object({
  name: z.string(),
  email: z.string().email().optional(),
})

export const createUserOutputSchema = z.object({
  name: z.string(),
  email: z.string().email().optional(),
})

export type CreateUserInput = z.TypeOf<typeof createUserInputSchema>
export type CreateUserOutput = z.TypeOf<typeof createUserOutputSchema>

