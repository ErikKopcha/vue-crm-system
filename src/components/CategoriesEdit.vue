<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Редактировать</h4>
      </div>

      <form>
        <div class="input-field">
          <select>
            <option>Category</option>
          </select>
        </div>

        <div class="input-field">
          <input type="text" id="editCategoryName" />
          <label for="editCategoryName">Выберите категорию</label>
          <span class="helper-text invalid">TITLE</span>
        </div>

        <div class="input-field">
          <input id="editCategoryLimit" type="number" />
          <label for="editCategoryLimit">Лимит</label>
          <span class="helper-text invalid">LIMIT</span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Обновить
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesEdit"
};
</script>

<style scoped>

</style>