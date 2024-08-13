import { createFetchStore } from "./storeFactory";

export const useUserStore = createFetchStore('userStore', '/users')