import { connect, styled } from "frontity";
import { DesktopNav, Link } from ".";
import { useResponsive } from "../hooks/useResponsive";
import Logo from '../public/logo.svg'
import { MobileNav } from "./MobileNav";

const HeaderComponent = ({ state, actions, handleHome }) => {
    const { isMobileOrTablet, isDesktop } = useResponsive();
    const desktopHeader = (
        <>
            <LogoContainer onClick={handleHome}>
                <LogoImage src={Logo} />
            </LogoContainer>
            <DesktopNavContainer>
                <DesktopNav handleHome={handleHome} />
            </DesktopNavContainer>
        </>
    )
    return (
        <>
            <Container>
                { isMobileOrTablet && <MobileNav handleHome={handleHome} /> }
                { isDesktop && desktopHeader }
            </Container>
        </>
    );
};

export const Header = connect(HeaderComponent);

const Container = styled.div`
    width: 100%;
    text-align: center;
    background: #FFFFFF;
`;

const LogoContainer = styled.div`
    margin-top: 46px;
`;

const LogoImage = styled.img`
    height: 48px;
`;

const DesktopNavContainer = styled.div`
    margin-top: 32px;
`;
