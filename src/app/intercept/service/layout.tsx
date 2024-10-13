import React from "react";

export default function serviceLayout({children, modal}: {children : React.ReactNode, modal : React.ReactNode}){
    return(
        <>
        {children}
        {modal}
        </>
    )
}