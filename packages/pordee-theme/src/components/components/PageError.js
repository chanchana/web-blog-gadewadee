import { styled } from "frontity";
import { Color } from "../constants/Color";
import { Font } from "../constants/Font";
import { Text } from "../constants/Text";
import { Link } from './Link';

export const PageError = () => {
    const arrow = (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="unset" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 12H19.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5 17L5.5 12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5 7L5.5 12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
    return (
        <Container>
            <Title>{Text.ErrorHeading}</Title>
            <Description>{Text.ErrorSubHeading}</Description>
            <Link link="/">
                <Button><Icon>{arrow}</Icon>{Text.ButtonGoHome}</Button>
            </Link>
        </Container>
    );
};


const Container = styled.div`
    width: 800px;
    padding: 174px 24px;
    text-align: center;
    font-family: ${Font.IBMPlexSans};
`;

const Title = styled.h1`
    font-size: 24px;
    line-height: 40px;
    height: 54px;

`;

const Description = styled.div`
    font-size: 18px;
    line-height: 30px;
    height: 54px;
    color: ${Color.Black50};
`;

const Button = styled.div`
    transition: 0.3s ease-in-out;
    padding: 4px 8px;
    border: 1px solid ${Color.Black};
    box-sizing: border-box;
    border-radius: 2px;
    width: fit-content;
    margin: 48px auto 0;
    cursor: pointer;
    font-size: 16px;
    stroke: ${Color.Black};
    display: flex;
    line-height: 26px;
    height: 34px;

    &:hover {
        background: ${Color.Black};
        color: ${Color.White};
        stroke: ${Color.White};
    }
`;

const Icon = styled.span`
    margin-right: 4px;
`;
