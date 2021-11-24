import { styled, connect } from 'frontity';
import { Link } from '.';
import { Color } from '../constants/Color';
import LogoSrc from '../public/logo.svg';
import MenuIconSrc from '../public/icons/menu.svg';
import SearchIconSrc from '../public/icons/search.svg';
import TimesIconSrc from '../public/icons/times.svg';
import ArrowIconSrc from '../public/icons/arrow.svg';
import { useState, useEffect } from 'react';
import { transition } from '../utils/CssHelper';
import { Font } from '../constants/Font';
import { Parameter } from '../constants/Parameter';
import { Text } from '../constants/Text';

const MobileNavComponent = ({ state }) => {
    const [overlayVisible, setOverlayVisible] = useState(true);
    const [expanded, setExpanded] = useState(false);

    const categories = state.theme.menu.slice(0, Parameter.MainCategoryCount);
    const subCategories = state.theme.menu.slice(Parameter.MainCategoryCount);

    useEffect(() => {
        handleNavClick();
    }, [state.router.link])

    const handleNavClick = () => {
        setOverlayVisible(false);
        setExpanded(false);
    };

    const menuOverlay = (
        <Overlay open={overlayVisible}>
            {overlayVisible && <OuterPanel onClick={() => {if (overlayVisible) setOverlayVisible(false)}} />}
            <Panel open={overlayVisible}>
                <NavList>
                    {categories.map(([name, link], index) => (
                        <NavItem key={`mobile-nav-item-${index}`} onClick={handleNavClick} ><Link link={link} style={{width: '100%'}}>{name}</Link></NavItem>
                    ))}
                    <NavItem onClick={() => setExpanded(!expanded)}>{Text.CategoryEtc}<ExpandableNavItemIcon src={ArrowIconSrc} expanded={expanded} /></NavItem>
                </NavList>
                <ExpandableNavList expanded={expanded}>
                    {subCategories.map(([name, link], index) => (
                        <ExpandableNavItem expanded={expanded} key={`mobile-sub-nav-item-${index}`} onClick={handleNavClick} ><Link link={link} style={{width: '100%'}}>{name}</Link></ExpandableNavItem>
                    ))}
                </ExpandableNavList>
                <CloseIcon src={TimesIconSrc} onClick={() => setOverlayVisible(false)} />
            </Panel>
        </Overlay>
    )

    return (
        <>
            <MobileNavContainer>
                <InnerContainer>
                    <Link link="/">
                        <Icon src={LogoSrc} />
                    </Link>
                    {/* <ColumnSpacer /> */}
                    <Icon src={SearchIconSrc} marginLeft="auto" />
                    <Icon src={MenuIconSrc} marginLeft="12px" onClick={() => setOverlayVisible(true)} />
                </InnerContainer>
            </MobileNavContainer>
            <Spacer />
            {menuOverlay}
        </>
    );
}

export const MobileNav = connect(MobileNavComponent);

const MobileNavContainer = styled.div`
    width: 100%;
    height: 48px;
    position: fixed;
    background: ${Color.White};
`;

const InnerContainer = styled.div`
    margin: 12px 16px;
    width: clac(100% - 24px);
    display: flex;
`;

const Icon = styled.img`
    height: 24px;
    margin-left: ${props => props.marginLeft};
`;

const Spacer = styled.div`
    height: 48px;
`;

const Overlay = styled.div`
    ${transition}
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.open ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)'};
    pointer-events: ${props => props.open ? 'all' : 'none'};
`;

const Panel = styled.div`
    ${transition}
    top: 0;
    right: ${props => props.open ? '0' : '-232px'};
    width: 232px;
    position: absolute;
    background: ${Color.White};
    height: 100%;
    overflow: hidden;
    pointer-events: all;
    font-family: ${Font.IBMPlexSans};
    font-weight: 400;
`;

const OuterPanel = styled.div`
    width: 100%;
    height: 100%;
`

const NavList = styled.div`
    margin: 120px 24px 0;
`

const NavItem = styled.div`
    height: 66px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    line-height: 66px;
    text-align: start;
    display: flex;
    align-items: center;
    font-size: 16px;

    &:first-child {
        border-top: none;
    }
`

const CloseIcon = styled.img`
    height: 24px;
    width: 24px;
    position: absolute;
    right: 24px;
    top: 12px;
`

const ExpandableNavItemIcon = styled.img`
    ${transition}
    margin-left: auto;
    font-size: 20px;
    width: 20px;
    height: 20px;
    transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
`

const ExpandableNavList = styled.div`
    ${transition}
    max-height: ${props => (props.expanded ? "fit-content" : "0")};
    `

const ExpandableNavItem = styled.div`
    ${transition}
    display: flex;
    padding: 0 24px;
    overflow: hidden;
    text-align: start;
    font-size: 14px;
    line-height: 23px;
    opacity: ${props => (props.expanded ? "1" : "0")};
    height: ${props => (props.expanded ? "24px" : "0")};
    margin-bottom: 16px;
    color: ${Color.Black50};
`;