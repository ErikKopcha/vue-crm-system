<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <div class="wrap" @click.prevent="$emit('toggleSidebar')">
          <div class="wrap__card" :class="{ open: value }">
            <i class="material-icons black-text nav-icon wrap__front waves-effect"
              >format_indent_increase
            </i>
            <i class="material-icons black-text nav-icon wrap__back waves-effect">
              format_indent_decrease
            </i>
          </div>
        </div>
        <span class="black-text">{{ date | date("date") }}</span>
        <span class="new badge waves-effect waves-light cursor-unset">
           {{ time | time("time") }}
        </span>
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
span.badge.new:after {
  content: unset !important;
}

.dropdown-content {
  top: 65px !important;
}

/* flip */
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-right: 20px;
}

.wrap__card {
  width: 40px;
  height: 40px;
  position: relative;
  perspective: 1000px;
}

.wrap__front,
.wrap__back {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
  backface-visibility: hidden;
  border-radius: 10px;
}

.wrap__front {
  background-color: rgb(255 193 101);
}

.wrap__back {
  background-color: rgb(255 193 101);
  transform: rotateY(180deg);
}

.wrap__card.open .wrap__front {
  transform: rotateY(180deg);
}

.wrap__card.open .wrap__back {
  transform: rotateY(360deg);
}
</style>
