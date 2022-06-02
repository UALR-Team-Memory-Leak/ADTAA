<template>
<div>
<div style="background-color:#640309;">
        <img alt="UALRlogo" src="../assets/ualr.png">
    </div>
<div id="container" style="width:100%; padding-top: 50px;">                                   
    <div id="left" style="float:left; width:50%;">
    <center>
        <table>
           <div>
                <ApproveList/>
            </div> 
       </table>
    </center>
    </div>                     
    <div id="right" style="float:right; width:50%;">
        <div> 
            <h3>Registration Approval</h3>
            <hr />
            <form @submit.prevent="onApprove()">
           <div class="form-group">
               <label>ID</label>
               <input type="text" class="form-control" v-model="id"/>
           </div>
           <div class="form-group">
               <label>Role</label>
               <input type="text" class="form-control" v-model="role"/>
           </div>
           <div class="form-group">
               <label>Approve</label>
               <input type="checkbox" v-model="approve"/>
           </div>

           <div class="my-3">
               <button type="submit" class="btn btn-primary">Register</button>
           </div>
       </form>
        </div>
    </div>                   
</div>
<div style="padding:150px"></div>
</div>
</template>

<script>
import ApproveList from '../components/ApproveList.vue';
import axios from "axios";
export default ({
    name: "RootUserPage",
    components: {
        ApproveList,
    },
    data() {
        return {
            id: '',
            role: '',
            approve: '',
        };
      },
      methods: {
    //       next() {
    // axios.get('http://localhost:3333/api/v0/requests')
    //   .then(response => {
    //      this.rows = response.data
    //   }) 
    //   .catch(error => console.log(error))
    //     },


    onApprove() { //why does this work?
    //const test = localStorage.getItem('token');
        var url = ''
    if (process.env.NODE_ENV === 'development') {
      url = 'http://localhost:3333'
    } 
    else {
      url = 'https://test-adoni.herokuapp.com'
    }
          axios.post(`${url}/api/v0/approval/${this.id}`,
              {id: this.id, role: this.role, approve: this.approve},{
                    headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
                //Authorization: 'bearer ' + `${localStorage.getItem('token')}`
                },
              }    
          ).then((response) => {
             window.location.reload();
              console.log(response);
              //axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
          });
      },
    }
      
    });
    
</script>

<style>

</style>