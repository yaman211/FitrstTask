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
              <a class="dropdown-item" href="#" @click="Add_Items()">To Shopping list</a>
              <a class="dropdown-item" href="#">Edit</a>
              <a class="dropdown-item" href="#" @click="Delete()">Delete</a>
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
        }
    },
};
</script>

<style>
.dropdown-toggle{
    margin-bottom: 10px;
}
</style>