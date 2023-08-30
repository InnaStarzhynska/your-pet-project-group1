import styled from 'styled-components';
import { Field } from 'formik';

export const FormItem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FormWrapper = styled.div`
    &:not(:last-child) {
        margin-bottom: 12px;
        @media screen and (min-width: 768px) {
            margin-bottom: 8px;
        }
    }
`;

export const FormLabel = styled.label``;


export const FormInput = styled(Field)`
    width: 190px;
    height: 28px;
    padding-top: 4px;
    padding-right: 12px;
    padding-bottom: 4px;
    padding-left: 12px;
    background: transparent;
    outline: none;
    border: 1px solid #54adff;
    border-radius: 20px;

    &[type='date']::-webkit-calendar-picker-indicator {
        cursor: pointer;
    }

    @media screen and (min-width: 768px) {
        width: 255px;
        height: 32px
    };
    
    &::-webkit-calendar-picker-indicator {
        color: #111111;
        font-size: 15px;
        padding: 2px;
        margin-right: 25px;
    }
    &::-webkit-datetime-edit {
        color: #111111;
        padding: 2px;
    }
`;

export const InputName = styled.span`
    min-width: 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.35;
    letter-spacing: 0.04em;
    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
`;

