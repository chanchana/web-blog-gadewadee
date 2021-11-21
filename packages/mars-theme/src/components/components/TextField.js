import styled from "@emotion/styled"
import { Color } from "../constants/Color";
import { Font } from "../constants/Font";
import { useState } from 'react';

export const TextField = ({ defaultValue, icon, placeholder, center, width, onSubmit }) => {
    const [value, setValue] = useState(defaultValue || undefined);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        onSubmit(value);
        event.preventDefault();
    }

    return (
        <Form width={width} onSubmit={handleSubmit}>
            <Icon src={icon}/>
            <Input placeholder={placeholder} center={center} value={value} onChange={handleChange} />
        </Form>
    );
}

const Input = styled.input`
    height: 24px;
    border: none;
    outline: none;
    font-size: 14px;
    font-family: ${Font.IBMPlexSans};
    width: 100%;

    &::placeholder{
        text-align: ${props => props.center && 'center'};
        margin-left: ${props => props.center && '32px'};
    }
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 8px;
`;

const Form = styled.form`
    border-bottom: 1px solid ${Color.Black};
    transition: 0.3s;
    height: 32px;
    display: flex;
    width: ${props => props.width || '100%'};
    margin: auto;

    &:focus-within {
        border-bottom: 1px solid ${Color.PinkDark};
    }
`;

