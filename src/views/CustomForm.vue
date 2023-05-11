<template>
  <div class="w-full flex flex-col items-center justify-center py-8">
    <Suspense>
      <template #default>
        <add-form />
      </template>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddForm from "../components/AddForm.vue";
export default defineComponent({
  name: "CustomForm",
  components: {
    AddForm
  },
});
</script>

<style></style>
