import { DesktopFooter } from ".";
import { useResponsive } from "../hooks/useResponsive"

export const Footer = () => {
    const { isMobile, isTabletOrDesktop } = useResponsive();

    return (
        <>
            {isMobile && null}
            {isTabletOrDesktop && <DesktopFooter />}
        </>
    )
}