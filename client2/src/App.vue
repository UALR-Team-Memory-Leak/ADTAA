<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div>
      <router-view/>
    </div>
    <Footer /> 
  </div>
</template>

<script>
import Navbar from "./components/Navigation.vue";
import Footer from "./components/UalrFooter.vue"
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
