<template>
  <div class="SideBar">
    <button>Customers</button>
    <button>Projects</button>
    <button>Reports</button>
    <button>Calendar</button>
  </div>
</template>
<script>
</script>
<style scoped>
.SideBar {
  z-index: 1;
  position: fixed;
  height: 100%;
  width: 10%;
  background-color: #F39C12;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 0 10px 0 rgba(0, 0, 0, 0.19);
  float: left;
}
.SideBarText {
  margin: 0px;
  padding-top: 16px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
}
button {
  font-family: "Roboto", sans-serif;
  color: #fff;
  display: block;
  width: 100%;
  font-size: 1.25em;
  background: transparent;
  height: 64px;
  border: none;
}
button:hover {
  background: rgba(0, 0, 0, 0.033);
}
</style>
