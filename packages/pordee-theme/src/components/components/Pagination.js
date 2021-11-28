import { useEffect } from "react";
import { connect, styled } from "frontity";
import { Link } from ".";
import ArrowLeftIcon from "../public/icons/arrow-left.svg"
import ArrowRightIcon from "../public/icons/arrow-right.svg"
import { Font } from "../constants/Font";
import { Color } from "../constants/Color";

const PaginationComponent = ({ state, actions }) => {
    const { next, previous, totalPages, page } = state.source.get(state.router.link);

    useEffect(() => {
        // pre-fetch next page
        if (next) actions.source.fetch(next);
    }, []);

    return (<>
        {(previous || next) && <PaginationContainer>
            <Link link={previous} disabled={!previous}>
                <Button disabled={!previous}>
                    <ButtonIcon src={ArrowLeftIcon} />
                </Button>
            </Link>
            <Text>หน้าที่ {page} จาก {totalPages}</Text>
            <Link link={next} disabled={!next}>
                <Button disabled={!next}>
                    <ButtonIcon src={ArrowRightIcon} />
                </Button>
            </Link>
        </PaginationContainer>}
    </>);
};

export const Pagination = connect(PaginationComponent);

const PaginationContainer = styled.div`
    font-family: ${Font.IBMPlexSans};
    display: flex;
    margin: 36px auto;
`;

const Button = styled.div`
    display: flex;
    width: 40px;
    height: 32px;
    border: 1px solid ${Color.Black};
    box-sizing: border-box;
    border-radius: 2px;
    opacity: ${props => props.disabled && '0.3'};
`;

const ButtonIcon = styled.img` 
    margin: auto;
    width: 24px;
    height: 24px;
`;

const Text = styled.div`
    line-height: 32px;
    margin: 0 24px;
`;
