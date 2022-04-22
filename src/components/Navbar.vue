<template>
  <div>
    <b-navbar
      fixed="top"
      toggleable="lg"
      type="dark"
      variant="danger"
      class="mb-3"
    >
      <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->
      <b-button v-b-toggle.collapse-person class="m-1">+ Человек</b-button>
      <b-button v-b-toggle.collapse-car class="m-1">+ Машина</b-button>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>

<style>
</style>