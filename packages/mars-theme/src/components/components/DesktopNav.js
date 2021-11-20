import { styled, connect } from 'frontity';
import { useState, useEffect } from 'react';
import { Link } from '.';
import { Color } from '../constants/Color';
import HighlightBrushSrc from '../public/highlight_brush.png';
import HeaderImageSrc from '../public/images/header_image.png';
import Arrow from '../public/icons/arrow.svg';

const showCategoryCount = 5;

const DesktopNavComponent = ({ state }) => {

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        setExpanded(false);
    }, [state.router.link]);

    const getCurrentCategoryUrl = () => decodeURI(state.router.link).split('page')[0]

    const subCategories = state.theme.menu.slice(showCategoryCount);
    const isSelectedSubCategory = subCategories.map(s => s[1]).includes(getCurrentCategoryUrl());
    const isPost = state.source.get(state.router.link).isPostType;

    const NavItem = ({ label, selected }) => (
        <NavItemContainer>
            <NavItemLabel selected={selected}>{label}</NavItemLabel>
            <NavItemHighlightImage src={HighlightBrushSrc} selected={selected} />
        </NavItemContainer>
    )

    const ExpandableNavItem = ({ label, selected }) => (
        <ExpandableNavItemContainer onClick={() => setExpanded(!expanded)}>
            <NavItemLabel selected={selected}>{label}<ExpandableNavItemIcon src={Arrow} expanded={expanded}/></NavItemLabel>
            <NavItemHighlightImage src={HighlightBrushSrc} selected={selected} />
        </ExpandableNavItemContainer>
    )

    const SubNav = () => (
        isSelectedSubCategory && <SubNavContainer>
            <SubNavTitle>ไอเดียดี ๆ</SubNavTitle>
            <SubNavListContainer>
                {subCategories.map(([name, link], index) => {
                    const isSelected = getCurrentCategoryUrl() === link;
                    return (
                    <Link link={link}>
                        <SubNavItem selected={isSelected}>{name}</SubNavItem>
                    </Link>
                    )
                })}
            </SubNavListContainer>
        </SubNavContainer>
    )

    const  HeaderBanner = () => (
        !isSelectedSubCategory && <HeaderImageContainer>
            <HeaderImage src={HeaderImageSrc} />
            <HeaderImageOverlay />
            <HeaderTextContainer>
                <HeaderText>
                    <HeaderTextHeading>พอ-ดี-ต่อ-ใจ</HeaderTextHeading>
                    <HeaderTextSubHeading>แหล่งรวมความรู้การตลาดและการจัดการดี ๆ ให้คนคิดดีมาเรียนรู้จากกัน :)</HeaderTextSubHeading>
                </HeaderText>
            </HeaderTextContainer>
        </HeaderImageContainer>
    )

    return (
        <div>
            <NavigationBar>
                {state.theme.menu.slice(0, showCategoryCount).map(([name, link], index) => {
                const isCurrentPage = getCurrentCategoryUrl() === link;
                console.log(getCurrentCategoryUrl())
                console.log(link)
                return (
                    <Link link={link}>
                        <NavItem label={name} selected={isCurrentPage}/>
                    </Link>
                );
                })}
                <div style={{position: 'relative'}}>
                    <ExpandableNavItem label="ไอเดียดี ๆ" selected={isSelectedSubCategory}/>
                    <ExpandableList expanded={expanded}>
                        {subCategories.map(([name, link], index) => {
                            return (
                                <Link link={link}>
                                    {index !== 0 && <Divider />}
                                    <ExpandableListItem expanded={expanded}>{name}</ExpandableListItem>
                                </Link>
                            )
                        })}
                    </ExpandableList>
                </div>
            </NavigationBar>
            {!isPost && <>
                <SubNav />
                <HeaderBanner />
            </>}
        </div>
    )
}

export const DesktopNav = connect(DesktopNavComponent)

const NavigationBar = styled.div`
    font-family: 'IBM Plex Sans Thai', sans-serif;
    display: grid;
    grid-auto-flow: column;
    width: fit-content;
    margin: auto;
    column-gap: 32px;
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
    font-size: 18px;
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
    font-family: 'IBM Plex Sans Thai', sans-serif;

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
    font-family: 'IBM Plex Sans Thai', sans-serif;
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
    font-family: 'IBM Plex Sans Thai', sans-serif;
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