<template>
  <div id="contact" class="flex flex-col items-center mt-16 py-20 px-2">
    <header class="mb-8 mt-8 flex justify-center items-center">
      <h1 class="text-2xl font-bold text-blue-500 border-b-4 border-blue-500">
        Contact
      </h1>
    </header>
    <main
      id="content"
      class="flex justify-center items-center flex-col gap-10 text-lg mt-20 w-auto sm:w-[50vh]"
    >
      <input
        type="text"
        placeholder="Name"
        class="px-6 py-4 rounded-2xl font-semibold border-2 border-black outline-none w-[100%] shadow-[0px_0px_3px_3px_rgba(0,0,0,.15)]"
      />
      <input
        type="email"
        placeholder="Email"
        class="px-6 py-4 rounded-2xl font-semibold border-2 border-black outline-none w-[100%] shadow-[0px_0px_3px_3px_rgba(0,0,0,.15)]"
      />
      <textarea
        cols="30"
        rows="10"
        class="p-4 w-[100%] outline-none border-2 border-black rounded-2xl shadow-[0px_0px_3px_3px_rgba(0,0,0,.15)]"
      ></textarea>
      <button
        class="bg-blue-500 px-4 py-2 rounded-md static sm:relative right-[-140px] top-[-20px] duration-300 hover:bg-blue-700 hover:shadow-md hover:shadow-gray-500"
      >
        Enviar
      </button>
    </main>
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: "contact",
};
</script>

<style></style>
