import { styled, css } from "frontity";
import LogoIconSrc from '../public/logo-icon.svg';

export const Loading = () => (
    <Container css={SpinAnimation}>
        <Spin>
            <img src={LogoIconSrc} width="48px" height="48px" />
        </Spin>
    </Container>
);

export default Loading;

const Spin = styled.div`
    animation: rotation 2s infinite linear;
`;

const SpinAnimation = css`
    @keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
}
`;

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 240px 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
