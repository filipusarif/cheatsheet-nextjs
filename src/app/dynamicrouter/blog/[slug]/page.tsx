import Link from "next/link"
type ContentBlogPageProps = {params : { slug : string }};

export default function ContentBlogPage(props : ContentBlogPageProps){
    const { params } = props
    return <main className="w-screen h-screen grid place-items-center">
        <Link href="/">
            <h1>Content Blog Page, back to home?</h1>
        </Link>
        <p>{params.slug}</p>
    </main>
}