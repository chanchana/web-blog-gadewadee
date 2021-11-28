import { connect, styled } from "frontity";
import { DesktopNav, Link } from ".";
import { useResponsive } from "../hooks/useResponsive";
import Logo from '../public/logo.svg'
import { MobileNav } from "./MobileNav";

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
