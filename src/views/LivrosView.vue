<template>
  <main>
      <div class="prin-cadastro">
        <div>
          <h1 class="tit-cadastro"> Cadastro de Livros </h1>
          <input/>
          <input/>
          <input/>
          <input/>
          <input/>
        </div>
        <div>
          <button class="cadastrar">Cadastrar</button>
        </div>
      </div>       
  </main>
</template>

<style>
.prin-cadastro {
    margin: 55px 250px;
    padding: 30px;
    background-color: #fafafa;
    box-shadow: 0 2px 6px 0.1px grey;
    border-radius: 5px;
}

.tit-cadastro {
    font-family: 'Poppins';
    font-size: 50px;
    font-weight: 400;
    text-align: center;
    color: #616fee;
}

input {
    left: 9%;
    margin: 15px 0px;
    padding: 10px;  
    width: 81.5%;
    border-radius: 10px;
    border-color: #fafafa;
    border-style: solid;
    box-shadow: 0 1.5px 4px 0.1px grey
}

.cadastrar {
    left: 45%;
    margin-top: 30px;
    border-color: #616fee;
    background-color: #ffffff;
    border-radius: 30px;
    border-width: 3px;
    border-style: solid;
    color: #616fee;
    font-weight: 700;
    font-size: medium;
    padding: 10px 25px 10px;
}

.cadastrar:active {
    background-color: #616fee;
    color: #fafafa;
}

.cadastrar:hover {
    cursor: pointer;
}

</style>