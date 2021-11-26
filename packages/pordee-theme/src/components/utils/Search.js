export const getSearchKeyword = (state) => {
    const url = decodeURI(state.router.link);
    const searchParams = url.split('/?s=');
    if (searchParams.length > 1) {
        return searchParams[1];
    }
    return undefined;
}