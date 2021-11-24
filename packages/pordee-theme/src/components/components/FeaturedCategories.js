import { styled, connect } from 'frontity'
import { FeaturedCategoriesData } from '../constants/Parameter'
import { Link } from '../components'
import { Color } from '../constants/Color';
import { Font } from '../constants/Font';
import { mobileMediaQuery } from '../utils/MediaQuery';

const FeaturedCategoriesComponent = ({ state }) => {
    return (
        <Container>
            {FeaturedCategoriesData.map(({menuIndex, image}, index) => {
                const [name, link] = state.theme.menu[menuIndex];
                return (
                    <Link link={link} key={`featured-footer-${index}`}>
                        <ItemContainer>
                            <Image src={image} />
                            <Item>{name}</Item>
                        </ItemContainer>
                    </Link>
                )
            })}
        </Container>
    );
}

export const FeaturedCategories = connect(FeaturedCategoriesComponent);

const Container = styled.div`
    padding: 64px 24px 88px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    max-width: 1136px;

    ${mobileMediaQuery} {
        padding: 40px 16px 48px;
        grid-template-columns: 1fr;
        gap: 12px;
    }
`;

const ItemContainer = styled.div`
    position: relative;
`;

const Image = styled.img`
    height: 160px;
    width: 100%;
    object-fit: cover;

    ${mobileMediaQuery} {
        height: 104px;
    }
`;

const Item = styled.div`
    height: 160px;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    width: 100%;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 26px;
    font-family: ${Font.IBMPlexSans};
    align-items: center;
    justify-content: center;
    color: ${Color.White};
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    &:hover {
        text-decoration: underline;
    }

    ${mobileMediaQuery} {
        height: 104px;
        font-size: 20px;
        line-height: 22px;
    }
`;