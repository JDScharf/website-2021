<!-- <template>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="name.value.value"
      :counter="10"
      :error-messages="name.errorMessage.value"
      label="Name"
    ></v-text-field>

    <v-text-field
      v-model="phone.value.value"
      :counter="7"
      :error-messages="phone.errorMessage.value"
      label="Phone Number"
    ></v-text-field>

    <v-text-field
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
      label="E-mail"
    ></v-text-field>

    <v-select
      v-model="select.value.value"
      :items="items"
      :error-messages="select.errorMessage.value"
      label="Select"
    ></v-select>

    <v-checkbox
      v-model="checkbox.value.value"
      :error-messages="checkbox.errorMessage.value"
      value="1"
      label="Option"
      type="checkbox"
    ></v-checkbox>

    <v-btn
      class="me-4"
      type="submit"
    >
      submit
    </v-btn>

    <v-btn @click="handleReset">
      clear
    </v-btn>
  </form>
</template> -->
<template>
  <div entry-form>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScGmcocMdkdgOSTk7tw17K0Ci3rZxsILwzW4eNXrhKceEp6Kg/viewform?embedded=true" width="640" height="1600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</div>
</template>

<!-- <script setup>
  import { reactive } from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { email, required } from '@vuelidate/validators'

  const initialState = {
    name: '',
    email: '',
    select: null,
    checkbox: null,
  }

  const state = reactive({
    ...initialState,
  })

  const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
  ]

  const rules = {
    name: { required },
    email: { required, email },
    select: { required },
    items: { required },
    checkbox: { required },
  }

  const v$ = useVuelidate(rules, state)

  function clear () {
    v$.value.$reset()

    for (const [key, value] of Object.entries(initialState)) {
      state[key] = value
    }
  }
</script> -->

<script>
// import LowerFooter from "@/components/LowerFooter.vue";

export default {
  data() {
    return {
       components: {
        // LowerFooter
      }
    };
  }
};
</script>

<style scoped>

.entry-form {
  height: 1300;
}

</style>
