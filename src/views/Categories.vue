<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
        <CategoriesCreate />
        <CategoriesEdit />
      </div>
    </section>
  </div>
</template>

<script>
import CategoriesCreate from "@/components/CategoriesCreate";
import CategoriesEdit from "@/components/CategoriesEdit";
export default {
  name: "Categories",
  components: {
    CategoriesCreate, CategoriesEdit
  }
};
</script>

<style scoped></style>
