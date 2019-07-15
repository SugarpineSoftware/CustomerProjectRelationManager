<template>
  <div id="app">
    <NewContactForm/>
    <TopBar/>
    <SideBar/>
    <ContactCard
      id="contactCard"
      :contactInfo="company"
      v-for="company in contacts.companies"
      :key="company.company_id"
      v-bind:companyName="company.company_name"
      v-bind:ownerFName="company.owner_fName"
      v-bind:ownerLName="company.owner_lName"
      v-bind:contactFName="company.contact_fName"
      v-bind:contactLName="company.contact_lName"
      v-bind:contactTitle="company.contact_title"
      v-bind:phoneNumber1="company.phone_1"
      v-bind:phoneNumber2="company.phone_2"
      v-bind:email1="company.email_1"
      v-bind:email2="company.email_2"
      v-bind:website="company.website"
      v-bind:generalNotes="company.notes"
    />
    <NewContactButton/>
  </div>
</template>

<script>
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import NewContactButton from "./components/NewContactButton";
import ContactCard from "./components/ContactCard";
import NewContactForm from "./components/NewContactForm";

import contactData from "./assets/data.json";

export default {
  name: "App",
  data() {
    return {
      contacts: contactData
    };
  },
  components: {
    TopBar,
    SideBar,
    NewContactButton,
    ContactCard,
    NewContactForm
  }
};
</script>

<style>
#contactCard {
  margin-top: 64px;
}
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
