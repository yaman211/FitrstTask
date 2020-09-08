<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link to='/recipes' class="nav-link" href="#">Recipes <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link to='/shopping-list' class="nav-link" href="#">Shopping list</router-link>
      </li>

       <li class="nav-item">
            <a class="nav-link" href="#" @click="Logout()">Logout</a>
        </li>
    
    </ul>
  </div>
</nav>

</template>

<script>
export default {
  methods:{
    Logout()
    {
      this.$store.commit('Logout');
      this.$router.push('/auth');
    }
  },
};
</script>

<style>

</style>