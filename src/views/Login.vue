<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title ta-c">Wallet Management</span>
      <div class="input-field">
        <input id="email" type="text"
          v-model="email"
          :class="{invalid: $v.email.$dirty && !$v.email.email || $v.email.$dirty && !$v.email.required}"
        />
        <label for="email">Email</label>
        <small
          v-if="$v.email.$dirty && !$v.email.email"
          class="helper-text invalid">Please enter a valid email</small>
        <small
          v-else-if="$v.email.$dirty && !$v.email.required"
          class="helper-text invalid">Enter your email</small>
      </div>
      <div class="input-field">
        <input id="password" type="password"
          v-model="password"
          :class="{invalid: $v.password.$dirty && !$v.password.required || $v.password.$dirty && !$v.password.minLength}"
        />
        <label for="password">Password</label>
        <small
          v-if="$v.password.$dirty && !$v.password.required"
          class="helper-text invalid">Enter the correct password</small>
        <small
          v-else-if="$v.password.$dirty && !$v.password.minLength"
          class="helper-text invalid">Password must be {{ $v.password.$params.minLength.min }} characters long. Now - {{ password.length }}</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Login
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        No account?
        <router-link to="/register">Register</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
export default {
  name: "login",
  data: () => {
    return {
      email: '',
      password: ''
    };
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        email: this.email,
        password: this.password
      };

      try {
        await this.$store.dispatch('login', formData);
        this.$router.push("/");
      } catch (e) {console.log(e);}
    }
  }
};
</script>

<style scoped>
.card-title {
  margin-bottom: 2rem !important;
}
</style>
