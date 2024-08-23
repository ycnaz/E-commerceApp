import { createFetchStore } from "./storeFactory";

export const useCategoryStore = createFetchStore('categoryStore', '/products/categories')