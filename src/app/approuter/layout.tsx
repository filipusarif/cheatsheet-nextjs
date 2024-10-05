"use client"

import Navbar from "@/app/approuter/navbar"
import { useState } from "react";

export default function AppRouterLayout({
    children,
  }: {
    children: React.ReactNode;
  }){
    const [state, setState] = useState(0);
    return (<>
        <Navbar />
        <p>Layout {state}</p>
        <button onClick={()=>{setState(state+1)}}>Plus</button>
        {children}
    </>)
}