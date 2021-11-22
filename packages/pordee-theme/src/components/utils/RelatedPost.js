export const getRelatedPosts = async (state, actions, post, count = 3) => {
    if (post.categories.length === 0) {
        return [];
    }
    const url = `/`;
    await actions.source.fetch(url);
    const posts = state.source.get(url).items.map(({ type, id }) => state.source[type][id]);
    console.log(posts);
    const relatedPosts = posts
        .filter(p => p.id !== post.id)    
        .filter(p => p.categories.some(c => post.categories.includes(c)))
        .slice(0, count);
    return relatedPosts;
}