import { styled } from 'frontity'
import { useState, useEffect } from 'react'
import ArrowUpCircleSrc from '../public/icons/arrow-up-circle.svg';

export const ScrollUp = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        console.log({
            current: window.pageYOffset,
            height: window.screen.height,
        })
        if (window.pageYOffset > 360) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        visible && <Container>
            <ButtonContainer>
                <Button onClick={scrollToTop} src={ArrowUpCircleSrc} />
            </ButtonContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    /* left: 0; */
`;

const ButtonContainer = styled.div`
    width: 100%;
    max-width: 1186px;
    margin: auto;
    text-align: right;
`;

const Button = styled.img`
    width: 40px;
    height: 40px;
    margin-left: auto;
    margin-right: 24px;
    margin-bottom: 44px;
    cursor: pointer;
`;

// window.screen.height;