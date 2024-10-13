
export const getData = async (url: string) => {
    const res = await fetch(url,{
        cache: "no-store",
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