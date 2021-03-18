<template>
  <ul class="sidenav app-sidenav" :class="{ open: value }">
    <div class="wrap" @click.prevent="$emit('toggleSidebar')">
      <div class="wrap__card" :class="{ open: value }">
        <button class="btn waves-effect waves-light wrap__front" type="submit" name="action">
          <i class="material-icons center">clear_all</i>
        </button>
        <button class="btn waves-effect waves-light wrap__back" type="submit" name="action">
          <i class="material-icons center rotate">close</i>
        </button>
      </div>
    </div>

    <router-link
      v-for="link in links"
      :key="link.url"
      :to="link.url"
      :exact="link.exact"
      tag="li"
      active-class="active"
    >
      <p class="route-wrapper"><a href="#" :class="{open: value}" class="waves-effect waves-orange pointer"><span>{{ link.title }}</span><i class="material-icons">{{ link.icon }}</i></a></p>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["value"],
  data: () => ({
    links: [
      { title: "Счет", url: "/", exact: true, icon: 'account_balance_wallet' },
      { title: "История", url: "/history" },
      { title: "Планирование", url: "/planning" },
      { title: "Новая запись", url: "/record" },
      { title: "Категории", url: "/categories" }
    ]
  })
};
</script>

<style scoped>
/* flip */
.wrap {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 15px;
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
  transition: 0.5s;
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

.rotate {
  transform: rotate(180deg);
}

li a {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  transition: all 0.5s;
}

li a span {
  transform-origin: left center;
  transition: all 0.5s;
  transform: scale(0);
  font-size: 0;
}

li a.open span {
  transform: scale(1);
  font-size: unset;
  padding-right: 10px;
}

li a i {
  transition: all 0.5s;
  transform: scale(1);
  font-size: 25px;
}

li a.open i {
  transform: scale(0);
  font-size: unset;
  padding-right: 10px;
}

.route-wrapper {
  display: flex;
  align-items: center;
}
</style>
