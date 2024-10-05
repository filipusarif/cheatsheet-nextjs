import Link from 'next/link'

export default function Navbar(){
    return <nav className="flex w-screen py-3 px-20 justify-between items-center bg-blue-500">
        <a href="/">Cheetsheet</a>
        <ul className="flex gap-3 ">
            <Link href="/approuter">
                <li>AppRouter</li>
            </Link>
            <Link href="/approuter/about">
                <li>About</li>
            </Link>
            <Link href="/approuter/profile">
                <li>Profile</li>
            </Link>
        </ul>
    </nav>
}