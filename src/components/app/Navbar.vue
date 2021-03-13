<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('toggleSidebar')">
          <i class="material-icons black-text nav-icon" :class="{ open: value }"
            >read_more</i
          >
        </a>
        <span class="black-text">{{ date | date('date') }} {{ time | time('time') }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdownTrigger"
          >
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["value"],
  name: "Navbar",
  data: () => {
    return {
      time: new Date(),
      date: new Date(),
      interval: null,
      dropdown: null
    };
  },
  mounted() {
    this.timeInterval();

    // eslint-disable-next-line no-undef
    this.dropdown = M.Dropdown.init(this.$refs.dropdownTrigger, {
      constrainWidth: true
    });
  },
  beforeDestroy() {
    clearInterval(this.interval);
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy();
    }
  },
  methods: {
    logout() {
      this.$router.push("/login?message=logout");
    },
    timeInterval() {
      this.interval = setInterval(() => {
        this.time = new Date();
      }, 1000);
    }
  }
};
</script>

<style scoped>
.nav-icon {
  font-size: 26px;
  transition: all 0.4s ease;
}

.nav-icon.open {
  transform: rotate(-180deg);
}

.dropdown-content {
  top: 65px !important;
}
</style>
