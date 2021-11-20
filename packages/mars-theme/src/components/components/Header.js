import { connect, styled } from "frontity";
import { DesktopNav, Link } from ".";
import Logo from '../public/logo.svg'
// import Nav from "./nav";
// import MobileMenu from "./menu";

const HeaderComponent = ({ state }) => {
    return (
        <>
            <Container>
                <Link link="/">
                    <LogoContainer>
                        <LogoImage src={Logo} />
                    </LogoContainer>
                </Link>
                {/* <StyledLink link="/">
                    <Title>{state.frontity.title}</Title>
                </StyledLink> */}
                <Description>{state.frontity.description}</Description>
                {/* <MobileMenu /> */}
                {/* <Nav /> */}
                <DesktopNavContainer>
                    <DesktopNav />
                </DesktopNavContainer>
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
    margin-top: 40px;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
