import Link from 'next/link'

export default function BlogPage(){
    return <main className='w-screen h-screen flex gap-4 justify-center items-center flex-col'>
        <Link href="/">
            <h1>Welcome blog page, back to home?</h1>
        </Link>
        <Link href="/dynamicrouter/blog/myblog">
            <p>MyBlog</p>
        </Link>
    </main>
}