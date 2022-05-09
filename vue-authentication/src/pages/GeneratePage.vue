<template>
<div class="row">
    <div class="col-md-6 offset-md-3">
        <div>
            <img alt="UALRlogo" src="../assets/ualr.png">
       <form>
           <div class="my-3">
               <login-button type="submit" class="btn btn-primary" buttonText="select"></login-button>
           </div>
           <div class="my-3">
               <login-button type="submit" class="btn btn-primary" buttonText="edit"></login-button>
           </div>
       </form>
    </div>
    </div>
</div>
</template>

<script>
import LoginButton from '../components/LogButton.vue';

export default {
    name: "Login",
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
};
</script>