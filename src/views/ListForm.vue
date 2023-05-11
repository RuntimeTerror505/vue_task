<template>
  <div class="w-full flex flex-col items-center justify-center py-8">
    <Suspense>
      <template #default>
        <list-of-form />
      </template>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ListOfForm from "../components/ListOfForm";
export default defineComponent({
  name: "ListForm",
  components: {
    ListOfForm
  },
});
</script>

<style></style>
