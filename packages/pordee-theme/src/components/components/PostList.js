import { connect, styled } from "frontity";
import { PostItem, FeaturedCategories } from "../components";
import { Pagination } from "./Pagination";
import { TextField } from "./TextField";
import { Text } from '../constants/Text';
import SearchIcon from '../public/icons/search.svg';
import { useMemo } from 'react';
import { SearchBox } from "./SearchBox";

const PostListComponent = ({ posts }) => {
    return (
        <PostListContainer>
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
`;
