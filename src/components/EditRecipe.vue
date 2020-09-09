<template>
  <div>
    <form @submit.prevent="">
        <div class="form-group">
          <label for="Name">Name</label>
          <input type="text" class="form-control" id="Name" v-model="Name"> 
        </div>
        <div class="form-group">
          <label for="Image">Image Url</label>
          <input type="text" class="form-control" id="Image" v-model="Image">
        </div>
        <img :src="Image" alt="" class="img-fluid">
        <div class="form-group">
            <label for="Desc">Description</label>
            <input type="text" class="form-control" id="Desc" v-model="Desc">
        </div>
        <button class="btn btn-primary" @click="Update()">Save</button>
        <button class="btn btn-danger" @click="Edit_Cur()">Cancel</button>
        <div>
            <input type="text" class="form-control" v-for="(ingrediant,i) in ingrediants" :key="i" v-model="ingrediants[i]"  placeholder="Enter Ingrediant">
        </div>
        <button class="btn btn-success" @click="ingrediants.push('')">Add Ingrediant</button>
    </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            Name:'',
            Image:'',
            Desc: '',
            ingrediants: [],
        };
    },
    created()
    {
        const x = this.$store.getters.Get_Recipe;
        this.Name = x.Name;
        this.Image = x.Image;
        this.Desc = x.Desc;
        this.ingrediants = x.ingrediants;
    },
    methods:{
        Update()
        {
            const x = {
                Name:this.Name,
                Image:this.Image,
                Desc:this.Desc,
                ingrediants:this.ingrediants,
            };
            console.log(x);
            this.$store.commit('Edit_Recipe',x);
            this.$store.commit('Set_Cur',-1);
        },
        Edit_Cur()
        {
            this.$store.commit('Set_Cur',-1);
        }
    }
}
</script>

<style>

</style>