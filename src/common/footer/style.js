import styled from 'styled-components';

export const FooterStyle = styled.footer`
    background-color: #000;
    .footer_top {
        p {
            width: 100%;
            height: 30px;
            background-color: #fff;
            border-radius: 0 0 30px 30px;
        }
    }
    .inner {
        padding: 100px 0;
        color: #fff;
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-weight: 300;
        h2 {
            font-family: 'Yangjin';
            font-size: 24px;
            font-weight: 600;
            color: #ef4da2;
            span {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #ef4da2;
                border-radius: 50%;
                padding: 24px 20px 20px;
                box-sizing: border-box;
                line-height: 1;
            }
        }
        .service {
            span {
                cursor: pointer;
                margin-right: 30px;
            }
        }
        .info {
            p {
                display: inline;
                margin-right: 20px;
            }
            span {
                color: #999;
                margin-right: 8px;
            }
        }
        .copy {
            font-size: 14px;
            color: #ddd;
        }
    }
`;
