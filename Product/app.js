import { db } from "../config.js";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  onSnapshot,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";





const additem = document.querySelector("#additem")
const itemname = document.querySelector("#itemname")
const itemdiscribtion = document.querySelector("#itemDiscribtion")
const itemprize = document.querySelector("#itemprize")
const itemcatagory = document.querySelector("#itemcatagory")
const itemimage = document.querySelector('#itemimage')


const adminuserid = localStorage.getItem('adminuserid')
const usserid = localStorage.getItem('userid')
console.log(adminuserid)
additem.addEventListener('click',async ()=>{
    try {
      const docRef = await addDoc(collection(db,adminuserid), {
        itemname:itemname.value,
        itemdiscribtion:itemdiscribtion.value,
        itemprize:itemprize.value,
        itemcatagory:itemcatagory.value,
    
        });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  
  
    
  })
  

const getitemss = document.querySelector("#food-menu")


  const getitems = () => {

    onSnapshot(collection(db, adminuserid), (data) => {
      data.docChanges().forEach((change) => {
        // console.log(change.type);
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
                    <p class="food-price">Catagory: <span class="food-price"${change.doc.data().itemcatagory}</span></p>
                    <p class="food-price">Price: &#8377;<span>${change.doc.data().itemprize}</span></p>
                
                    <a href="" class="btn btn-primary" id="">Edit menu</a>
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
  
  



