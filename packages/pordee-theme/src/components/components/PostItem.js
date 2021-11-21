import { connect, styled } from "frontity";
import { Link } from "./Link";
import { FeaturedMedia, Tag } from ".";
import { Color } from "../constants/Color";
import { Font } from "../constants/Font";
import { Tags } from "./Tags";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const PostItemComponent = ({ state, item }) => {
    const allCategory = state.source.category;
    const author = state.source.author[item.author];
    const date = new Date(item.date);

    return (
        <PostItemContainer>
            <Link link={item.link}>
                {state.theme.featured.showOnList && (
                    <FeaturedMedia id={item.featured_media} />
                )}
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

// Connect the Item to gain access to `state` as a prop
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
    height: 56px;
    @supports (-webkit-line-clamp: 2) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: initial;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
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
`;
