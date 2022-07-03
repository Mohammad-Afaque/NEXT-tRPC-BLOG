import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { createUserInputSchema, createUserOutputSchema } from '../../schema/user.schema';
import { createRouter } from "./createRouter";
import * as trpc from "@trpc/server"

export const userRouter = createRouter()
  .mutation('register-user', {
    input: createUserInputSchema,
    // output: createUserOutputSchema,
    async resolve({ ctx, input }) {
      const { email, name } = input
      try {
        const user = ctx.prisma.user.create({
          data: {
            email, name
          }
        })
        return user

      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new trpc.TRPCError({
              code: "CONFLICT",
              message: "User already exists"
            })
          }
        }
        throw new trpc.TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong from user.router"
        })
      }
    }

  })
