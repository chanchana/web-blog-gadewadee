import { connect, styled } from "frontity";
import { Color } from "../constants/Color";
import { Font } from "../constants/Font";
import { Link } from './Link';

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

export const Tag = connect(TagComponent);

const TagContainer = styled.div`
    display: inline-block;
    padding: 4px 8px 2px;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 2px;
    transition: 0.5s;
    margin-right: 12px;
    margin-bottom: 12px;
    cursor: pointer;
    font-family: ${Font.IBMPlexSans};
    font-size: 14px;
    line-height: 23px;
    color: ${Color.Black};

    &:hover {
        color: white;
        background: #000000;
    }
`;

