import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"


export default function Navbar(){
    const {status} : { status:string} = useSession();
    return (
        <header className="fixed w-full   bg-blue-700">
            <div className="container mx-auto h-20 flex justify-between items-center">
                <Link href={'/'}>Home</Link>
                <nav>
                    {status === 'authenticated'? (
                        <button onClick={() => signOut()}>Logout</button>
                    ) : (
                        <button onClick={() => signIn()}>Login</button>
                    )}
                </nav>
            </div>
        </header>
    )
}