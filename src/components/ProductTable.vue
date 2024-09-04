<script setup>
</script>

<template>
    <section class="flex flex-col grow">
        <h1 class="text-4xl font-semibold mb-3">Shopping Cart</h1>
        <table class="table table-pin-rows rounded-none bg-gray-200">
            <thead>
                <tr class="border-bottom border-black bg-gray-200">
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-black">
                    <td class="p-5">
                        <div class="flex gap-x-5">
                            <div class="flex justify-center items-center bg-white size-40 rounded-lg">
                                <img class="size-32" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg">
                            </div>
                            <section class="flex flex-col justify-center">
                                <span>Clothing</span>
                                <h4 class="min-w-max text-xl">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
                            </section>
                        </div>
                    </td>
                    <td class="font-bold">200/USD</td>
                    <td class="font-bold">3</td>
                    <td class="font-bold">600/USD</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>