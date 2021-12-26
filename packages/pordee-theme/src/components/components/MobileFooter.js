import styled from "@emotion/styled"
import connect from "@frontity/connect";
import { Color } from "../constants/Color";
import { Font } from "../constants/Font";
import { Text } from "../constants/Text";
import { Parameter, SocialContacts } from '../constants/Parameter';
import { Link } from '../components'
import LogoCenterSrc from '../public/logo-center.svg'

const MobileFooterComponent = ({ state }) => {
    return (
        <FooterContainer>
            <ContentContainer>
                <Logo src={LogoCenterSrc} />
                <LinkList>
                    {state.theme.menu.slice(1, Parameter.MainCategoryCount).map(([name, link], index) => (
                        <Link link={link} key={`footer-category-link-${index}`}>
                            <LinkLabel>{name}</LinkLabel>
                        </Link>
                    ))}
                    <Link link={state.theme.menu[Parameter.MainCategoryCount][1]} key={`footer-category-etc`}>
                        <LinkLabel>{Text.CategoryEtc}</LinkLabel>
                    </Link>
                </LinkList>
                <ContactContainer>
                    {SocialContacts.map(({label, icon, link}, index) => (
                        <div key={`footer-contact-link-${index}`} style={{height: '24px'}} onClick={()=> window.open(link, '_blank')}>
                            <SocialLabel ><img src={icon} style={{marginRight: '8px', width: '20px', height: '20px'}}/></SocialLabel>
                        </div>
                    ))}
                </ContactContainer>
            </ContentContainer>
        </FooterContainer>
    )
}

export const MobileFooter = connect(MobileFooterComponent)

const FooterContainer = styled.div`
    width: 100%;
    background: ${Color.PinkLight};
    font-family: ${Font.IBMPlexSans};
    display: flex;
`;

const ContentContainer = styled.div`
    width: 100%;
    margin: 24px auto 40px;
    text-align: center;
`;


const Logo = styled.img`
    height: 60px;
`;

const LinkList = styled.div`
    display: grid;
    gap: 8px;
    margin: 16px 0 24px;
`

const LinkLabel = styled.div`
    font-size: 14px;
    line-height: 23px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const ContactContainer = styled.div`
    display: grid;
    gap: 12px;
    grid-auto-flow: column;
    width: fit-content;
    margin: auto;
`;

const SocialLabel = styled.div`
    display: inline-flex;
    height: 24px;
    font-size: 14px;
    line-height: 24px;

    &:hover {
        text-decoration: underline;
    }
`;