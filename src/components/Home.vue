<template>
  <div
    id="home"
    class="h-4/5 mt-40 flex justify-between items-center px-[2vh] md:px-[4vh] lg:px-[7vh] xl:px-[25vh] flex-col md:flex-row bg-slate-50 "
  >
    <div id="left">
      <h1 class="text-5xl font-bold py-2">Hi,</h1>
      <h1 class="text-5xl font-bold py-2">
        I'm <span class="text-blue-500">Tualor</span>
      </h1>
      <h1 class="text-5xl font-bold py-2">Web Developer</h1>
      <button
        class="bg-blue-400 px-6 py-2 rounded-md font-semibold mt-10 hover:bg-blue-600 hover:shadow-md hover:shadow-gray-500 duration-75 ease-in"
      >
        Contact
      </button>
      <div
        id="links"
        class="flex items-center justify-start ml-2 mt-10 gap-4 text-xl w-[50%]"
      >
        <a
          href="https://wa.me/8562091143123"
          target="_blank"
          class="cursor-pointer hover:text-blue-500 duration-75 ease-in"
          ><i class="fa-brands fa-whatsapp"></i
        ></a>

        <a
          href="https://web.facebook.com/kubxob.lor.5"
          target="_blank"
          class="cursor-pointer hover:text-blue-500 duration-75 ease-in"
          ><i class="fa-brands fa-facebook"></i
        ></a>
        <a
          href="https://github.com/TKXDev"
          target="_blank"
          class="cursor-pointer hover:text-blue-500 duration-75 ease-in"
          ><i class="fa-brands fa-github cursor-pointer hover:text-blue-500"></i
        ></a>
      </div>
    </div>
    <div id="right">
      <div
        id="home_img"
        class="bg-blue-500 px-6 pt-10 rounded-full overflow-hidden static md:relative z-[0] lg:static bottom-[-200px] md:bottom-[-100px] right-[20px]"
      >
        <img src="../assets/Tualor.png" class="w-[250px] lg:w-[300px]" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: "main",
};
</script>

<style></style>
