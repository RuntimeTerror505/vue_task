<template>
  <div class="bg-gray-200 w-4/5 rounded-2xl p-16">
    <label class="block ">
      <span class="text-gray-700">Title</span>
      <input
        class="mt-1 outline-null p-2 leading-none rounded-md	 block w-full"
        v-model="customForm.title"
        @change="updateForm"
        placeholder="Jane Doe"
      />
    </label>

    <label class="block mt-4">
      <span class="text-gray-700">Category</span>
      <input
        class="mt-1 outline-null p-2 leading-none rounded-md	 block w-full"
        v-model="customForm.category"
        @change="updateForm"
        placeholder="Shop"
      />
    </label>

    <label class="block mt-4">
      <span class="text-gray-700">Description</span>
      <textarea
        v-model="customForm.description"
        @change="updateForm"
        class=" mt-1 outline-null  p-2 leading-none rounded-md block w-full"
        rows="3"
        placeholder="Enter some long form content."
      ></textarea>
    </label>

    <label class="block mt-4">
      <span class="text-gray-700">Requested Limit</span>
      <select
        v-model="customForm.limit"
        @change="updateForm"
        class="block rounded-md	 p-2 w-full mt-1"
      >
        <option>$1,000</option>
        <option>$5,000</option>
        <option>$10,000</option>
        <option>$25,000</option>
      </select>
    </label>

    <div class="flex mt-6">
      <label class="flex items-center">
        <input
          v-model="customForm.isAgree"
          @change="updateForm"
          type="checkbox"
          class=""
        />
        <span class="ml-2"
          >I agree to the <span class="underline">privacy policy</span></span
        >
      </label>
    </div>
    <div class="flex mt-6 justify-end">
      <label class="flex ">
        <div class="ml-3 inline-flex rounded-md shadow">
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
          >
            Close
          </a>
        </div>
      </label>
    </div>
  </div>
</template>

<script >
import { computed, defineComponent, reactive, toRefs } from "vue";
import router from "../router";
import { CustomFormStore } from "../store/customFormStore";

export default defineComponent({
  name: "AddForm",
  async setup() {

    const state = reactive({
      customForm: new CustomFormStore(),
    });

    await state.customForm.init(router.currentRoute.value.params.id);

    const updateForm = async () => {
      await state.customForm.updateForm()
    };
    return { ...toRefs(state), updateForm };
  },
});
</script>

<style>
.outline-null {
  outline: 0px;
}
</style>
