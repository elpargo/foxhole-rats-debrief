<script setup>
import RatsDefriefFormOldSchool from "./components/RatsDebriefFormOldSchool.vue"
import RatsDefriefFormFormKit from "./components/RatsDebriefFormFormKit.vue"

</script>

<template>
<div class="text-secondary px-4 py-5 text-center">
    <div class="py-5">
      <h1 class="display-5 fw-bold">Rats Debrief Generator</h1>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4">Quick tool to calculate LBP and then who knows... in hope to replace's Capo's Brain</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">New Awesomenessss</button>
          <button type="button" class="btn btn-secondary btn-lg px-4 gap-3">Olds School model</button>
        </div>
      </div>
    </div>
  </div>
 
<div class="text-bg-success"><RatsDefriefFormFormKit/></div>
<div class="text-bg-primary"><RatsDefriefFormOldSchool/></div>

<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      </a>
      <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Supply Rats </span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
    </ul>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

