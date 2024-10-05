import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const path = ["/approuter/about", "/approuter/profile"]

export default function Navbar(){
    const pathname = usePathname();
    const router = useRouter();

    return <nav className="flex w-screen py-3 px-20 justify-between items-center bg-blue-500">
        <Link href="/">
            <p>Cheetsheet</p>
        </Link>
        <ul className="flex gap-3 text-white">
            <Link href="/linknav" >
                <li className={` ${ pathname === "/linknav" ? "text-blue-300":"text-white" }`}>linknav</li>
            </Link>
            <Link href="/linknav/about">
                <li className={` ${ pathname === "/linknav/about" ? "text-blue-300":"text-white" }`}>About</li>
            </Link>
            <Link href="/linknav/profile">
                <li className={` ${ pathname === "/linknav/profile" ? "text-blue-300":"text-white" }`}>Profile</li>
            </Link>
            <button onClick={() => router.push("/login")}>login</button>
        </ul>
    </nav>
}