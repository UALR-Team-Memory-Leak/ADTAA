<template>
  <div>
      <table border="5px" >
          <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
          </tr>
          <tr v-for="user in list" v-bind:key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.username}}</td>
                <td>{{user.email}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
import axios from 'axios';
export default ({
    name: "ApproveList",
    data(){
        return{list: undefined}
    },
    mounted(){
        axios.get('http://localhost:3333/requests')
        .then((resp)=>{
            this.list=resp.data.users;
            console.warn(resp.data.users)
        })
    }
})
</script>

<style>

</style>