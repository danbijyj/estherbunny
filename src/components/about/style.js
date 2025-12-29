import styled from 'styled-components';

export const AboutStyle = styled.section`
    border: 3px solid #000;
    border-radius: 20px;
    padding: 50px;
    box-sizing: border-box;
    text-align: center;
    h3 {
        font-size: 20px;
        margin-bottom: 28px;
        font-family: 'Yangjin', sans-serif;
        position: relative;
        display: inline-block;
        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 100%;
            height: 3px;
            background-color: #000;
        }
    }
    .content {
        display: flex;
        gap: 50px;
        align-items: center;
        .image {
            img {
                border-radius: 16px;
                width: 360px;
            }
        }
        .text {
            display: flex;
            flex-direction: column;
            gap: 20px;
            text-align: left;
            p {
                word-break: keep-all;
                white-space: pre-line;
                &.en {
                    color: #999;
                    font-size: 14px;
                }
            }
        }
    }
    &.right {
        .content {
            flex-direction: row-reverse;
            justify-content: space-between;
        }
    }
`;
