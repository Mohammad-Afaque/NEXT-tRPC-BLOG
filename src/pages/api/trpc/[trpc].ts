import * as  trpcNext from '@trpc/server/adapters/next'
import { appRouter } from '../../../server/route/appRouter';
import { createContext } from '../../../server/route/createContext';

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  onError({ error }) {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      console.log("something went wrong", error);
    } else {
      console.log("Error", error);
    }
  }
})
