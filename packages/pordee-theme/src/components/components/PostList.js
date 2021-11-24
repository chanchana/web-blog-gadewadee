import { connect, styled } from "frontity";
import { PostItem } from "../components";
import { useResponsive } from "../hooks/useResponsive";

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
    padding: ${props => props.isMobile ? '16px' : '24px'};
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: ${props => props.isMobile ? '20px' : '56px'};
    grid-template-columns: ${props => props.isMobile ? '1fr' : props.isTablet ? '1fr 1fr' : '1fr 1fr 1fr'};
    margin: auto;
`;
