<template>
  <div class="container">
      
        <form action="" class="form-horizontal">
            <div class="form-group">
                <label for="" class="control-label col-sm-2">Id:</label>
                <div>
                    <input type="text" class="form-control" name="id" id="id" v-model="form.id">
                </div>     
            </div> 
            <div class="form-group">
                <label for="" class="control-label col-sm-2">Nombre:</label>
                <div>
                    <input type="text" class="form-control" name="nombre" id="nombre" v-model="form.nombre">
                </div>     
            </div> 
            <div class="form-group">
                <label for="" class="control-label col-sm-2">Ingredientes:</label>
                <div>
                    <input type="text" class="form-control" name="ingredientes" id="ingredientes" v-model="form.ingredientes">
                </div>     
            </div>
            <div class="form-group">
                <label for="" class="control-label col-sm-2">Calorias:</label>
                <div>
                    <input type="text" class="form-control" name="calorias" id="calorias" v-model="form.calorias">
                </div>     
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-primary" v-on:click="guardar()"> Guardar</button>
                <button type="button" class="btn btn-dark margen" v-on:click="salir()"> Salir</button>
            </div> 
        </form>   
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name:"Nueva",
    data: () => ({
      todoId: null,
      form: {
        "id": "",
        "nombre": "",
        "ingredientes": [""],
        "calorias": "",
      }
    }),
    methods:{
      guardar(){
        axios.get('https://prueba-hamburguesas.herokuapp.com/burger/',this.form)
        .then(data=>{
          console.log(data);
        })
      },
      salir(){
        this.$router.push("/Burgers");
      }
    },
};


</script>

<style>

</style>