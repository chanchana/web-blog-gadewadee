import { connect, styled } from "frontity";
import { Link } from "./Link";
import { FeaturedMedia, Tag } from ".";

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
                {allCategory && item.categories && item.categories.map((category, index) => (
                    <Tag key={`tag-${item.article}-${index}`} category={category} />
                ))}
            </Description>
        </PostItemContainer>
    );
};

// Connect the Item to gain access to `state` as a prop
export const PostItem = connect(PostItemComponent);

const PostItemContainer = styled.div`
    max-width: 352px;
`;

const Title = styled.h1`
    font-weight: 600;
    font-size: 20px;
    color: rgba(12, 17, 43);
    margin: 16px 0;
    box-sizing: border-box;
    font-family: 'IBM Plex Sans Thai', sans-serif;
    line-height: 28px;
`;

const Description = styled.div`
    min-height: 120px;
`;

// const AuthorName = styled.span`
//     color: rgba(12, 17, 43, 0.9);
//     font-size: 0.9em;
// `;

// const StyledLink = styled(Link)`
//     padding: 15px 0;
// `;

// const PublishDate = styled.span`
//     color: rgba(12, 17, 43, 0.9);
//     font-size: 0.9em;
// `;

const Excerpt = styled.div`
    line-height: 22.4px;
    margin: 8px 0 12px 0;
    color: rgba(12, 17, 43, 0.8);
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
