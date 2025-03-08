import { NavbarMobile } from "@/components/organism";

const NavLayout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => { 
    return(
        <>
            {children}
            <NavbarMobile/>
        </>
    )
 }

 export default NavLayout