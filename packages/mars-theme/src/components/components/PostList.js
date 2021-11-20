import { connect, styled } from "frontity";
// import Item from "./list-item";
import { PostItem } from "../components";
import { Pagination } from "./Pagination";

const PostListComponent = ({ state }) => {
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
        return <PostItem key={item.id} item={item} />;
      })}
      <Pagination />
    </PostListContainer>
  );
};

export default connect(PostListComponent);

const PostListContainer = styled.div`
    max-width: 1136px;
    padding: 24px;
    list-style: none;
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 72px;
    grid-template-columns: repeat(3, 1fr);
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
