import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Recipes: [
      {
        Name: 'flafel',
        Desc: 'Syrian Flafel ',
        Image: 'https://kitchen.sayidaty.net/uploads/small/47/47bc7303629287029bc155f156aafd18_w750_h500.jpg',
        ingrediants: ['homos ','test'],
      },
      {
        Name: 'Beef  Shawarma',
        Desc: 'Syrian Shawarma ',
        Image: 'https://chowhound1.cbsistatic.com/thumbnail/1200/0/chowhound1.cbsistatic.com/assets/models/promotions/photos/29598/original/beef-shawarma-recipe-chowhound.jpg',
        ingrediants: ['meet ','meet'],
      },
    ],
    ShoppingList: [
      'tomato',
      'test'
    ],
    Users: [],
    Logged : 1,

  },
  getters:{
    Get_Recipe(state,index)
    {
      return state.Recipes[index];
    },
    Get_All(state)
    {
      return state.Recipes;
    },
    shopping(state)
    {
      return state.ShoppingList;
    },
    Get_Users(state){
      return state.Users;
    },
    Logged(state){
      return state.Logged;
    }
  },
  mutations: {
    Delete_Recipe(state,index)
    {
      state.Recipes.splice(index,1);
    },
    Edite_Recipe(state,index,New)
    {
      state.Recipes[index] = New;
    },
    Add_Recipe(state,Recipe)
    {
      state.Recipes.push(Recipe);
    },
    Add_Item(state,Name){
      state.ShoppingList.push(Name);
    },
    Delete_Item(state,idx)
    {
      state.ShoppingList.splice(idx,1);
    },
    Login(state)
    {
      state.Logged = 1;
    },
    Logout(state){
      state.Logged = 0;
    },
    Add_User(state,User){
      state.Users.push(User);
    }
  },
  actions: {
  },
  modules: {
  }
})
