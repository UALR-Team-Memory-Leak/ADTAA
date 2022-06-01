<template>
<!-- <body style="background-color:#640309;"> -->
  <div>
    <div class="row">
      <div class="col-md-6 offset-md-3">
          <div>
              <img alt="UALRlogo" src="../assets/ualr.png">
          <div>
            
              <h3>Login</h3>
              <hr />
          </div>
        <form @submit.prevent="onLogin">
            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" v-model="email" />
                <div class="error" v-if="errors.email">{{errors.email}}</div>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" v-model="password" />
                <div class="error" v-if="errors.password">{{errors.password}}</div>
            </div>
            <div class="my-3">
                <login-button type="submit" class="btn btn-primary" buttonText="Login"></login-button>
            </div>
        </form>
      </div>
      </div>
  </div>
  </div>
  <!-- </body> -->
</template>

<script>
import { mapActions } from 'vuex';
import LoginButton from '../components/LogButton.vue';
import axios from "axios";
export default ({
  name: "LoginPage",
  components: {
    LoginButton,
  },
  data() {
      return {
          email: '',
          password: '',
          errors: {},
      };
  },
  methods: {
    ...mapActions('auth', ['saveRoleToStore']),
      onLogin() {
          var url = ''
            if (process.env.NODE_ENV === 'development') {
                url = 'http://localhost:3333'
            } else {
                url = 'https://test-adoni.herokuapp.com'
            }
          
         axios.post(
               `${url}/api/v0/auth/login`,
              {email: this.email, password: this.password}
          ).then((response) => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    localStorage.setItem('token', JSON.stringify(response.data.token));
                    localStorage.setItem('role', response.data.userRole[0].role);
                    this.saveRoleToStore(response.data.userRole[0].role);
                    axios.defaults.headers.common.Authorization = response.data.token
                       this.$router.push({path:'/homepage'});
                }
                return response.data;
          });
          
      },
  },
});
</script>
