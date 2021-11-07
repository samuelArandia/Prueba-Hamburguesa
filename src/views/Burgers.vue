<template>
  
  <div>
    <div class="card">
      <h1 class="card-header">
        Hamburguesas
      </h1>
      <p> hola samuel, vas muy bien</p>
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nombres</th>
                  <th>Ingredientes</th>
                  <th>Calorias</th>
                  <th>Acciones</th>
                </tr> 
              </thead>  
              <tbody>
                <tr v-for="todo in todos" :key="todo.id">
                  <td>{{todo.id}}</td>
                  <td>{{todo.nombre}}</td>
                  <td>{{todo.ingredientes}}</td>
                  <td>{{todo.calorias}}</td>
                  <td>
            <a name="" id="" class="btn btn-primary" href="#" role="button">Editar</a>
            <a name="" id="" class="btn btn-primary" href="#" role="button">Borrar</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
  </div>      

</template>

<script>
import axios from 'axios'
export default {
    data(){
      return{
        todos:null
      }
    },
    mounted(){
      
      this.getTodos();
    },
    methods:{
        getTodos(){
            axios 
            .get('https://prueba-hamburguesas.herokuapp.com/burger/')
            .then ( response => {
              console.log(response)
              this.todos = response.data
            })
            .catch(e=> console.log(e))
        }
    }
}
</script>

<style>

</style>
