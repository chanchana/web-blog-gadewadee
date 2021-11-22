import { styled, connect } from 'frontity';
import { useState, useEffect, useMemo } from 'react';
import { Link } from '.';
import { Color } from '../constants/Color';
import HighlightBrushSrc from '../public/highlight_brush.png';
import HeaderImageSrc from '../public/images/header_image.png';
import Arrow from '../public/icons/arrow.svg';
import { Text } from '../constants/Text';
import { Font } from '../constants/Font';
import { Parameter } from '../constants/Parameter';
import LogoIconSrc from '../public/logo-icon.svg';
import SearchIconSrc from '../public/icons/search.svg';
import { SearchBox } from './SearchBox';

const DesktopNavComponent = ({ state }) => {

    const [smallNavVisible, setSmallNavVisible] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [categoryUrl, setCategoryUrl] = useState('/');

    useEffect(() => {
        setExpanded(false);
        setSearchVisible(false);
    }, [state.router.link]);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 162) {
            setSmallNavVisible(true);
        } else {
            setSmallNavVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getCurrentUrl = () => decodeURI(state.router.link).split('page')[0]

    const currentCategoryUrl = useMemo(() => {
        const currentUrl = getCurrentUrl();
        if (currentUrl === '/' || currentUrl.includes('category')) {
            setCategoryUrl(currentUrl);
            return currentUrl;
        }
        return categoryUrl;
    }, [state.router.link]);

    const subCategories = state.theme.menu.slice(Parameter.MainCategoryCount);
    const isSelectedSubCategory = subCategories.map(s => s[1]).includes(currentCategoryUrl);
    const isPost = state.source.get(state.router.link).isPostType;

    const NavItem = ({ label, selected, isMini }) => (
        <NavItemContainer>
            <NavItemLabel selected={selected} isMini={isMini}>{label}</NavItemLabel>
            <NavItemHighlightImage src={HighlightBrushSrc} selected={selected} />
        </NavItemContainer>
    )

    const ExpandableNavItem = ({ label, selected, isMini }) => (
        <ExpandableNavItemContainer onClick={() => setExpanded(!expanded)}>
            <NavItemLabel selected={selected} isMini={isMini}>{label}<ExpandableNavItemIcon src={Arrow} expanded={expanded} /></NavItemLabel>
            <NavItemHighlightImage src={HighlightBrushSrc} selected={selected} />
        </ExpandableNavItemContainer>
    )

    const SubNav = () => (
        isSelectedSubCategory && <SubNavContainer>
            <SubNavTitle>{Text.CategoryEtc}</SubNavTitle>
            <SubNavListContainer>
                {subCategories.map(([name, link], index) => (
                    <Link link={link}>
                        <SubNavItem selected={currentCategoryUrl === link}>{name}</SubNavItem>
                    </Link>
                ))}
            </SubNavListContainer>
        </SubNavContainer>
    )

    const HeaderBanner = () => (
        !isSelectedSubCategory && <HeaderImageContainer>
            <HeaderImage src={HeaderImageSrc} />
            <HeaderImageOverlay />
            <HeaderTextContainer>
                <HeaderText>
                    <HeaderTextHeading>{Text.BannerHeading}</HeaderTextHeading>
                    <HeaderTextSubHeading>{Text.BannerSubHeading}</HeaderTextSubHeading>
                </HeaderText>
            </HeaderTextContainer>
        </HeaderImageContainer>
    )

    const MiniNavSide = ({ children, position }) => (
        <MiniNavSideContainer>
            {position === 'left' && <><GrowableSpacer />{children}<Spacer /></>}
            {position === 'right' && <><Spacer />{children}<GrowableSpacer /></>}
        </MiniNavSideContainer>
    )

    const MiniSearch = () => (
        <>
            {!searchVisible && <div style={{cursor: 'pointer'}} onClick={() => setSearchVisible(true)}>
                <img src={SearchIconSrc} width="24px" height="24px" style={{marginTop: '8px'}} />
            </div>}
            {searchVisible && <SearchBox width="240px" closable={true} onClose={() => setSearchVisible(false)} />}
        </>
    )

    const renderNavItems = (width, isMini) => {
        const shouldExpand = 
            !isPost ? expanded :
            (isMini ? (smallNavVisible && expanded) : (!smallNavVisible && expanded));
        return (
            <Grid width={width}>
                {state.theme.menu.slice(0, Parameter.MainCategoryCount).map(([name, link], index) => (
                    <Link link={link} key={`navbar-${index}`}>
                        <NavItem label={name} selected={currentCategoryUrl === link} isMini={isMini} />
                    </Link>
                ))}
                <div style={{ position: 'relative' }}>
                    <ExpandableNavItem label={Text.CategoryEtc} selected={isSelectedSubCategory} isMini={isMini} />
                    <ExpandableList expanded={shouldExpand}>
                        {subCategories.map(([name, link], index) => {
                            return (
                                <Link link={link} key={`expandable-nav-${index}`}>
                                    {index !== 0 && <Divider />}
                                    <ExpandableListItem expanded={shouldExpand}>{name}</ExpandableListItem>
                                </Link>
                            )
                        })}
                    </ExpandableList>
                </div>
            </Grid>
        )
    };

    return (
        <div>
            <NavigationBar>
                {renderNavItems(undefined, false)}
            </NavigationBar>
            {!isPost && <>
                <SubNav />
                <HeaderBanner />
            </>}
            {isPost && <>
                {smallNavVisible && 
                    <MiniNavigationBarContainer>
                        <MiniNavigationBar visible={smallNavVisible}>
                            {/* <MiniNavSide position="left"> */}
                                <Link link="/">
                                    <img src={LogoIconSrc} />
                                </Link>
                            {/* </MiniNavSide> */}
                            {renderNavItems('760px', true)}
                            {/* <MiniNavSide position="right"> */}
                                <MiniSearch />
                            {/* </MiniNavSide> */}
                        </MiniNavigationBar>
                    </MiniNavigationBarContainer>
                }
            </>}
        </div>
    )
}

