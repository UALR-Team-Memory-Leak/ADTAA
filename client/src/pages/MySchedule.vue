<template>
<div class="row">
    <div class="col-md-6 offset-md-3">
           <div>
            <img alt="UALRlogo" src="../assets/ualr.png">
        
       <form>
           <table class="table">
  <thead>
    <tr>
      <th scope="col">Course Reference #</th>
      <th scope="col">Course Section #</th>
      <th scope="col">Class</th>
      <th scope="col">Instructor</th>
      <th scope="col">Time Period</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
    </tr>
  </tbody>
</table>
           <div class="my-3">
               <div class="my-3">
               <button v-on:click="onScheduling" type="submit" class="btn btn-primary" buttonText="Edit">Edit</button>
           </div>
               <router-link class="nav-link" to="/homepage">
               <button type="submit" class="btn btn-primary" buttonText="Submit"></button>
           </router-link>
           </div>
       </form>
    </div>
    </div>
</div>
</template>

<script>

import axios from "axios"

export default {
    data() {
    return {
        schedule: null
    }
    },
    methods: {
      onScheduling: function(event) {
        axios.get(
            'http://localhost:3333/api/v0/assistant/scheduler',
        ).then((response) => {
          this.schedule = response;
          console.log(response);
        });
      },
  },
}
</script>