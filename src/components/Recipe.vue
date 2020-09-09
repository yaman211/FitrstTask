<template>
    <div>
        <img :src="recipe.Image" alt="" class="img-fluid">
        <h3>{{ recipe.Name }}</h3>
        <p>{{ recipe.Desc }}</p>
        <div class="dropdown">
            <button class="btn btn-primary  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Manage Recipe
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button class="dropdown-item"  @click="Add_Items()">To Shopping list</button>
              <button class="dropdown-item"  @click="Edit()">Edit</button>
              <button class="dropdown-item"  @click="Delete()">Delete</button>
            </div>
        </div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(ingrediant,i) in recipe.ingrediants" :key="i">{{ ingrediant }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['index','recipe'],
    methods: {
        Add_Items() {
            for(var i=0;i<this.recipe.ingrediants.length;i++)
            {
                this.$store.commit('Add_Item',this.recipe.ingrediants[i]);
            }
        },
        Delete()
        {
            this.$store.commit('Delete_Recipe',this.index);
            this.$store.commit('Set_Cur',-1);
        },
        Edit()
        {
            this.$store.commit('Set_Edit',this.index);
            this.$store.commit('Set_Cur',-3);
        }
    },
};
</script>

<style>
.dropdown-toggle{
    margin-bottom: 10px;
}
</style>