export const DesktopNav = connect(DesktopNavComponent)

const Grid = styled.div`
    font-family: ${Font.IBMPlexSans};
    display: grid;
    grid-auto-flow: column;
    column-gap: 32px;
    width: ${props => props.width};
    margin: auto;
`;

const NavigationBar = styled.div`
    width: fit-content;
    margin: auto;
`;

const MiniNavigationBarContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
`;

const MiniNavigationBar = styled.div`
    transition: 0.5s ease-out;
    height: 48px;
    top: ${props => props.visible ? '0' : '-48px'};
    background: ${Color.White};
    padding: 8px 24px 0;
    display: flex;
    z-index: 100;
    width: 100%;
    max-width: 1136px;
    margin: auto;
`;

const MiniNavSideContainer = styled.div`
    display: flex;
    flex-grow: 1;
    max-width: calc(100% - 1240px);
`;

const GrowableSpacer = styled.div`
    flex-grow: 1;
`;

const Spacer = styled.div`
    flex-grow: 1;
    max-width: 150px;
`;

const NavItemContainer = styled.div`
    display: inline-grid;
    cursor: pointer;
    min-width: 88px;
    text-align: center;
`;

const NavItemLabel = styled.div`
    padding: 10px 12px;
    line-height: 20px;
    font-size: ${props => props.isMini ? '14px' : '18px'};
    font-weight: ${props => props.selected && '600'};
`;

const NavItemHighlightImage = styled.img`
    height: 8px;
    width: ${props => props.selected ? '88px' : '0'};
    transition: 0.3s;
    margin-left: calc(50% - 44px);
    ${NavItemContainer}:hover & {
        width: 88px;
    }
`;

const ExpandableNavItemContainer = styled.div`
    display: inline-grid;
    cursor: pointer;
    min-width: 88px;
    text-align: center;
    height: 40px;
`;

const ExpandableNavItemIcon = styled.img`
    position: absolute;
    margin-left: 4px;
    font-size: 20px;
    width: 20px;
    height: 20px;
    transition: 0.3s;
    transform: rotate(0deg);
    transform: ${props => props.expanded ? 'rotate(180deg)' : ''};
`;

const ExpandableList = styled.div`
    position: absolute;
    right: -10px;
    top: 48px;
    opacity: ${props => (props.expanded ? "1" : "0")};
    max-height: ${props => (props.expanded ? "800px" : "0")};
    overflow: hidden;
    transition: all 0.3s;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1), 1px 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 10;
`;

const ExpandableListItem = styled.div`
    transition: all 0.3s;
    overflow: hidden;
    width: 152px;
    padding: ${props => (props.expanded ? "16px" : "0 16px")};
    font-family: ${Font.IBMPlexSans};

    &:hover {
        background: #ebebeb;
    }
`;

const Divider = styled.div`
    background: #C0C0C0;
    height: 1px;
    margin: 0 16px;
`;

const SubNavContainer = styled.div`
    font-family: ${Font.IBMPlexSans};
    margin-top: 64px;
`;

const SubNavTitle = styled.div`
    font-weight: 600;
    font-size: 24px;
`;

const SubNavListContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    width: fit-content;
    margin: auto;
    gap: 32px;
    margin-top: 24px;
`;

const SubNavItem = styled.div`
    line-height: 16px;
    font-size: 16px;
    font-weight: ${props => props.selected && '600'};
    color: ${props => props.selected ? Color.Black : Color.Black35};
`;

const HeaderImageContainer = styled.div`
    margin-top: 40px;
    position: relative;
    display: flex;
    font-family: ${Font.IBMPlexSans};
`;

const HeaderImage = styled.img`
    width: 100%;
    height: 256px;
    object-fit: cover;
    z-index: 1;
`;

const HeaderImageOverlay = styled.img`
    width: 100%;
    height: 256px;
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
`;

const HeaderTextContainer = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 256px;
    z-index: 3;
    top: 0;
    left: 0;
`;

const HeaderText = styled.div`
    margin: auto;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${Color.White};
`;

const HeaderTextHeading = styled.div`
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 66px;
    letter-spacing: 0.05em;
    text-align: center;
`;

const HeaderTextSubHeading = styled.div`
    font-family: IBM Plex Sans Thai;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: center;
`;