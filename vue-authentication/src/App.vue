<template>
<div>
<Navigation />
<div class="contanter">
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div>
        <img alt="UALR logo" src="./assets/ualr.png">
        <router-view></router-view>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import Navigation from './components/Navigation.vue'
export default {
  name: 'App',
  components: {
    Navigation,
  }
}
</script>
