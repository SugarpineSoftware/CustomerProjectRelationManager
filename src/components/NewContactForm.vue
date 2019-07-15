<template>
  <div class="NewContactForm">
    <form>
      Company Id
      <input type="text" v-model="companyId">
      Company Name
      <input type="text" v-model="companyName">
      Owner First Name
      <input type="text" v-model="ownerFName">
      Owner Last Name
      <input type="text" v-model="ownerLName">
      Contact First Name
      <input type="text" v-model="contactFName">
      Contact Last Name
      <input type="text" v-model="contactLName">
      Contact Title
      <input type="text" v-model="contactTitle">
      Phone 1
      <input type="number" v-model="phone1">
      Phone 2
      <input type="number" v-model="phone2">
      email 1
      <input type="text" v-model="email1">
      email 2
      <input type="text" v-model="email2">
      website
      <input type="text" v-model="website">
      notes
      <input type="text" v-model="notes">
    </form>
    <table border="1">
      <thead>
        <td>companyId</td>
        <td>companyName</td>
        <td>ownerFName</td>
        <td>ownerLName</td>
        <td>contactFName</td>
        <td>contactLName</td>
        <td>contactTitle</td>
        <td>phone1</td>
        <td>phone2</td>
        <td>email1</td>
        <td>email2</td>
        <td>website</td>
        <td>notes</td>
      </thead>
      <tbody>
        <tr v-for="x in arr" v-bind:key="x.companyId">
          <td>{{x.companyId}}</td>
          <td>{{x.companyName}}</td>
          <td>{{x.ownerFName}}</td>
          <td>{{x.ownerLName}}</td>
          <td>{{x.contactFName}}</td>
          <td>{{x.contactLName}}</td>
          <td>{{x.contactTitle}}</td>
          <td>{{x.phone1}}</td>
          <td>{{x.phone2}}</td>
          <td>{{x.email1}}</td>
          <td>{{x.email2}}</td>
          <td>{{x.website}}</td>
          <td>{{x.notes}}</td>
        </tr>
      </tbody>
    </table>
    <button @click="saveFile()">Submit</button>
    <button @click="add()">Add</button>
  </div>
</template>

<script>
import JsonData from "../assets/data.json";

export default {
  data: function() {
    return {
      companyId: String,
      companyName: String,
      ownerFName: String,
      ownerLName: String,
      contactFName: String,
      contactLName: String,
      contactTitle: String,
      phone1: Number,
      phone2: Number,
      email1: String,
      email2: String,
      website: String,
      notes: String,
      arr: []
    };
  },

  methods: {
    add: function(e) {
      this.arr.push({
        companyId: this.companyId,
        companyName: this.companyName,
        ownerFName: this.ownerFName,
        ownerLName: this.ownerLName,
        contactFName: this.contactFName,
        contactLName: this.contactLName,
        contactTitle: this.contactTitle,
        phone1: this.phone1,
        phone2: this.phone2,
        email1: this.email1,
        email2: this.email2,
        website: this.website,
        notes: this.notes
      });
    },
    saveFile: function() {
  

      var newData = JSON.parse(JsonData); //parse the JSON
      newData.companies.push(this.arr);
      JsonData = JSON.stringify(newData);
      console.log(JsonData);
    }
  }
};
</script>

