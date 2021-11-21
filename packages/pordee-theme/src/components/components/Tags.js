import { connect, styled } from "frontity";
import { Tag } from '../components';

const TagsComponent = ({ state, item }) => {
    const allCategory = state.source.category;

    return (
        <Container>
            {allCategory && item.categories && item.categories.map((category, index) => (
                <Tag key={`tag-${item.article}-${index}`} category={category} />
            ))}
        </Container>
    );
};

export const Tags = connect(TagsComponent);

const Container = styled.div`
`;
