import { connect, styled } from "frontity";
import { TextField } from "./TextField";
import { Text } from '../constants/Text';
import SearchIcon from '../public/icons/search.svg';
import { useMemo } from 'react';
import TimesIconSrc from '../public/icons/times.svg'

const SearchBoxComponent = ({ state, actions, center, width, closable, onClose }) => {
    const handleSearch = (value) => {
        if (value) {
            actions.router.set(`/?s=${value}`);
        } else {
            actions.router.set('/');
        }
    }

    const defaultSearchKeyword = useMemo(() => {
        const url = decodeURI(state.router.link);
        const searchParams = url.split('/?s=');
        if (searchParams.length > 1) {
            return searchParams[1];
        }
        return undefined;
    }, [state.router.link])

    return (
        <Container width={width}>
            <TextField defaultValue={defaultSearchKeyword} placeholder={Text.PlaceholderSearch} center={center} icon={SearchIcon} onSubmit={handleSearch} />
            {closable && <Icon onClick={onClose} src={TimesIconSrc} />}
        </Container>
    )
}

export const SearchBox = connect(SearchBoxComponent);

const Container = styled.div`
    display: flex;
    width: ${props => props.width || '100%'};
    margin: auto;
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;