import { AppRouter } from './../server/route/appRouter';
import { createReactQueryHooks } from "@trpc/react"

export const trpc = createReactQueryHooks<AppRouter>()
