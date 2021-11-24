import { connect, styled } from "frontity";
import { DesktopNav, Link } from ".";
import { useResponsive } from "../hooks/useResponsive";
import Logo from '../public/logo.svg'
import { MobileNav } from "./MobileNav";
// import Nav from "./nav";
// import MobileMenu from "./menu";

const HeaderComponent = ({ state }) => {
    const { isMobileOrTablet, isDesktop } = useResponsive();

    const desktopHeader = (
        <>
            <Link link="/">
                <LogoContainer>
                    <LogoImage src={Logo} />
                </LogoContainer>
            </Link>
            <DesktopNavContainer>
                <DesktopNav />
            </DesktopNavContainer>
        </>
    )
    return (
        <>
            <Container>
                { isMobileOrTablet && <MobileNav /> }
                { isDesktop && desktopHeader }
            </Container>
        </>
    );
};

// Connect the Header component to get access to the `state` in it's `props`
export const Header = connect(HeaderComponent);

const Container = styled.div`
    /* height: 224px; */
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
