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
      {
        Name: 'flafel',
        Desc: 'Syrian Flafel ',
        Image: 'https://kitchen.sayidaty.net/uploads/small/47/47bc7303629287029bc155f156aafd18_w750_h500.jpg',
        ingrediants: ['homos ','test'],
      },

    ],
    ShoppingList: [
      'tomato',
      'test'
    ],
    Users: [],
    Logged : 0,
    Cur: -1,
    Edit_Index: -1,
  },
  getters:{
    Get_Recipe(state)
    {
      return state.Recipes[state.Edit_Index];
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
    },
    Get_Cur(state)
    {
      return state.Cur;
    }
  },
  mutations: {
    Delete_Recipe(state,index)
    {
      state.Recipes.splice(index,1);
    },
    Edit_Recipe(state,New)
    {
      state.Recipes[state.Edit_Index] = New;
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
    },
    Set_Cur(state,idx)
    {
      state.Cur = idx;
    },
    Set_Edit(state,idx)
    {
      state.Edit_Index = idx;
    }
  },
  actions: {
  },
  modules: {
  }
})
