<template>
  <div class="bg-gray-200 w-4/5 rounded-2xl my-4">
    <div class="max-w-7xl mx-auto py-8 px-4  flex items-center justify-between">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900  ">
        <span class="block text-indigo-600">{{form.title}}</span>
      </h2>
      <div class="flex items-center justify-between">
        <h4 class="text-indigo-400 font-bold">{{calcProcent(form)}}</h4>
      </div>
      <div class="flex items-center justify-between">
        <div class="inline-flex rounded-md shadow">
          <a
            href="#"
            @click="updateForm(form.id)"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Update
          </a>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <a
            @click="deleteForm(form.id)"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { calcProcent } from '@/utils'

export default defineComponent({
  name: "CardForm",
  props: {
    form: {
      type: Object,
    },
    deleteForm: {
      type: Function,
    },
    updateForm: {
      type: Function,
    },
  },
  setup(){
  return{calcProcent}
}
  
});


</script>

<style></style>
