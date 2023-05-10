<template>
  <div id="home" class="flex flex-col justify-center bg-slate-50">
    <header
      class="bg-white flex justify-between items-center px-[5vh] sm:px-[8vh] lg:px-[15vh] py-5 shadow-md fixed z-[999] top-0 left-0 right-0"
    >
      <router-link to="/"><div id="logo" class="text-2xl font-semibold text-blue-500">TKXDev</div></router-link>
      <nav
        ref="navbar"
        :class="{ hidden: isnavhidden }"
        class="font-semibold text-center rounded-bl-[10px] md:block absolute md:static grid grid-cols-1 gap-5 top-[72px] right-0 px-16 md:px-0 py-8 md:py-0 bg-blue-950 text-white md:text-black md:bg-white"
      >
        <a
          class="mx-5 hover:text-blue-400 md:hover:text-blue-500"
          :href="`#${nav.id}`"
          v-for="(nav, i) in navs"
          :key="i"
          @click="togglenav()" 
          >{{ nav.name }}</a
        >
      </nav>
      <div @click="togglenav()" class="block md:hidden text-xl cursor-pointer">
        <!-- <ion-icon name="menu-outline"></ion-icon> -->
        <i
          :class="{
            'fa-solid fa-bars': isnavhidden,
            'fa-solid fa-x': !isnavhidden,
          }"
        ></i>
      </div>
    </header>
    <div><Home /></div>
    <div><About /></div>
    <div><Skills /></div>
    <div><Contact /></div>
    <div><Footer /></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld
    Home,
    About,
    Skills,
    Contact,
    Footer,
  },
  data() {
    return {
      navs: [
        { id: "home", name: "Home" },
        { id: "about", name: "About" },
        { id: "skills", name: "Skills" },
        { id: "contact", name: "Contact" },
      ],
      isnavhidden: true,
    };
  },
  methods: {
    togglenav() {
      this.isnavhidden = !this.isnavhidden;
    },
  },
};
</script>
