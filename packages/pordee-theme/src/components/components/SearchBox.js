import { connect, styled } from "frontity";
import { TextField } from "./TextField";
import { Text } from '../constants/Text';
import SearchIcon from '../public/icons/search.svg';
import { useMemo } from 'react';
import TimesIconSrc from '../public/icons/times.svg'
import { forwardRef } from 'react';
import { getSearchKeyword } from "../utils/Search";

export const SearchBox = forwardRef(({ state, actions, center, width, closable, onClose, placeholder }, ref) => {
    const handleSearch = (value) => {
        if (value) {
            actions.router.set(`/?s=${value}`);
        } else {
            actions.router.set('/');
        }
    }

    const defaultSearchKeyword = useMemo(() => {
        return getSearchKeyword(state);
    }, [state.router.link])

    return (
        <Container width={width}>
            <TextField ref={ref} defaultValue={defaultSearchKeyword} placeholder={placeholder || Text.PlaceholderSearch} center={center} icon={SearchIcon} onSubmit={handleSearch} />
            {closable && <Icon onClick={onClose} src={TimesIconSrc} />}
        </Container>
    )
});

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