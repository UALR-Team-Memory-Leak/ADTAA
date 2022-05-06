<template>
<div class="row">
    <div class="col-md-6 offset-md-3">
        <div>
        <div>
            <h3>Login</h3>
            <hr />
        </div>
       <form @submit.prevent="onLogin()">
           <div class="form-group">
               <label>Username</label>
               <input type="text" class="form-control" v-model="username" />
               <div class="error" v-if="errors.username">{{errors.username}}</div>
           </div>
           <div class="form-group">
               <label>Password</label>
               <input type="password" class="form-control" v-model="password" />
               <div class="error" v-if="errors.password">{{errors.password}}</div>
           </div>

           <div class="my-3">
               <button type="submit" class="btn btn-primary">Login</button>
           </div>
       </form>
    </div>
    </div>
</div>
</template>
<script>
import LoginValidations from '../services/LoginValidations';
export default {
  data() {
      return {
          username: '',
          password: '',
          errors: {},
      };
  },
  methods: {
      onLogin() {
          let validations = new LoginValidations(
              this.username, 
              this.password,
              );

            this.errors = validations.checkValidations();
            if (this.errors.length) {
                return false;
            }
      }
  }
};
</script>