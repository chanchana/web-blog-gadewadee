import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Posts from "./components/Posts";
import Title from "./title";
import { Header, Post, PageError, Loading, Footer } from './components'
import IconLogoSrc from './public/logo-icon.svg'
import smoothscroll from 'smoothscroll-polyfill';
import { useEffect } from 'react';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  useEffect(() => {
    smoothscroll.polyfill();
  }, [])

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      {/* <HeadContainer>
        <Header />
      </HeadContainer> */}
      <Header />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Posts when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      <Footer />
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
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1f38c5;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;
