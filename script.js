const firebaseConfig = {
  apiKey: "AIzaSyDIfTE3Nkwb_yiDKJhmwj_o3I8guislO8g",
  authDomain: "clinica-3f715.firebaseapp.com",
  databaseURL: "https://clinica-3f715-default-rtdb.firebaseio.com",
  projectId: "clinica-3f715",
  storageBucket: "clinica-3f715.firebasestorage.app",
  messagingSenderId: "456473690332",
  appId: "1:456473690332:web:667b239d83c802ecb83419",
  measurementId: "G-7XHX0XC3BD"
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
