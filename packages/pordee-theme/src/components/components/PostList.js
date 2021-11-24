import { connect, styled } from "frontity";
import { PostItem } from "../components";
import { useResponsive } from "../hooks/useResponsive";
import { mobileMediaQuery, tabletMediaQuery } from "../utils/MediaQuery";

const PostListComponent = ({ posts }) => {
    const responsive = useResponsive();
    return (
        <PostListContainer {...responsive}>
            {posts.map((post, index) => (
                <PostItem key={`post-${index}-${post.id}`} item={post} />
            ))}
        </PostListContainer>
    );
};

export const PostList = connect(PostListComponent);

const PostListContainer = styled.div`
    max-width: 1136px;
    padding: 24px;
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 56px;
    grid-template-columns: 1fr 1fr 1fr;
    margin: auto;

    ${mobileMediaQuery} {
        padding: 16px;
        grid-row-gap: 20px;
        grid-template-columns: 1fr;
    }

    ${tabletMediaQuery} {
        grid-template-columns: 1fr 1fr;
    }
`;
