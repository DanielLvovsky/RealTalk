<template>
  <header>
    <section>
      <div class="col1">
        <a href="/">
          <h3></h3>
          <img src="logo.svg" width="50" height="50">
        </a>
        <ul class="inline">
          <li>
            <router-link to="/">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/settings">Settings</router-link>
          </li>
          <li><a @click="logout()">Logout</a></li>
        </ul>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>
