import { DesktopFooter } from ".";
import { useResponsive } from "../hooks/useResponsive"
import { MobileFooter } from "./MobileFooter";
import { IsMobile, IsTabletOrDesktop } from "./Responsive";

export const Footer = () => {
    const { isMobile, isTabletOrDesktop } = useResponsive();

    return (
        <>
            <IsMobile><MobileFooter /></IsMobile>
            <IsTabletOrDesktop><MobileFooter /></IsTabletOrDesktop>
        </>
    )
}