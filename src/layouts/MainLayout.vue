<template>
  <div class="app-main-layout">
    <Navbar v-model="isOpen" />

    <Sidebar @toggleSidebar="toggleSidebarHandle" v-model="isOpen" />

    <main class="app-content" :class="{ full: !isOpen }">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link to="/record" class="btn-floating btn-large blue">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import Sidebar from "@/components/app/Sidebar";

export default {
  name: "MainLayout",
  data: () => ({
    isOpen: localStorage.getItem('sidebar') === 'true' ? true : false
  }),
  components: {
    Navbar,
    Sidebar
  },
  methods: {
    toggleSidebarHandle() {
      this.isOpen = !this.isOpen;
      localStorage.setItem('sidebar', this.isOpen);
    }
  }
};
</script>

<style scoped></style>
