import { connect, styled } from "frontity";
import { PostItem, FeaturedCategories } from ".";
import { Pagination } from "./Pagination";
import { TextField } from "./TextField";
import { Text } from '../constants/Text';
import SearchIcon from '../public/icons/search.svg';
import { useMemo } from 'react';
import { SearchBox } from "./SearchBox";
import { PostList } from './PostList';

const PostListComponent = ({ state, actions }) => {
    const data = state.source.get(state.router.link);
    const posts = data.items.map(({ type, id }) => state.source[type][id]);

    return (
        <Container>
            <SearchContainer>
                <SearchBox width="306px" center={true} />
            </SearchContainer>
            <PostList posts={posts} />
            <div style={{display: 'flex'}}>
                <Pagination />
            </div>
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

const PostListContainer = styled.div`
    max-width: 1136px;
    padding: 24px;
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 56px;
    grid-template-columns: 1fr 1fr 1fr;
`;

const Container = styled.div`
    display: block;
`;
