<template>
  
              <div class="my-3">
               <router-link class="nav-link" to="/generatepage">
               <login-button type="submit" class="btn btn-primary" buttonText="Generate Schedule"></login-button>
                </router-link>
           </div>
          
</template>

<script>
import LoginButton from '../components/LogButton.vue';
export default {
     name: "Login",
    components: {
        LoginButton,
    },

};
</script>

<style>

</style>