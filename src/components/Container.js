import { useEffect, useState } from "react"
import Presentacional from "./Presentacional"
import { useParams } from "react-router-dom"
import { getProducts, getProductsByCategory} from "../asynkMock"

function Container() {

    const [data, setData] = useState([])

    const {categoryId} = useParams()

    useEffect(()=>{
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