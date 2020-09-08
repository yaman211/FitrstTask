<template>
  <div>
      <div class="container">
        <form >
            <div class="form-group">
              <label for="Name">Name</label>
              <input type="text" class="form-control" id="Name" v-model="Name">
            </div>
        </form>
        <div class="form-group">
            <button class="btn btn-success" @click="Add()">Add</button>
            <button class="btn btn-danger" @click="Delete()">Delete</button>
        </div>
        <div class="list-group">
            <button type="button" class="list-group-item list-group-item-action" v-for="(item,i) in List" :key="i" @click="Idx = i; Name=item">
                {{ item }}
            </button>
      </div>
      </div>

      
  </div>
</template>

<script>
export default {
    data(){
        return{
            Name: '',
            Idx: -1,
        };
    },
    created()
    {
        if(!this.$store.getters.Logged)
        {
            this.$router.push('/auth');
        }
    },
    computed:{
        List(){
            return this.$store.getters.shopping;
        }
    },
    methods:{
        Add(){
            if(this.Name)
            {
                this.$store.commit('Add_Item',this.Name);
            }
        },
        Delete()
        {
            if(this.Idx != -1)
            {
                this.$store.commit('Delete_Item',this.Idx);
                this.Idx = -1;
                this.Name = '';
            }
        }
    }
};
</script>

<style scoped>

div.container{
    margin-top: 3%;
}

button.btn{
    margin-right: 5px;
}
div.container form{
    width: 30%;
}
</style>