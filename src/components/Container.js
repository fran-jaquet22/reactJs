import { useEffect, useState } from "react"
import Presentacional from "./Presentacional"
import { useParams } from "react-router-dom"
import { getProducts, getProductsByCategory} from "../asynkMock"
import { db } from "./firebase"
import { getDocs, collection } from "firebase/firestore"


function Container() {

    const [data, setData] = useState([])

    const {categoryId} = useParams()

    useEffect(()=>{

        const productosCollection = collection(db, "productos")
        const laConsulta = getDocs(productosCollection)
        /* laConsulta
            .then(
                (resultado)=>{
                    console.log(resultado.docs[0].id)
                    console.log(resultado.docs[0].data())
                })
                .catch((error)=>{
                    console.log("dio mla")
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