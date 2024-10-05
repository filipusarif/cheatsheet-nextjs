"use client"

import Navbar from "@/app/approuter/navbar"
import { useState } from "react";

export default function AppRouterTemplate({
    children,
  }: {
    children: React.ReactNode;
  }){
    const [state, setState] = useState(0);
    return (<>
        <p> Template : {state}</p>
        <button onClick={()=>{setState(state+1)}}>Plus</button>
        {children}
    </>)
}