import { useEffect, useState } from "react"
import Presentacional from "./Presentacional"
import { useParams } from "react-router-dom"
import { getProducts, getProductsByCategory} from "../asynkMock"
import { db } from "./db/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"


function Container() {

    const [data, setData] = useState([])

    const {categoryId} = useParams()

    useEffect(()=>{

        /* const productosCollection = collection(db, "productos")
        const filtroPorCategory = query(
            productosCollection,
            where("category","==","Merienda")
        )



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
                }) */

            
 
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        
        asyncFunc(categoryId)
        .then(res => {
            setData(res)
        }) 
        .catch(error=>{
            console.error(error)
        })   
    }, [categoryId])

    return (
        <Presentacional data={data}/>
    )

}
export default Container