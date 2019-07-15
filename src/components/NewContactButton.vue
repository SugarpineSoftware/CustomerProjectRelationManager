<template>
  <div class="NewContactButton">
    <button>
      <img src="../assets/Plus.png">
    </button>
  </div>
</template>

<style scoped>
button {
  background-color: #F39C12;
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  position: fixed;
  bottom: 0px;
  right: 20px;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 0 10px 0 rgba(0, 0, 0, 0.19);
}
img {
  position: absolute;
  top: 50%;
  left: 50%;
  scale: 50%;
  transform: translate(-50%, -49%);
}
</style>