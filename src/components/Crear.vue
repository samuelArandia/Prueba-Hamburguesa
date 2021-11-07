<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
               Agregar nueva hamburguesas
            </div>
            <div class="card-body">
                <form action="">
                    <div class="form-group">
                      <label for="nombre">Nombre de la hamburguesa:</label>
                      <input type="text"
                        class="form-control" name="nombre" id="nombre" aria-describedby="helpId" placeholder="Nombre">
                      <small id="helpId" class="form-text text-muted">Escribe el nombre de la hamburguesa</small>
                    </div>
                    <div class="form-group">
                      <label for="ingredientes">Ingredientes</label>
                      <input type="text"
                        class="form-control" name="ingredientes" id="ingredientes" aria-describedby="helpId" placeholder="Ingredientes">
                      <small id="helpId" class="form-text text-muted">Escribir ingredientes</small>
                    </div>
                    <div class="btn-group" role="group" aria-label="">
                        <button type="button" class="btn btn-success">Agregar</button>
                        <button type="button" class="btn btn-warning">Cancelar</button>
                        
                    </div>
                </form>
            </div>
            
        </div>

    </div>     
</template>


<script>
export default {
    
}
</script>

<style >

</style>