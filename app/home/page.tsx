import { DragSection, NavbarDashboard } from "@/components/organism"

const HomePage = () => { 
    return (
        <>
            <NavbarDashboard/>
            <main className="pt-20 w-11/12 mx-auto"> 
                <DragSection/>
            </main>
        </>
    )
 }

export default HomePage