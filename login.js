import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBvXAKowg0a9Y...",
  authDomain: "hizliyim-3f99c.firebaseapp.com",
  projectId: "hizliyim-3f99c",
  storageBucket: "hizliyim-3f99c.appspot.com",
  messagingSenderId: "8911207...",
  appId: "1:8911207...:web:..."
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Giriş başarılı! Anasayfaya yönlendiriliyorsun.");
    window.location.href = "/"; // Anasayfa
  } catch (error) {
    alert("Hatalı e-posta veya şifre!");
  }
});
