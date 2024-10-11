import { error } from "console";
import Link from "next/link"
type BlogPageProps = {params : { slug : string[] }};

async function getData(){
    const res = await fetch('https://fakestoreapi.com/products');
    if(!res.ok){
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function BlogPage(props : BlogPageProps){
    const { params } = props
    const datas = await getData();
    console.log(datas)
    return <main className="w-screen h-screen grid place-items-center">
        {/* <Link href="/">
            <h1>{params.slug ? "Content Product Page, back to home?":"Product Page, back to home?"}</h1>
        </Link> */}
        {datas.length > 0 && datas.map((data:any) => (
            <div key={data.id}>
                <h4>{data.title}</h4>
            </div>
        ))}
        {params.slug && <>
            <p>Category : {params.slug[0]}</p>
            <p>Size : {params.slug[1]}</p>
            <p>Gender : {params.slug[2]}</p>
        </>}
        
    </main>
}