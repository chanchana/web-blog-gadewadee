import { connect, styled, decode } from "frontity";
// import Item from "./list-item";
import { PostItem } from "../components";
import Pagination from "./pagination";

const List = ({ state }) => {
    // Get the data of the current list.
    const data = state.source.get(state.router.link);

    return (
        <PostListContainer>
            {/* If the list is a taxonomy, we render a title. */}
            {/* {data.isTaxonomy && (
                <Header>
                    {data.taxonomy}:{" "}
                    <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
                </Header>
            )} */}

            {/* If the list is for a specific author, we render a title. */}
            {/* {data.isAuthor && (
                <Header>
                    Author: <b>{decode(state.source.author[data.id].name)}</b>
                </Header>
            )} */}

            {/* Iterate over the items of the list. */}
            {data.items.map(({ type, id }) => {
                const item = state.source[type][id];
                // Render one Item component for each one.
                return (
                    <PostItemContainer>
                        <PostItem key={item.id} item={item} />
                    </PostItemContainer>
                );
            })}
            <Pagination />
        </PostListContainer>
    );
};

export default connect(List);

const PostListContainer = styled.div`
    max-width: 1136px;
    padding: 24px;
    padding-top: 66px;
    list-style: none;
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 72px;

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3,minmax(0,1fr))!important;
    }

    @media (max-width: 1023px) {
        grid-template-columns: repeat(2,minmax(0,1fr))!important;
    }

    @media (max-width: 767px) {
        grid-template-columns: repeat(1,minmax(0,1fr))!important;
        grid-row-gap: 36px;
    }
`;

const PostItemContainer = styled.div`
    display: inline-grid;
    max-width: 352px;
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  // color: rgba(12, 17, 43, 0.9);
`;
