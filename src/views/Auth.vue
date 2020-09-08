<template>
  <div class="container">
    <div class="alert alert-danger" role="alert" v-if="error">
      Error in Email or Password
  </div>  
      <form  @submit.prevent="">
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="Email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="Pass">
  </div>
  
  <button  class="btn btn-primary" @click="State ? Login() : Register()"> {{ State ? 'Login' : 'Register' }} </button>
  <button  class="btn btn-primary" @click="State = 1-State;error = 0">Switch</button>
</form>

  </div>
</template>

<script>
export default {
   data(){
       return{
           State: 1,
           error: 0,
           Email: '',
           Pass: '',
       };
   },
   created()
   {
      if(this.$store.getters.Logged)
      {
        this.$router.push('/recipes');
      }
   },
   methods:{
    Login()
     {
       let Users = this.$store.getters.Get_Users;
       for(var i=0;i<Users.length;i++)
       {
         if(Email === Users[i].Email && Pass === Users[i].Pass)
         {
           this.$store.commit('Login');
           break;
         }
       }
       if(!this.$store.getters.Logged)
       {
         this.error = 1;
       }
       else{
         this.$router.push('/recipes');
       }
     },
      Register(){
     
     if(this.Email && this.Pass)
     {
       this.$store.commit('Add_User',this.Email,this.Pass);
       this.$store.commit('Login');
       this.$router.push('/recipes');
     }
     this.Email = '';
     this.Pass = '';
   }
   },
  
}
</script>

<style scoped>
div.container{
    margin-top: 10%;
    width: 30%;
}
button{
    margin-right: 10px;
}

</style>
