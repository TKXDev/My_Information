<template>
  <div
    id="skills"
    class="flex flex-col justify-center py-16 px-[1vh] md:px-[3vh] lg:px-[5vh] xl:px-[8vh] bg-slate-50"
  >
    <header class="mb-8 mt-8 flex justify-center items-center">
      <h1 class="text-2xl font-bold text-blue-500 border-b-4 border-blue-500">
        Skills
      </h1>
    </header>
    <main class="flex items-center flex-col lg:flex-row justify-between mt-12">
      <div
        class="w-auto sm:w-[550px] mr-4 flex lg:block flex-col justify-center items-center"
      >
        <div
          id="main_text"
          class="flex lg:block justify-center items-center flex-col"
        >
          <h1 class="text-3xl font-semibold mb-6">Profesional Skills</h1>
          <p class="mb-6">
            ປະຈຸບັນແມ່ນຂ້ອຍກຳລັງສຶກສາຢູ່ທີ່ ມະຫາວິທະຍາໄລແຫ່ງຊາດປີທີ່ 1
            ແລະອິກຢ່າງຂ້ອຍຫາກໍມາຈິງຈັງໃນການສຶກສາກ່ຽວກັບການພັດທະເວັບໄດ້ພຽງບໍ່ຮອດປີນັ້ນເລີຍເຮັດໃຫ້ຂ້ອຍມີຄວາມຮູ້ໃນທັກສະພາສາ,ເເຟຼມເວິດແລະໄລບຼາຣີບໍ່ຫຼາຍປານໃດ.
            ດັ່ງລຸ່ມນີ້ແມ່ນທັກສະຕ່າງໆທີ່ຂ້ອຍຮູ້ທັງໝົດໃນຕອນນີ້:
          </p>
        </div>
        <div id="main_skills" class="w-[100%]">
          <div
            id="html"
            class="bg-white flex items-center justify-between my-4 px-4 py-3 rounded-md font-semibold shadow-[0px_0px_3px_3px_rgba(0,0,0,.1)]"
          >
            <div id="skill_name" class="flex items-center justify-center">
              <ion-icon
                name="logo-html5"
                class="text-2xl mr-2 text-blue-600"
              ></ion-icon>
              <span>HTML</span>
            </div>
            <div id="skills_percent">80%</div>
          </div>
          <div
            id="css"
            class="bg-white flex items-center justify-between my-4 px-4 py-3 rounded-md font-semibold shadow-[0px_0px_3px_3px_rgba(0,0,0,.1)]"
          >
            <div id="skill_name" class="flex items-center justify-center">
              <ion-icon
                name="logo-css3"
                class="text-2xl mr-2 text-blue-600"
              ></ion-icon>
              <span>CSS</span>
            </div>
            <div id="skills_percent">70%</div>
          </div>
          <div
            id="javascript"
            class="bg-white flex items-center justify-between my-4 px-4 py-3 rounded-md font-semibold shadow-[0px_0px_3px_3px_rgba(0,0,0,.15)]"
          >
            <div id="skill_name" class="flex items-center justify-center">
              <ion-icon
                name="logo-javascript"
                class="text-2xl mr-2 text-blue-600"
              ></ion-icon>
              <span>JAVASCRIPT</span>
            </div>
            <div id="skills_percent">60%</div>
          </div>
          <div
            id="tailwind"
            class="bg-white flex items-center justify-between my-2 px-4 py-3 rounded-md font-semibold shadow-[0px_0px_3px_3px_rgba(0,0,0,.15)]"
          >
            <div id="skill_name" class="flex items-center justify-center">
              <ion-icon
                name="logo-html5"
                class="text-2xl mr-2 text-blue-600"
              ></ion-icon>
              <span>TAILWINDCSS</span>
            </div>
            <div id="skills_percent">75%</div>
          </div>
          <div
            id="vue"
            class="bg-white flex items-center justify-between my-4 px-4 py-3 rounded-md font-semibold shadow-[0px_0px_3px_3px_rgba(0,0,0,.15)]"
          >
            <div id="skill_name" class="flex items-center justify-center">
              <ion-icon
                name="logo-vue"
                class="text-2xl mr-2 text-blue-600"
              ></ion-icon>
              <span>VUE JS</span>
            </div>
            <div id="skills_percent">50%</div>
          </div>
        </div>
      </div>
      <div id="right" class="text-center ml-4">
        <div
          id="img"
          class="w-auto sm:w-[550px] lg:w-[500px] xl:w-[550px] rounded-xl overflow-hidden"
        >
          <img src="../assets/work3.jpg" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: "skills",
};
</script>

<style scoped></style>
