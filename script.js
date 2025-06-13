// Mantém apenas o essencial no front-end:
const firebaseConfig = {
  apiKey: "AIzaSyDIfTE3Nkwb_yiDKJhmwj_o3I8guislO8g",
  
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, senha)
    .then(() => {
      window.location.href = "home.html"; // ✅ Redireciona para tela de opções
    })
    .catch(e => {
      document.getElementById("msg").innerText = "Erro: " + e.message;
    });
}

function register() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, senha)
    .then(() => {
      document.getElementById("msg").innerText = "✅ Cadastrado! Agora faça login.";
    })
    .catch(e => {
      document.getElementById("msg").innerText = "Erro: " + e.message;
    });
}
