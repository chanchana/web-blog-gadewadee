import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Posts from "./components/Posts";
import Title from "./title";
import { Header, Post, PageError, Loading, Footer } from './components'
import IconLogoSrc from './public/logo-icon.svg'
import smoothscroll from 'smoothscroll-polyfill';
import { useEffect, useState, useCallback } from 'react';
import { transition } from "./utils/CssHelper";
import { Color } from "./constants/Color";

const Theme = ({ state, actions }) => {
    const [overlayVisible, setOverlayVisible] = useState(true);
    const data = state.source.get(state.router.link);

    useEffect(() => {
        smoothscroll.polyfill();
        setOverlayVisible(false);
    }, [])

    const handleHome = useCallback(() => {
        actions.source.fetch('/');
        setOverlayVisible(true);
        setTimeout(() => {
            actions.router.set('/');
            setOverlayVisible(false);
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        }, 300)
    }, [])

    return (
        <>
            <Title />
            <Head>
                <meta name="description" content={state.frontity.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
                <html lang="en" />
            </Head>
            <Global styles={globalStyles} />
            <Header handleHome={handleHome} />
            <Main>
                <Switch>
                    <Loading when={data.isFetching} />
                    <Posts when={data.isArchive} />
                    <Post when={data.isPostType} />
                    <PageError when={data.isError} handleHome={handleHome} />
                </Switch>
            </Main>
            <Footer />
            <Overlay visible={overlayVisible} />
        </>
    );
};

export default connect(Theme);

const globalStyles = css`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&family=Sarabun:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    body {
        margin: 0;
        font-family: 'Sarabun', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        background: #FFFFFF;
        cursor: url(${IconLogoSrc}), auto;
    }
    a,
    a:visited {
        color: inherit;
        text-decoration: none;
    }
    html {
        scroll-behavior: smooth;
    }
    @media (prefers-reduced-motion: reduce) {
        html {
            scroll-behavior: auto;
        }
    }
    * {
        -webkit-tap-highlight-color: transparent;
    }
`;

const Main = styled.div`
    display: flex;
    justify-content: center;
`;

const Overlay = styled.div`
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${Color.White};
    opacity: ${props => props.visible ? 1 : 0};
    pointer-events: none;
    ${transition};
`;
