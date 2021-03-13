<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('toggleSidebar')">
          <i class="material-icons black-text nav-icon" :class="{ open: value }"
            >read_more</i
          >
        </a>
        <span class="black-text">{{ date }} {{ time }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
          >
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <a href="#" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </a>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text">
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
      time: null,
      date: null
    };
  },
  mounted() {
    this.getDate();
    this.getTime();
  },
  methods: {
    timeInterval() {
      setInterval(this.getTime, 1000);
    },
    getDate() {
      let date = new Date(),
        fullYear = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate();

      this.date = `${day}.${month}.${fullYear}`;
    },
    getTime() {
      let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

      this.time = `${hours}:${minutes}:${seconds > 9 ? "" : "0"}${seconds}`;
      this.timeInterval();
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
</style>
