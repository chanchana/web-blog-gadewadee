import { connect, styled } from "frontity";
import { PostItem, FeaturedCategories } from "../components";
import { Pagination } from "./Pagination";
import { TextField } from "./TextField";
import { Text } from '../constants/Text';
import SearchIcon from '../public/icons/search.svg';
import { useMemo } from 'react';

const PostListComponent = ({ state, actions }) => {
    const data = state.source.get(state.router.link);

    const handleSearch = (value) => {
        if (value) {
            actions.router.set(`/?s=${value}`);
        } else {
            actions.router.set('/');
        }
    }

    const defaultSearchKeyword = useMemo(() => {
        const url = decodeURI(state.router.link);
        const searchParams = url.split('/?s=');
        if (searchParams.length > 1) {
            return searchParams[1];
        }
        return undefined;
    }, [state.router.link])

    return (
        <Container>
            <SearchContainer>
                <TextField defaultValue={defaultSearchKeyword} placeholder={Text.PlaceholderSearch} center={true} icon={SearchIcon} width="306px" onSubmit={handleSearch} />
            </SearchContainer>
            <PostListContainer>
                {data.items.map(({ type, id }, index) => {
                    const item = state.source[type][id];
                    return <PostItem key={`post-${index}-${item.id}`} item={item} />;
                })}
            </PostListContainer>
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
    grid-row-gap: 72px;
    grid-template-columns: 1fr 1fr 1fr;
`;

const Container = styled.div`
    display: block;
`;
