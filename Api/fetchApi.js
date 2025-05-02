import { useEffect, useState } from "react"



export function fetchApi(url){

    const [data,setData] = useState([])
    const [err,setErr] = useState(false)
    const [loading,setLoading] = useState(true)


    const fetchData =async ()=>{

        try {
            let res = await fetch(url)
            let resp = await res.json()
            setData(resp.users)
        } catch (error) {
            setErr(true)
            console.log(error)
        }

        finally{
            setLoading(false)
            console.log("loading")
        }
    }


    useEffect(()=>{
            fetchData()
    },[])
// console.log(data)
    return{loading,err,data}

}