<template>
<div id="container" style="width:100%;">                                   
    <div id="left" style="float:left; width:50%;">
    <center>
        <div>
            <img alt="UALRlogo" src="../assets/ualr.png">
        </div>
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
               <input type="ID" class="form-control" v-model="id"/>
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
</template>

<script>
import ApproveList from '../components/ApproveList.vue';
import axios from "axios";
export default ({
    name: "RootUserPage",
    components: {
        // id: '',
        // role: '',
        // approve: '',
        ApproveList,
    },
    data() {
        return {

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


    onApprove() {
          axios.post(
               'http://localhost:3333/api/v0/approval/' + this.id,
              {id: this.id, role: this.role, approve: this.approve},{
                    headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
                }
              }
              
            
          ).then((response) => {
              console.log(response);
              //axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
          });
      },
    }
      
    });
    
</script>

<style>

</style>