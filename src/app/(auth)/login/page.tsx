import Link from 'next/link'

export default function Login(){
    return <main className='w-screen h-screen grid place-items-center'>
        <Link href="/">
        <h1>Welcome Login, back to Home?</h1>
        </Link>
    </main>
}