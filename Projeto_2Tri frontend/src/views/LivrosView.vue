<script>
import LivrosApi from "../api/livros.js";
const livrosApi = new LivrosApi();
export default {
  data() {
    return {
      livro: {},
      livros: [],
    };
  },
  async created() {
    this.livros = await livrosApi.buscarTodosOsLivros();
  },
  methods: {
    async salvar() {
      if (this.livro.id) {
        await livrosApi.atualizarLivro(this.livro);
      } else {
        await livrosApi.adicionarLivro(this.livro);
      }
      this.livros = await livrosApi.buscarTodosOsLivros();
      this.livro = {};
    },
    async excluir(livro) {
      await livrosApi.excluirLivro(livro.id);
      this.livros = await livrosApi.buscarTodosOsLivros();
    },
    editar(livro) {
      Object.assign(this.livro, livro);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de livros</h2>
    </div>
    <div class="form-input">
      <input type="text" v-model="livro.nome" @keyup.enter="salvar" />
      <button @click="salvar">Adicionar</button>
    </div>
    <div class="list-items">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Editora</th>
            <th>Autor</th>
            <th>ISBN</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.nome }}</td>
            <td>
              <button @click="editar(livro)">Editar</button>
              <button @click="excluir(livro)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
.prin-cadastro {
    margin: 55px 250px;
    padding: 30px;
    box-shadow: 0 16px 40px 0.1px rgb(149, 149, 149);
    background-image: linear-gradient(to bottom right, rgb(240, 240, 240), rgb(255, 255, 255));
    border-radius: 5px;
}

.tit-cadastro {
    font-family: 'Poppins';
    font-size: 50px;
    font-weight: 400;
    text-align: center;
    color: #616fee;
}

::placeholder {
  font-family: 'Poppins';
  color: grey;
}

input {
    left: 9%;
    margin: 15px 0px;
    padding: 10px;  
    width: 81.5%;
    border-radius: 10px;
    border-color: #fafafa;
    border-style: solid;
    box-shadow: 0 4px 8px 0.1px grey
}

select {
    font-family: 'Poppins';
    color: grey;
    background-color: #fafafa;
    left: 9%;
    margin: 15px 0px;
    padding: 10px;
    width: 81.5%;
    border-radius: 10px;
    border-color: #fafafa;
    border-style: solid;
    box-shadow: 0 4px 8px 0.1px grey;
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