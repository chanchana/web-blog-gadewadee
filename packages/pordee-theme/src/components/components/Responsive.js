import { styled } from 'frontity';
import { desktopMediaQuery, mobileMediaQuery, tabletMediaQuery } from '../utils/MediaQuery';

export const IsDesktop = ({ children }) => <DesktopContainer>{children}</DesktopContainer>
export const IsTablet = ({ children }) => <TabletContainer>{children}</TabletContainer>
export const IsMobile = ({ children }) => <MobileContainer>{children}</MobileContainer>
export const IsMobileOrTablet = ({ children }) => <MobileTabletContainer>{children}</MobileTabletContainer>
export const IsTabletOrDesktop = ({ children }) => <TabletOrDesktopContainer>{children}</TabletOrDesktopContainer>

const DesktopContainer = styled.div`
    ${mobileMediaQuery} {
        display: none;
    }
    ${tabletMediaQuery} {
        display: none;
    }
`

const TabletContainer = styled.div`
    ${mobileMediaQuery} {
        display: none;
    }
    ${desktopMediaQuery} {
        display: none;
    }
`

const MobileContainer = styled.div`
    ${tabletMediaQuery} {
        display: none;
    }
    ${desktopMediaQuery} {
        display: none;
    }
`

const MobileTabletContainer = styled.div`
    ${desktopMediaQuery} {
        display: none;
    }
`

const TabletOrDesktopContainer = styled.div`
    ${desktopMediaQuery} {
        display: none;
    }
`