import { styled } from 'frontity'
import { Color } from '../constants/Color';
import { Font } from '../constants/Font';
import { Text } from '../constants/Text';

export const GoHomeButton = ({ handleHome }) => {
    const arrow = (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="unset" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 12H19.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.5 17L5.5 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.5 7L5.5 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
    return (
        <Button onClick={handleHome}><Icon>{arrow}</Icon>{Text.ButtonGoHome}</Button>
    );
}

const Button = styled.div`
    transition: 0.3s ease-in-out;
    padding: 4px 8px;
    border: 1px solid ${Color.Black};
    box-sizing: border-box;
    border-radius: 2px;
    width: fit-content;
    margin: 0 auto;
    cursor: pointer;
    font-size: 16px;
    stroke: ${Color.Black};
    display: flex;
    line-height: 26px;
    height: 34px;
    font-family: ${Font.IBMPlexSans};
    font-weight: 400;

    &:hover {
        background: ${Color.Black};
        color: ${Color.White};
        stroke: ${Color.White};
    }
`;

const Icon = styled.span`
    margin-right: 4px;
`;