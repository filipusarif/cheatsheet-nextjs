"use client"

import { useState } from "react"

export default function AdminProductPage(){
    const [status, setStatus] = useState("")

    const revalidate = async () => {
        const res = await fetch("http://localhost:3000/api/revalidate?tags=products&secret=MYENVNEXT", {
            method: "POST"
        })
        if(!res.ok){
            setStatus("revalidate failed")
        }else{
            const request = await res.json();
            if(request.revalidate){
                setStatus("revalidate success")
            }
        }   
    }
    return (
        <div>
            <h1>{status}</h1>
            <button className="bg-blue-500 p-4 m-5 " onClick={() => revalidate()}>revalidate</button>
        </div>
    )
}