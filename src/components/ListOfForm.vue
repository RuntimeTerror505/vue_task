<template>
  <div class="w-full flex flex-col items-center justify-center py-8">
    <div class="ml-3 inline-flex rounded-md shadow fixed top-3 right-3">
        <a @click="addNewForm" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Add new form
        </a>
      </div>
    <card-form v-for="item in listForms" :key="item.id" :form="item" :deleteForm="deleteForm" :updateForm="updateForm"/>
  </div>
</template>

<script lang="ts">
import { computed, toRefs, reactive, defineComponent, onMounted } from "vue";
import CardForm from "./CardForm.vue";
import { ListForms } from "../store/ListForms";
import router from '../router'
export default {
  name: "ListOfForm",
  components: {
    CardForm,
  },
  async setup() {

    const state = reactive({
        data: new ListForms()
      })
   
    await state.data.init();

    const listForms = computed(() => {
      const res = state.data.getState();
      return res;
    });

    const deleteForm = (id: string) => {
      console.log(id)
      state.data.delete(id);
    };

    const updateForm = async (id: string) => {
      await state.data.update();
      await router.push({ name: 'NewForm', params: { id } })
    };

    const addNewForm = async () => {
      const id = await state.data.addNewForm();
      router.push(`/form/${id}`)

    };
    return {...toRefs(state), listForms, deleteForm, addNewForm, updateForm };
  },
};
</script>

<style></style>
