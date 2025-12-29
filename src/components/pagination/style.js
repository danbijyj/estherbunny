import styled from 'styled-components';

export const PaginationStyle = styled.div`
    div {
        margin-top: 50px;
        text-align: center;
        button {
            width: 36px;
            height: 36px;
            border-radius: 8px;
            margin-right: 12px;
            background: #fff;
            border: none;
            &:nth-child(1),
            &:nth-last-child(1),
            &:nth-child(2),
            &:nth-last-child(2) {
                border: 1px solid #000;
            }
            &.on {
                border: none;
                background-color: #ef4da2;
                color: #fff;
                font-weight: 700;
            }
        }
    }
`;
