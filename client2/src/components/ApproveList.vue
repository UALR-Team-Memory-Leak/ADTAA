<template>
  <div>
      <table border= 1>
          <tr border= 1>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
          </tr>
          <tr v-for="user in list" v-bind:key="user.id" border= 1>
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
        var url = ''
    if (process.env.NODE_ENV === 'development') {
      url = 'http://localhost:3333'
    } else {
      url = 'https://test-adoni.herokuapp.com'
    }
        axios.get(`${url}/requests`)
        .then((resp)=>{
            this.list=resp.data.users;
            console.warn(resp.data.users)
        })
    }
})
</script>

<style>

</style>