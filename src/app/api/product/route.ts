import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextResponse,NextRequest } from "next/server";

// const data = [
//     {
//         id: 1,
//         title: "sepatu",
//         price: 100000,
//         image: "data:image/jpeg;base64,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"
//     },
//     {
//         id: 2,
//         title: "baju",
//         price: 200000,
//         image: "data:image/jpeg;base64,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"
//     },
//     {
//         id: 3,
//         title: "celana",
//         price: 300000,
//         image: "data:image/jpeg;base64,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"
//     }
// ]

export async function GET(request : NextRequest) {
    const {searchParams} = new URL(request.url);
    const id = searchParams.get("id");
    if(id){
        // const detailProduct = data.find((item) => item.id === Number(id));
        const detailProduct = await retrieveDataById("product", id)
        if(detailProduct){
            return NextResponse.json({status:200, message : "success", data: detailProduct})
        }
        return NextResponse.json({status:404, message : "Not Found", data: {}})
    }

    const products = await retrieveData("product");
    // return NextResponse.json({status:200, message : "success", data})
    return NextResponse.json({status:200, message : "success", products})

}