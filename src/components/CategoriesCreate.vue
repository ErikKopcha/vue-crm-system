<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Create</h4>
      </div>

      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input
            id="name"
            type="text"
            ref="titleField"
            :class="{ invalid: errorTitle }"
          />
          <label for="name">Name</label>
          <span
            class="helper-text invalid"
            v-if="errorTitle"
          >Check your category name (min symbols - 3)</span>
        </div>

        <div class="input-field">
          <input
            id="limit"
            type="number"
            ref="limitField"
            :class="{ invalid: errorLimit }"
          />
          <label for="limit">Limit</label>
          <span
            class="helper-text invalid"
            v-if="errorLimit"
          >Min value {{ limit }}</span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Create
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.min';

export default {
  name: "CategoriesCreate",
  data: () => {
    return {
      errorTitle: false,
      errorLimit: false,
      limit: 1
    }
  },
  mounted() {
    M.updateTextFields();

    this.$refs.limitField.addEventListener('keyup', () => {
      this.$refs.limitField.value = this.$refs.limitField.value.replace(/[^0-9/]/, '');
      this.errorLimit = this.$refs.limitField.value === '' || this.$refs.limitField.value < this.limit;
    });

    this.$refs.titleField.addEventListener('keyup', () => {
      this.errorTitle = this.$refs.titleField.value === '' || this.$refs.titleField.value.length < 3;
    });
  },
  methods: {
    submitHandler() {}
  }
};
</script>

<style scoped>

</style>