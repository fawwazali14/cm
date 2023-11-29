import { useEffect,useState } from "react"
import { fetchData } from "../functions/getapi"


export default function AllUsers()  {
    const [data,setData]= useState([])
    useEffect(()=>{
        const x = {
            table : "all"
        }
        fetchData(x)
        .then((z)=>{
            console.log(z.data)
            setData(z.data)

        })

    },[])



    return(
        <div >
            hello
        </div>
   
    )
  };
  