import Link from 'next/link'

export default function DynamicRouter(){
    return <main className="w-screen h-screen flex items-center justify-center flex-col gap-3">
        <Link href="/">
            <h1>hello Dynamic Router, Back to Home?</h1>
        </Link>
        <ul className='flex gap-4'>
            <Link href="/dynamicrouter/blog">
                <li>Blog</li>
            </Link>
            <Link href="/dynamicrouter/product">
                <li>Product</li>
            </Link>
            <Link href="/dynamicrouter/service">
                <li>Service</li>
            </Link>
        </ul>
    </main>
}