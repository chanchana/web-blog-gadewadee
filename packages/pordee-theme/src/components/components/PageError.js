import { styled } from "frontity";
import { Color } from "../constants/Color";
import { Font } from "../constants/Font";
import { Text } from "../constants/Text";
import { mobileMediaQuery } from "../utils/MediaQuery";
import { GoHomeButton } from './GoHomeButton';

export const PageError = ({ handleHome }) => {
    return (
        <Container>
            <Title>{Text.ErrorHeading}</Title>
            <Description>{Text.ErrorSubHeading}</Description>
            <GoHomeButton handleHome={handleHome} />
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

    ${mobileMediaQuery} {
        font-size: 18px;
        line-height: 30px;
        height: 20px;
        margin-bottom: 24px;
    }
`;

const Description = styled.div`
    font-size: 18px;
    line-height: 30px;
    height: 32px;
    color: ${Color.Black50};
    margin-bottom: 48px;

    ${mobileMediaQuery} {
        font-size: 14px;
        line-height: 23px;
        height: 14px;
        margin-bottom: 64px;
    }
`;
