import { connect, styled } from "frontity";
import { Link } from "./Link";
import { FeaturedMedia } from ".";
import { Color } from "../constants/Color";
import { Font } from "../constants/Font";
import { Tags } from "./Tags";
import { desktopMediaQuery, mobileMediaQuery } from "../utils/MediaQuery";

const PostItemComponent = ({ state, item }) => {
    return (
        <PostItemContainer>
            <Link link={item.link}>
                <FeaturedMedia id={item.featured_media} />
                <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
            </Link>

            <Description>
                <Link link={item.link}>
                    {item.excerpt && (
                        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
                    )}
                </Link>
                <Tags item={item} />
            </Description>
        </PostItemContainer>
    );
};

export const PostItem = connect(PostItemComponent);

const PostItemContainer = styled.div`
    max-width: 402px;
`;

const Title = styled.h1`
    font-weight: 600;
    font-size: 20px;
    color: ${Color.PinkDark};
    margin: 16px 0;
    box-sizing: border-box;
    font-family: ${Font.IBMPlexSans};
    line-height: 28px;

    @supports (-webkit-line-clamp: 2) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: initial;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    ${desktopMediaQuery} {
        height: 56px;
    }

    ${mobileMediaQuery} {
        margin: 16px 0 8px;
    }
`;

const Description = styled.div`
`;

const Excerpt = styled.div`
    font-size: 14px;
    line-height: 22px;
    margin: 8px 0 12px 0;
    color: ${Color.Black50};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    &>p {
        margin: 0;
    }

    @supports (-webkit-line-clamp: 2) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: initial;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    ${desktopMediaQuery} {
        height: 44px;
    }

    ${mobileMediaQuery} {
        font-size: 14px;
        line-height: 160%;
    }
`;
