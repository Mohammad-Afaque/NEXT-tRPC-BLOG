import { Context } from './createContext';
import superjson from 'superjson';
import { router } from "@trpc/server"


export function createRouter() {
  // TODO Add context to router
  return router<Context>().transformer(superjson)
}
