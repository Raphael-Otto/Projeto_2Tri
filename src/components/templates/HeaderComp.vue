<template>
  <header>
    <div class="logo-web">
      <img src="@/assets/imgs/logo-removebg-preview.png" />
    </div>
    <div class="menu-central">
      <span> <RouterLink to="/livros">Livros</RouterLink> </span>
      <span> <RouterLink to="/editoras">Editoras</RouterLink> </span>
      <span> <RouterLink to="/autores">Autores</RouterLink> </span>
      <span> <RouterLink to="/produtos">Produtos</RouterLink> </span>
    </div>
    <div class="menu-direito">
      <button @click="sair">SAIR</button>
    </div>
    <img class="img-usuario" src="@/assets/imgs/usuario.png" />
  </header>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

header a {
  padding: 0px 20px;
  font-size: larger;
}

header {
  margin: 0;
  background-color: #616fee;
  height: 15%;
  font-size: 1rem;
  padding-left: 2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/*---------------------------------*/

.menu-central {
  padding-left: 75px;
  padding-right: 70px;
}

.menu-central span {
  text-decoration: none;
  font-family: 'Poppins' ;
}
  
a {
  color: inherit;
  text-decoration: none;
}

/*---------------------------------*/

.img-usuario {
  margin-right: 10%;
  padding-bottom: 7.5px;
}

.menu-direito button {
  margin-left: 300px;
  margin-right: 20px;
  border-color: inherit;
  background-color: #616fee;
  border-radius: 30px;
  border-width: 2px;
  border-style: solid;
  color: inherit;
  font-weight: bolder;
  font-size: small;
  padding: 10px 25px 10px;
  font-family: 'Poppins' ;
}

.menu-direito button:hover {
  color: #616fee;
  background: #FFFFFF;
}

</style>
