<template>
<body>
  <NewNavigation/>
  <div class="row">
    <div class="col-md-6 offset-md-3">
           <div>
            <img alt="UALRlogo" src="../assets/ualr.png">
    </div>
    </div>
</div>

<div class='schedule'></div>
<br>
</body>
</template>

<script>
import NewNavigation from '../components/NewNavigation.vue'
export default ({
     name: "Setup",
    components: {
        NewNavigation,
    },

});

</script>