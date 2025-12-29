import styled from 'styled-components';

export const ProductSearchWrap = styled.div`
    margin-bottom: 40px;
    position: relative;
    form {
        display: flex;
        justify-content: space-between;
        p {
            select {
                width: 160px;
                height: 48px;
                box-sizing: border-box;
                padding: 10px;
                border: 1px solid #000;
                border-radius: 20px;
                margin-right: 8px;
            }
            input[type='text'] {
                width: 350px;
                box-sizing: border-box;
                height: 48px;
                padding: 10px;
                border: 1px solid #000;
                border-radius: 20px;
                margin-right: 8px;
            }
        }
    }
`;

export const ProductListWrap = styled.article`
    &.cart-box {
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
        article {
            width: 23%;
            border: 2px solid #000;
            border-radius: 20px;
            padding: 20px;
            box-sizing: border-box;
            div {
                margin-bottom: 20px;
                img {
                    width: 100%;
                    border: 2px solid #000;
                    border-radius: 12px;
                }
            }
            h3 {
                font-size: 14px;
                color: #999;
                margin-bottom: 4px;
            }
            h4 {
                word-break: keep-all;
                line-height: 1.4;
            }
            .price {
                text-align: center;
                margin: 4px 0 8px 0;
                span {
                    font-size: 20px;
                }
            }
            .cart_btn {
                text-align: center;
            }
            .desc {
                font-size: 12px;
                color: #666;
                line-height: 1.3;
                margin-top: 20px;
                padding-top: 12px;
                border-top: 1px solid #999;
            }
        }
    }
`;
