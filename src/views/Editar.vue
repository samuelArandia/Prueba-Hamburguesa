<template>
    <div class="container">
        <form action="" class="form-horizontal">
            <div class="form-group">
                <label for="" class="control-label col-sm-2">Id</label>
                <div>
                    <input type="text" class="form-control" name="id" id="id" v-model="form.id">
                </div>     
            </div> 
            <div class="form-group">
                <label for="" class="control-label col-sm-2">Nombre</label>
                <div>
                    <input type="text" class="form-control" name="nombre" id="nombre" v-model="form.nombre">
                </div>     
            </div> 
            <div class="form-group">
                <label for="" class="control-label col-sm-2">Ingredientes</label>
                <div>
                    <input type="text" class="form-control" name="ingredientes" id="ingredientes" v-model="form.ingredientes">
                </div>     
            </div>
            <div class="form-group">
                <label for="" class="control-label col-sm-2">Calorias</label>
                <div>
                    <input type="text" class="form-control" name="calorias" id="calorias" v-model="form.calorias">
                </div>     
            </div>

            <div class="form-group">
                <button type="button" class="btn btn-primary" v-on:click="editar()"> Editar </button>
                <button type="button" class="btn btn-danger margen" v-on:click="eliminar()" > Elimanar</button>
                <button type="button" class="btn btn-dark margen" v-on:click="salir()"> Salir</button>
            </div> 
        </form>   
    </div> 
    
</template>

<script>
import axios from 'axios'
export default {
    name:"Editar",
    data:function(){
        return{
            todoId:null,
            form:{
                "id":"",
                "nombre": "",
                "ingredientes":[""],
                "calorias":""
            }
        }
    },
    methods:{
        editar(){
            this.form.ingredientes=Array.from(this.form);
            axios.post("https://prueba-hamburguesas.herokuapp.com/burger/",this.form)
            .then( data=>{
                console.log(data);
                alert('Se ha reliazado con exito')
            })
        },
        salir(){
            this.$router.push("/Burgers");
        },
        eliminar(){
            var enviar = {
                "todoId" : this.form.todoId
            };
            axios.delete("https://prueba-hamburguesas.herokuapp.com/burger",enviar)
            .then(datos =>{
                console.log(datos);
                this.$router.push("/Burgers");
            });
        }
    },

    mounted:function(){
        this.form.todoId = this.$route.params.id;
        axios.get("https://prueba-hamburguesas.herokuapp.com/burger/"+ this.form.todoId)
        .then( datos =>{
            this.form.id = datos.data.id;
            this.form.nombre = datos.data.nombre;
            this.form.ingredientes = datos.data.ingredientes;
            this.form.calorias = datos.data.calorias;
            console.log(this.form);
        })
    }

}

</script>

<style>

</style>