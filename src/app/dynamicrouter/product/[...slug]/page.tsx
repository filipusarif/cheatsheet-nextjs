import Link from "next/link"
type ContentBlogPageProps = {params : { slug : string[] }};

export default function ContentBlogPage(props : ContentBlogPageProps){
    const { params } = props
    return <main className="w-screen h-screen grid place-items-center">
        <Link href="/">
            <h1>Content Product Page, back to home?</h1>
        </Link>
        <p>Category : {params.slug[0]}</p>
        <p>Size : {params.slug[1]}</p>
        <p>Gender : {params.slug[2]}</p>
    </main>
}