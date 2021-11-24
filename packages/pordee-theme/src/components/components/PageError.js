import { styled } from "frontity";
import { Color } from "../constants/Color";
import { Font } from "../constants/Font";
import { Text } from "../constants/Text";
import { GoHomeButton } from './GoHomeButton';

export const PageError = () => {
    return (
        <Container>
            <Title>{Text.ErrorHeading}</Title>
            <Description>{Text.ErrorSubHeading}</Description>
            <GoHomeButton />
        </Container>
    );
};


const Container = styled.div`
    width: 800px;
    padding: 174px 24px;
    text-align: center;
    font-family: ${Font.IBMPlexSans};
`;

const Title = styled.div`
    font-size: 24px;
    line-height: 40px;
    height: 54px;
`;

const Description = styled.div`
    font-size: 18px;
    line-height: 30px;
    height: _/px;
    color: ${Color.Black50};
    margin-bottom: 48px;
`;
