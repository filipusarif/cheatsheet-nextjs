'use client'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage(){
    const {data : session , status} : {data: any, status:string} = useSession();
    const router = useRouter();
    useEffect(() => {
        if(status == "unauthenticated" || session?.user.role !== 'admin'){
            router.push("/login")
        }
    }, [status, router, session?.user.role] )
    return (
        <div>
            <h1>hello Dashboard</h1>
        </div>
    )
}