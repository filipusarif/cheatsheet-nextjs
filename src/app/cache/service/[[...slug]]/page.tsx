import { error } from "console";
import Link from "next/link"
type BlogPageProps = {params : { slug : string[] }};

async function getData(){
    const res = await fetch('http://localhost:3000/api/product',{
        cache: "force-cache",
        next: {
            // revalidate: 3600,
            tags:['products']
        }
    });
    // const res = await fetch('https://fakestoreapi.com/products');
    if(!res.ok){
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function BlogPage(props : BlogPageProps){
    const { params } = props
    const datas = await getData();
    console.log(datas.data)
    return <main className="w-screen min-h-screen grid place-items-center">
        {/* <Link href="/">
            <h1>{params.slug ? "Content Product Page, back to home?":"Product Page, back to home?"}</h1>
        </Link> */}
        <div className="grid grid-cols-3 w-full gap-3 h-full p-10">
        {datas.data.length > 0 && datas.data.map((data:any) => (
            <div className=" max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={data.id}>
                <a href="#">
                    <img className="p-8 rounded-t-lg object-cover h-[400px] w-[400px]" src={data.image} alt="product image" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$ {data.price}</span>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                    </div>
                </div>
            </div>
        ))}
        </div>

        {params.slug && <>
            <p>Category : {params.slug[0]}</p>
            <p>Size : {params.slug[1]}</p>
            <p>Gender : {params.slug[2]}</p>
        </>}
        
    </main>
}