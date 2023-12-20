
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./config.js";
import { db } from "./config.js";
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





const getitemss = document.querySelector("#food-menu")

const adminuserid = localStorage.getItem('adminuserid')
const usserid = localStorage.getItem('userid')
  const getitems = () => {

    onSnapshot(collection(db,'items'), (data) => {
      data.docChanges().forEach((change) => {
        console.log(change.type);
        // console.log((usserid));
        // ids.push(change.doc.id)
        // console.log(ids)
  
        if (change.type === "added") {
  
          console.log(change.doc.data())
          
          getitemss.innerHTML +=
            `
            <div class="food-menu-container container">
            <div class="food-menu-item">
                <div class="food-img">
                    <img src="https://i.postimg.cc/wTLMsvSQ/food-menu1.jpg" alt="" />
                </div>
                <div class="food-description">
                    <h2 class="food-titile">${change.doc.data().itemname}</h2>
                    <p>
                       ${change.doc.data().itemdiscribtion}
                    </p>
                    <p class="food-price">Catagory: <span class="food-price">${change.doc.data().itemcatagory}</span></p>
                    <p class="food-price">Price: &#8377;<span>${change.doc.data().itemprize}</span></p>
                
                    <a href="" class="btn btn-primary" id="">ADD TO CART</a>
                </div>
            </div>
        </div>
        
           `
  
        }
        else if (change.type === "removed") {
          let addd = document.getElementById(change.doc.id)
          if (addd) {
  
            addd.remove()
          }
        }
        else{
  
  
  
  
  
  
        }
      })
  
    });
  
  }
  
  getitems()
  
  

