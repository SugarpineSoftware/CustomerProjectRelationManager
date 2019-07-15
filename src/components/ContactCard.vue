<template>
  <div class="ContactCard">
    <span>
      <div>
        <img scr="../assets/profile.png">
      </div>
      <h1 class="ContactHeader">{{companyName}}</h1>
      <p id="ownerName">OwnerName:{{ownerFName}} {{ownerLName}}</p>
      <p id="contactName">Contact Name: {{contactFName}} {{contactLName}}</p>
      <p id="contactTitle">Contact Title: {{contactTitle}}</p>
      <p id="phoneNumber1">Phone Number: {{phoneNumber1}}</p>
      <p id="phoneNumber2">Phone Number: {{phoneNumber2}}</p>
      <p id="emial1">Email: {{email1}}</p>
      <p id="email2">Email: {{email2}}</p>
      <p id="website">Website: {{website}}</p>
      <p id="generalNotes">General Notes: {{generalNotes}}</p>
      <button id="editBtn">Edit</button>
      <button id="projectBtn">Projects</button>
    </span>
  </div>
</template>

<script>
export default {
  name: "contactCard",
  props: {
    companyName: String,
    ownerFName: String,
    ownerLName: String,
    contactFName: String,
    contactLName: String,
    contactTitle: String,
    phoneNumber1: Number,
    phoneNumber2: Number,
    email1: String,
    email2: String,
    website: String,
    generalNotes: String
  }
};
</script>

<style scoped>
* {
  margin: 0px;
}
#ownerName {
  left: 100px;
}
#contactName {
}
#contactTitle {
}
#phoneNumber1 {
}
#phoneNumber2 {
}
#email1 {
}
#email2 {
}
#website {
}
#generalNotes {
}
img {
  z-index: 4;
  float: left;
  margin-left: 5%;
  margin-top: 64px;
}
.ContactCard {
  z-index: 1;
  height: 256px;
  background: linear-gradient(#ccc, #fff);
  float: right;
  width: 90%;
}
button {
  background-color: #F39C12;
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  position: relative;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 0 10px 0 rgba(0, 0, 0, 0.19);
}
#projectBtn {
  float: right;
}
#editBtn {
  float: right;
}
</style>