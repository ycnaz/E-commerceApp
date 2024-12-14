<script setup>
const props = defineProps({
    inputId: {
        type: String,
        required: true
    },
    labelFor: {
        type: String,
        required: true
    },
    labelText: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    minLength: {
        required: false
    },
    maxLength: {
        required: false
    },
    autoComplete: {
        type: String,
        required: false
    },
})

import { ref, defineAsyncComponent } from 'vue';

const EyeHide = defineAsyncComponent(() => import('../assets/svg/eye-hide.svg'))
const EyeShow = defineAsyncComponent(() => import('../assets/svg/eye-show.svg'))

const model = defineModel()

const inputType = ref(props.type)

const inp = ref('')

const focusInput = () => {
    inp.value.focus()
}

const isValid = ref(null)

const validateInput = (event) => {
    isValid.value = event.target.validity.valid
}
</script>
<template>
    <div class="relative max-[415px]:w-full max-[415px]:flex max-[415px]:justify-center">
        <div @click="focusInput" class="group peer flex justify-center items-end w-96 h-12 border bg-gray-100 border-black rounded cursor-text max-[415px]:w-11/12" :class="{'border-rose-500': isValid === false, 'border-emerald-500': isValid}">
            <input @input="validateInput" :type="inputType" v-model="model" :autocomplete="props.autoComplete" :minlength="props.minLength" :maxlength="props.maxLength" ref="inp" class="group-focus: border-none h-7 w-[365px] p-0 focus:ring-0 bg-gray-100 placeholder:text-transparent max-[415px]:pl-3" :id="props.inputId" :placeholder="props.labelText" required>
        </div>
        <EyeHide @click="inputType = 'text'" v-if="inputType === 'password' && (labelFor === 'password' || labelFor === 'confirm')" :class="{ 'opacity-0': !model }" class="size-8 absolute top-2 right-2 max-[415px]:right-7 transition-all" />
        <EyeShow @click="inputType = 'password'" v-else-if="inputType === 'text' && (labelFor === 'password' || labelFor === 'confirm')" :class="{ 'opacity-0': !model }" class="size-8 absolute top-2 right-2 max-[415px]:right-7 transition-all" />
        <label :for="props.labelFor" :class="{ 'text-sm text-gray-500 top-3 left-2': model }" class="peer-focus-within:text-sm peer-focus-within:text-gray-500 peer-focus-within:top-3 peer-focus-within:left-2 absolute top-1/2 -translate-y-1/2 left-3 text-xl cursor-text select-none max-[415px]:pl-3 transition-all">{{ props.labelText }}</label>
    </div>
</template>