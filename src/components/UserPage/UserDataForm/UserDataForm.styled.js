import styled from 'styled-components';

export const UserForm = styled.form`
    @media screen and (min-width: 768px) {
        width: 355px;
        margin: 0;
        padding: 0;
    }
`;

export const DivLogOut = styled.div`
  display: flex;
  margin-top: 25px;

  @media screen and (min-width: 768px) {
    margin-top: 15px;
  }
`;

export const ButtonLogOut = styled.button`

  display: flex;
    align-items: center;
    gap: 12px;
    margin: 21px 0 0 2px;
    padding: 0;
    stroke: #54adff;
    width: 100px;

    font-family: Manrope;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.35;
    background: transparent;
    border: none;
    letter-spacing: 0.04em;
    color: #888888;
    @media screen and (min-width: 768px) {
        margin: 13px 0 0;
    }

    &:hover,
    &:focus {
        box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
        background: transparent;
        color: #888888;
        border: none;
    }
`;

