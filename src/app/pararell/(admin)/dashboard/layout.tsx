export default function DashboardLayout({children, products,payments}: {children : React.ReactNode, products: React.ReactNode, payments: React.ReactNode}){
    return (
        <div>
            <div>{children}</div>
            <div>{products}</div>
            <div>{payments}</div>
        </div>
    )
}