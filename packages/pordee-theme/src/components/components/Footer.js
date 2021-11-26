import { DesktopFooter } from ".";
import { MobileFooter } from "./MobileFooter";
import { IsMobile, IsTabletOrDesktop } from "./Responsive";

export const Footer = () => {
    return (
        <>
            <IsMobile><MobileFooter /></IsMobile>
            <IsTabletOrDesktop><DesktopFooter /></IsTabletOrDesktop>
        </>
    )
}