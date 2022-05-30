<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">UALR</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" v-if="user1">
        <li class="nav-item">
          <router-link class="nav-link" to="/app">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/homepage">Home Page</router-link>
        </li>
        <li class="nav-item" v-if="showLogout">
          <button class="nav-link" @click="logout">Logout</button>
        </li>
      </ul>
      <ul class="navbar-nav" v-if="user2">
        <li class="nav-item">
          <router-link class="nav-link" to="/app">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/homepage">Home Page</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/myschedule">View Schedule</router-link>
        </li>
        <li class="nav-item" v-if="showLogout">
          <button class="nav-link" @click="logout">Logout</button>
        </li>
      </ul>
      <ul class="navbar-nav" v-if="user3">
        <li class="nav-item">
          <router-link class="nav-link" to="/app">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/homepage">Home Page</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/myschedule">View Schedule</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/setup">Setup</router-link>
        </li>
        <li class="nav-item" v-if="showLogout">
          <button class="nav-link" @click="logout">Logout</button>
        </li>
      </ul>
      <ul class="navbar-nav" v-if="user4">
        <li class="nav-item">
          <router-link class="nav-link" to="/app">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/homepage">Home Page</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/rootuserpage">Register Approval</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/myschedule">View Schedule</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/setup">Setup</router-link>
        </li>
        <li class="nav-item" v-if="showLogout">
          <button class="nav-link" @click="logout">Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default ({
  name: 'Navigation-item',
  components: {
  },
  data() {
    return {
      user1: false,
      user2: false,
      user3: false,
      user4: false,
      showLogout: false
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      setTimeout(() => {
        this.$router.push("/login")
      }, 2000);
    }
  },
  mounted() {
    var data = localStorage.getItem('role');
    if (data === 1) {
      this.user1 = true
      this.user2 = false
      this.user3 = false
      this.user4 = false
      this.showLogout = true
    } else if (data === 2) {
      this.user1 = false
      this.user2 = true
      this.user3 = false
      this.user4 = false
      this.showLogout = true
    } else if (data === 3) {
      this.user1 = false
      this.user2 = false
      this.user3 = true
      this.user4 = false
      this.showLogout = true
    } else {
      this.user1 = false
      this.user2 = false
      this.user3 = false
      this.user4 = true
      this.showLogout = true
    }
  }
})
</script>