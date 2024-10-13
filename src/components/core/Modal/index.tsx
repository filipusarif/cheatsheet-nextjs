'use client'
import { useRouter } from "next/navigation"
import { useRef, MouseEventHandler, ReactNode } from "react"


export default function Modal({children}: {children : ReactNode}){
    const overlay =useRef(null);
    const router = useRouter();

    const close: MouseEventHandler = (e) => {
        if(e.target === overlay.current){
            router.back();
        }
    }
    
    return (
        <div 
        ref={overlay} 
        className="fixed z-10 left-0 right-0 top-0 bottom-0 bg-black/60 mx-auto"
        onClick={close}
        >
            <div className="absolute bg-white p-5">
                {children}
            </div>
        </div>
    )
}