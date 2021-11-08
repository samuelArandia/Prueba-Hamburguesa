<template>
  
  <div class="container">
    <div class="card">
      <h1 class="card-header">
         Menú de hamburguesas
      </h1>
            <button type="button" class="btn btn-primary" v-on:click="nuevo()">Nueva Hamburguesa</button><br>
          <p>Presiona la hamburguesa que desees editar</p>
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nombres</th>
                  <th>Ingredientes</th>
                  <th>Calorias</th>
                  
                </tr> 
              </thead>  
              <tbody>
                <tr v-for="todo in todos" :key="todo.id" v-on:click="editar(todo.id)" >
                  <td>{{todo.id}}</td>
                  <td>{{todo.nombre}}</td>
                  <td>{{todo.ingredientes}}</td>
                  <td>{{todo.calorias}}</td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
    

  </div>      

</template>

<script>

import axios from 'axios';
export default {
  
    data(){
      return{
        todos:null
      }
    },
     methods:{
      editar(id){
        this.$router.push('/editar/'+ id);
      },
      nuevo(){
        this.$router.push('/Nueva');
      }
    },
    mounted:function(){
      axios.get('https://prueba-hamburguesas.herokuapp.com/burger/')
      .then ( response => {
              console.log(response)
              this.todos = response.data
            })
            .catch(e=> console.log(e))
        }
}

</script>

<style>
button{
  margin: 2rem;
  text-align: center;
  align-items: center;
  
}
p{
  text-align: center;
}
</style>
