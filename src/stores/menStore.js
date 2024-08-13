import { createFetchStore } from "./storeFactory";

export const useMenStore = createFetchStore('menStore', "/products/category/men's%20clothing")