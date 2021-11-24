import { connect, styled } from "frontity";
import { FeaturedCategories, Flex } from ".";
import { Pagination } from "./Pagination";
import { SearchBox } from "./SearchBox";
import { PostList } from './PostList';
import { Font } from "../constants/Font";
import { GoHomeButton } from "./GoHomeButton";
import { Text } from "../constants/Text";

const PostListComponent = ({ state, actions }) => {
    const data = state.source.get(state.router.link);
    const posts = data.items.map(({ type, id }) => state.source[type][id]);

    const notFound = (
        <NotFound>
            <div style={{marginBottom: '16px'}}>{Text.ErrorSearchNotFound}</div>
            <GoHomeButton />
        </NotFound>
    )

    return (
        <Container>
            <SearchContainer>
                <SearchBox state={state} actions={actions} width="306px" center={true} />
            </SearchContainer>
            <PostList posts={posts} />
            {posts.length === 0 && notFound}
            <PaginationContainer>
                <Pagination />
            </PaginationContainer>
            <FeaturedCategories />
        </Container>
    );
};

export default connect(PostListComponent);

const SearchContainer = styled.div`
    margin-top: 48px;
    margin-bottom: 32px;
    width: 100%;
    display: flex;
`;

const NotFound = styled.div`
    font-family: ${Font.IBMPlexSans};
    font-size: 24px;
    line-height: 40px;
    height: 54px;
    text-align: center;
    padding: 32px 24px 96px;
    font-weight: 600;
`;

const Container = styled.div`
    display: block;
`;

const PaginationContainer = styled.div`
    display: flex;
    margin-top: 36px;
`;
