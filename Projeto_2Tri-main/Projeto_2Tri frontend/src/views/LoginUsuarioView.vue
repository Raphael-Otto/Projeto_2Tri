<template>
    <main>
      <div class="prin-login">
        <div>
          <h1 class="tit-login"> Login </h1>
          <input placeholder="Nome de Usuário"/>
          <input type="password" placeholder="Senha"/>
        </div>
        <div>
          <button class="logar">Entrar</button>
          <button class="esqueci-senha">Esqueceu sua senha?</button>
          <p class="sem-conta">Não tem conta? <span class="cadastrar-conta"> <RouterLink to="/cadastro_usuario"> Inscreva-se </RouterLink> </span></p>
        </div>
      </div>       
    </main>
</template>

<style>
.prin-login {
    margin: 55px 550px;
    padding: 30px;
    box-shadow: 0 16px 40px 0.1px rgb(149, 149, 149);
    background-image: linear-gradient(to bottom right, rgb(240, 240, 240), rgb(255, 255, 255));
    border-radius: 5px;
}

.tit-login {
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

.logar {
    left: 10%;
    margin-top: 30px;
    border-color: #616fee;
    background-color: #616fee;
    border-radius: 30px;
    border-width: 3px;
    border-style: solid;
    color: #fafafa;
    font-weight: 700;
    font-size: medium;
    padding: 10px 150px 10px;
}

.logar:active {
    background-color: #505bb9;
    color: #fafafa;
    border-color: #505bb9;
}

.logar:hover {
    cursor: pointer;
}

.esqueci-senha {
    left: 10%;
    margin-top: 30px;
    border-color: #cccccc;
    background-color: #ffffff;
    border-radius: 30px;
    border-width: 1px;
    border-style: solid;
    color: #000000;
    font-weight: 600;
    font-size: medium;
    padding: 10px 90px 10px;
}

.sem-conta {
    padding-top: 30px;
    padding-left: 125px;
}

.cadastrar-conta {
    color: #0026ff;
}

.cadastrar-conta:hover {
    cursor: pointer;
}

</style>