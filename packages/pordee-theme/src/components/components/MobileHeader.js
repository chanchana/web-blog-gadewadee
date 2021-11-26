import styled from "@emotion/styled"
import connect from "@frontity/connect";
import { Color } from "../constants/Color";
import { Font } from "../constants/Font";
import { Parameter } from "../constants/Parameter";
import MobileHeaderImageSrc from '../public/images/mobile_header_image.png'
import { useState, useEffect } from 'react';
import { Text } from "../constants/Text";
import { ExpandableListItem, Divider } from "./DesktopNav";
import { Link } from '.'
import ArrowIconSmallSrc from '../public/icons/arrow-small.svg';
import { transition } from "../utils/CssHelper";

const MobileHeaderComponent = ({ state }) => {
    const [subCategoryExpanded, setSubCategoryExpanded] = useState(false);
    const getCurrentUrl = () => decodeURI(state.router.link).split('page')[0]
    
    console.log(state.theme.menu.find(m => m[1] === getCurrentUrl()) || [1, 2])
    const [categoryName, categoryLink] = state.theme.menu.find(m => m[1] === getCurrentUrl()) || ['', ''];
    const subCategories = state.theme.menu.slice(Parameter.MainCategoryCount);
    const isSelectedSubCategory = subCategories.map(s => s[1]).includes(categoryLink);
    const subCategoriesWithDefault = [['ทั้งหมด', '/']].concat(subCategories);
    const isPost = state.source.get(state.router.link).isPostType;
    const isError = state.source.get(state.router.link).isError;

    useEffect(() => {
        setSubCategoryExpanded(false);
    }, [state.router.link])


    const category = (
        <CategoryContainer>
            <Overlay onClick={() => setSubCategoryExpanded(false)} expanded={subCategoryExpanded} />
            {!isSelectedSubCategory && <CategoryText>{categoryLink === '/' ? Text.CategoryAll : categoryName}</CategoryText>}
            {isSelectedSubCategory && <>
                <CategoryText>{Text.CategoryEtc}</CategoryText>
                <CategorySubText onClick={() => setSubCategoryExpanded(true)}>{categoryName}<ExpandableNavItemIcon src={ArrowIconSmallSrc} expanded={subCategoryExpanded} /></CategorySubText>
            </>}
            <ExpandableListContainer>
                <ExpandableList expanded={subCategoryExpanded} style={{pointerEvents: 'all'}}>
                    {subCategoriesWithDefault.map(([name, link], index) => {
                        return (
                            <Link link={link} key={`expandable-nav-${index}`}>
                                {index !== 0 && <Divider />}
                                <ExpandableListItem expanded={subCategoryExpanded}>{name}</ExpandableListItem>
                            </Link>
                        )
                    })}
                </ExpandableList>
            </ExpandableListContainer>
        </CategoryContainer>
    )

    const headerBanner = (
        <HeaderImageContainer>
            <HeaderImage src={MobileHeaderImageSrc} />
            <HeaderImageOverlay />
            <HeaderTextContainer>
                <HeaderText>
                    <HeaderTextHeading>{Text.BannerHeading}</HeaderTextHeading>
                    <HeaderTextSubHeading>{Text.BannerSubHeading}</HeaderTextSubHeading>
                </HeaderText>
            </HeaderTextContainer>
        </HeaderImageContainer>
    )

    return (
        <Container>
            {!isPost && state.router.link === '/' && headerBanner}
            {!isPost && category}
        </Container>
    )
}

export const MobileHeader = connect(MobileHeaderComponent);

const Container = styled.div``;

const CategoryContainer = styled.div`
    font-family: ${Font.IBMPlexSans};
    margin: 32px 16px 8px;
`;

const ExpandableList = styled.div`
    margin: auto;
    opacity: ${props => (props.expanded ? "1" : "0")};
    max-height: ${props => props.expanded ? '800px' : "0"};
    overflow: hidden;
    transition: all 0.3s;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1), 1px 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 10;
`;

const CategoryText = styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: 110%;
`;

const CategorySubText = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 110%;
    margin-top: 12px;
    place-content: center;
    align-items: center;
    display: flex;
    color: ${Color.Black50};
`;

const HeaderImageContainer = styled.div`
    position: relative;
    display: flex;
    font-family: ${Font.IBMPlexSans};
`;

const HeaderImage = styled.img`
    width: 100%;
    height: 224px;
    object-fit: cover;
`;

const HeaderImageOverlay = styled.img`
    width: 100%;
    height: 224px;
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
    height: 224px;
    top: 0;
    left: 0;
    z-index: 2;
`;

const HeaderText = styled.div`
    margin: auto;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${Color.White};
`;

const HeaderTextHeading = styled.div`
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.05em;
    text-align: center;
    font-size: 24px;
    line-height: 40px;
`;

const HeaderTextSubHeading = styled.div`
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: center;
    font-size: 14px;
    line-height: 23px;
    max-width: 264px;
`;

const ExpandableListContainer = styled.div`
    position: absolute;
    display: flex;
    width: calc(100% - 32px);
    margin-top: 12px;
    pointer-events: none;
    z-index: 11;
`;

const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    pointer-events: ${props => props.expanded ? 'all' : 'none'};
    top: 0;
    left: 0;
    z-index: 10;
`

const ExpandableNavItemIcon = styled.img`
    ${transition}
    margin-left: 4px;
    font-size: 20px;
    width: 20px;
    height: 20px;
    transform: ${props => props.expanded ? 'rotate(0deg)' : 'rotate(180deg)'};
`