<template>
<div>
<Navigation />
<div class="contanter">
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</div>
<div class="contanter">
<div class="row">
    <div class="col-md-6 offset-md-3">Welcome to the ADTAA: Acedemic Department Teaching Assignment Assistant! 
      Here you will have a schedule generated for you, or you will be able to edit the schedule yourselves.
  </div>
  </div>
</div>
</div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import LogButton from './components/LogButton.vue'
export default {
  name: 'App',
  components: {
    Navigation,
    LogButton,
  }
}
</script>
