import { useEffect, useState } from "react"
import Presentacional from "./Presentacional"
import { useParams } from "react-router-dom"
import { db } from "../db/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"


function Container() {

    const [data, setData] = useState([])

    const {categoryId} = useParams()

    useEffect(()=>{

        const productosCollection = collection(db, "productos")

        let filtroPorCategory;

        if(categoryId){ 
            filtroPorCategory = query(productosCollection,where("category","==", `${categoryId}`)
        )}else{
            filtroPorCategory = productosCollection
        }

        const laConsulta = getDocs(filtroPorCategory)
        laConsulta
            .then(
                (resultado)=>{
                   const aux = resultado.docs.map((doc)=>{
                    const producto = doc.data()
                    producto.id = doc.id
                    return producto
                   })
                   setData(aux)
                })
                .catch((error)=>{
                    console.log("dio mal", error)
                })
        
    }, [categoryId])

    return (
        <Presentacional data={data}/>
    )

}
export default Container