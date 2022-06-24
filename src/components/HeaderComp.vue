<template>
  <header>
    <div class="logo">
      <img src="@/assets/imgs/logo-removebg-preview.png" />
    </div>
    <div class="menu-central">
      <span> <RouterLink to="/">Livros</RouterLink> </span>
      <span> <RouterLink to="/">Editoras</RouterLink> </span>
      <span> <RouterLink to="/">Autores</RouterLink> </span>
      <span> <RouterLink to="/">Produtos</RouterLink> </span>
    </div>
    <div class="menu-direito">
      <button @click="sair">Sair</button>
      <img src="@/assets/imgs/usuario.png" />
    </div>
  </header>
</template>

<style>
header span {
  padding: 0 20px;
}

header {
  margin: 0;
  background-color: #616fee;
  height: 15%;
  font-size: 1.3rem;
  padding-left: 2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu-central span {
  text-decoration: none;
}
</style>
