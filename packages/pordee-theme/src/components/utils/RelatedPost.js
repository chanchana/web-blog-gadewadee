export const getRelatedPosts = async (state, actions, post, count = 3) => {
    if (post.categories.length === 0) {
        return [];
    }
    const url = `/`;
    await actions.source.fetch(url);
    const posts = state.source.get(url).items.map(({ type, id }) => state.source[type][id]);
    const otherPosts = posts.filter(p => p.id !== post.id);
    const relatedPosts = otherPosts
        .filter(p => p.categories.some(c => post.categories.includes(c)))
        .slice(0, count);
    if (relatedPosts.length < count) {
        const fillPosts = otherPosts
            .filter(p => !relatedPosts.map(rp => rp.id).includes(p.id))
            .slice(0, count - relatedPosts.length);
        return relatedPosts.concat(fillPosts);
    }
    return relatedPosts;
}