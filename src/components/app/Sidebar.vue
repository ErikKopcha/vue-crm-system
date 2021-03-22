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
      <p class="route-wrapper">
        <a href="#" :class="{open: value}" class="waves-effect waves-orange pointer">
          <i class="material-icons">{{ link.icon }}</i>
          <span>{{ link.title }}</span>
        </a>
      </p>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["value"],
  data: () => ({
    links: [
      { title: "Score", url: "/", exact: true, icon: 'account_balance_wallet' },
      { title: "Story", url: "/history", icon: 'featured_play_list'},
      { title: "Planning", url: "/planning", icon: 'event_note' },
      { title: "New entry", url: "/record", icon: 'add_to_photos' },
      { title: "Categories", url: "/categories", icon: 'book' }
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
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 15px;
  transition: all 0.5s;
}

li a.open {
  padding: 0 60px;
}

li a span {
  white-space: nowrap;
  transition: all 0.5s;
  transform: translateX(80px);
  color: black;
}

li a.open span {
  transform: translateX(0);
}

li a i {
  transition: all 0.5s;
  transform: translateX(8px);
  margin-right: 5px;
  font-size: 25px;
}

li a.open i {
  transform: translateX(0);
}

</style>
