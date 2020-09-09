<template>
  <div>
      <AppHeader></AppHeader>
      <div class="container">
          <button class="btn btn-success" @click="Ingrediants = [];Active(-2)">New Recipe</button>
          <div class="row">
                <div class="col-6">
              <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action " v-for="(recipe,i) in R" :key="i" @click="Active(i)">
                   <div class="row">
                       <div class="col-7">
                           <h4>{{ recipe.Name }}</h4>
                             <p>{{ recipe.Desc }}</p>
                       </div>
                       <div class="col-5">
                           <img :src="recipe.Image" alt="" class="img-fluid">
                       </div>
                   </div>
                </button>
                
         </div>
            </div>
        <div class="col-6">
          <h2 v-if="Cur === -1">Please Select a Recipe!</h2>
          <div v-if="Cur >= 0">
            <Recipe :index="Cur" :recipe="R[Cur]"></Recipe>
          </div>
          <div v-if="Cur === -2">
            <form @submit.prevent="">
                <div class="form-group">
                  <label for="Name">Name</label>
                  <input type="text" class="form-control" id="Name" v-model="Name"> 
                </div>
                <div class="form-group">
                  <label for="Image">Image Url</label>
                  <input type="text" class="form-control" id="Image" v-model="Image">
                </div>
                <div class="form-group">
                    <label for="Desc">Description</label>
                    <input type="text" class="form-control" id="Desc" v-model="Desc">
                </div>
                <button class="btn btn-primary" @click="Add()">Save</button>
                <button class="btn btn-danger" @click="Active(-1)">Cancel</button>
                <div>
                    <input type="text" class="form-control" v-for="(Ingrediant,i) in Ingrediants" :key="i" v-model="Ingrediants[i]"  placeholder="Enter Ingrediant">
                </div>
                <button class="btn btn-success" @click="Ingrediants.push('')">Add Ingrediant</button>
            </form>
           </div>
           
             <EditRecipe v-if="Cur === -3"></EditRecipe>
         </div>

       
        


        </div>
          
      </div>
      
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import Recipe from "@/components/Recipe.vue";
import EditRecipe from "@/components/EditRecipe.vue";
export default {
    components:{
        Recipe,AppHeader,EditRecipe
    },
    data(){
        return{
            Ingrediants: [],
            Name: '',
            Image: '',
            Desc: '',
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
        R(){
            return this.$store.getters.Get_All;
        },
        Cur()
        {
            return this.$store.getters.Get_Cur;
        }
    },
    methods:{
        Active(j) {
            const x = document.getElementsByClassName('list-group-item-action');
            for(var i=0;i<x.length;i++)
            {
                if(x[i].className.includes('active') )
                {
                    x[i].classList.remove('active');
                }
            }
            if(j >= 0)
            {
                x[j].className += ' active';
                
            }
            this.Edit_Cur(j);
        },
        Add()
        {
            const x = {
                Name:this.Name,
                Image:this.Image,
                Desc:this.Desc,
                ingrediants:this.Ingrediants,
            }
            
            this.$store.commit('Add_Recipe',x);
            this.Cur = -1;
            this.Name = '';
            this.Image = '';
            this.Desc = '';
            this.ingrediants = [];
            this.Edit_Cur(-1);
        },
        Edit_Cur(x)
        {
            this.$store.commit('Set_Cur',x);
        }
    }
}
</script>

<style>
div.container{
    margin-top: 3%;
}
div.row{
    margin-top: 10px;
}

button.btn{
   margin: 5px;
}

input[type="text"]{
    margin-top: 5px;
}
</style>