import { createFetchStore } from "./storeFactory";

export const useWomenStore = createFetchStore('womenStore', "/products/category/women's%20clothing")