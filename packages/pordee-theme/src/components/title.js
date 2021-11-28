import { Head, connect, decode } from "frontity";

const Title = ({ state }) => {
    const data = state.source.get(state.router.link);
    let title = state.frontity.title;

    if (data.isTaxonomy) {
        // category
        const { name } = state.source[data.taxonomy][data.id];
        title = `${decode(name)} | ${state.frontity.title}`;
    } else if (data.isAuthor) {
        // author
        const { name } = state.source.author[data.id];
        title = `${decode(name)} | ${state.frontity.title}`;
    } else if (data.isPostType) {
        // posts
        const postTitle = state.source[data.type][data.id].title.rendered;
        const cleanTitle = decode(postTitle);
        title = `${cleanTitle} | ${state.frontity.title}`;
    } else if (data.is404) {
        // error
        title = `${state.frontity.title}`;
    }

    return (
        <Head>
            <title>{title}</title>
        </Head>
    );
};

export default connect(Title);
