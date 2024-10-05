"use client"
import Navbar from "@/app/linknav/navbar"
import { usePathname } from "next/navigation";
import { useState } from "react";

const disablePage = ['/linknav/profile'];

export default function AppRouterLayout({
    children,
  }: {
    children: React.ReactNode;
  }){
    const [state, setState] = useState(0);
    const pathname = usePathname();
    return (<>
        {!disablePage.includes(pathname) && <Navbar/>}
        <p>Layout {state}</p>
        <button onClick={()=>{setState(state+1)}}>Plus</button>
        {children}
    </>)
}