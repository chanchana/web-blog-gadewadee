import styled from "@emotion/styled"
import connect from "@frontity/connect";
import { Color } from "../constants/Color";
import { Font } from "../constants/Font";
import { Text } from "../constants/Text";
import { Parameter, SocialContacts } from '../constants/Parameter';
import { Link } from '../components'

const DesktopFooterComponent = ({ state }) => {
    return (
        <FooterContainer>
            <ContentContainer>
                <LargeItem>
                    <Heading>{Text.FooterAbout}</Heading>
                    <Body>{Text.FooterAboutBody}</Body>
                </LargeItem>
                <Item>
                    <Heading>{Text.FooterCategory}</Heading>
                    {state.theme.menu.slice(1, Parameter.MainCategoryCount).map(([name, link], index) => (
                        <Link link={link} key={`footer-category-link-${index}`}>
                            <LinkLabel>{name}</LinkLabel>
                        </Link>
                    ))}
                    <Link link={state.theme.menu[Parameter.MainCategoryCount][1]} key={`footer-category-etc`}>
                        <LinkLabel>{Text.CategoryEtc}</LinkLabel>
                    </Link>
                </Item>
                <Item>
                    <Heading>{Text.FooterContact}</Heading>
                    <ContactContainer>
                        {SocialContacts.map(({label, icon, link}, index) => (
                            <Link link={link} style={{height: '24px'}}>
                                <SocialLabel key={`footer-contact-link-${index}`}><img src={icon} style={{marginRight: '8px', width: '20px', height: '20px'}}/>{label}</SocialLabel>
                            </Link>
                        ))}
                    </ContactContainer>
                </Item>
            </ContentContainer>
        </FooterContainer>
    )
}

export const DesktopFooter = connect(DesktopFooterComponent)

const FooterContainer = styled.div`
    height: 305px;
    width: 100%;
    background: ${Color.PinkLight};
    display: flex;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    font-family: ${Font.IBMPlexSans};
`;

const ContentContainer = styled.div`
    width: 100%;
    max-width: 1136px;
    padding: 24px;
    margin: auto;
    margin-top: 56px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 16px;
`;

const LargeItem = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
`;

const Item = styled.div`
    
`;

const Heading = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 12px;
`;

const Body = styled.div`
    font-size: 14px;
    line-height: 23px;
    max-width: 352px;
`;

const LinkLabel = styled.div`
    font-size: 14px;
    line-height: 24px;
    max-width: 352px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const ContactContainer = styled.div`
    display: grid;
    gap: 12px;
`;

const SocialLabel = styled.div`
    display: inline-flex;
    height: 24px;
    font-size: 14px;
    line-height: 24px;
    height: 24px;

    &:hover {
        text-decoration: underline;
    }
`;