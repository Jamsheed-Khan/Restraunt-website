
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { db } from "./config.js";
import { auth } from "./config.js";
import { collection, addDoc, getDocs,updateDoc, doc, onSnapshot, deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";






$(document).ready(function () {
    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });
});




if (!localStorage.getItem('userid')) {
    window.location = "../login/login.html"
  }
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      localStorage.removeItem('userid')
      window.location = "../login/login.html"
    }
  
  })

  
onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out
      window.location = "../login/login.html"
      // ...
    }
  });
  

  let logoutbtn = document.querySelector("#logoutbtn")
logoutbtn.addEventListener('click', () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('logout successfully');
    window.location = "../login/login.html"
  }).catch((error) => {
    console.log(error);
    // An error happened.
  });

})