import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import data from "./seedData.json"


const productosCollection = collection(db, "productos")

data.forEach((producto)=>{
    addDoc(productosCollection, producto)
    .then((resultado)=>{
        console.log("ok", resultado)
    })
    .catch((error)=>{
        console.log("error", error)
    })
})