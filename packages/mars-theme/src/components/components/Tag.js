import { connect, styled } from "frontity";
import { Link } from './Link';

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const TagComponent = ({ state, category }) => {
    const allCategory = state.source.category;

    return (
        allCategory && <Link link={allCategory[category].link}>
            <TagContainer>
                {allCategory[category].name}
            </TagContainer>
        </Link>
    );
};

// Connect the Item to gain access to `state` as a prop
export const Tag = connect(TagComponent);

const TagContainer = styled.div`
    display: inline-block;
    padding: 2px 8px;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 2px;
    transition: 0.5s;
    margin-right: 12px;
    cursor: pointer;
    font-family: 'IBM Plex Sans Thai', sans-serif;

    &:hover {
        color: white;
        background: #000000;
    }
`;

