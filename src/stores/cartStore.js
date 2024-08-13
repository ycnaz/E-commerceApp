import { createFetchStore } from "./storeFactory";

export const useCartStore = createFetchStore('cartStore', '/carts')