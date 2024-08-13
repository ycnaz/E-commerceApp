import { createFetchStore } from "./storeFactory";

export const useProductStore = createFetchStore('productStore', '/products')