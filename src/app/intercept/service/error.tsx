"use client"

import { useEffect } from "react"

export default function Error({error, reset} : {error : Error, reset: ()=>void}){
    useEffect(()=>{
        console.log(error)
    },[error])
    return (
        <>
            <h1>Oops Somthing went wrong!</h1>
            <button onClick={()=> reset()}>try again</button>
        </>
    )
}