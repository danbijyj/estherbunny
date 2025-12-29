import styled from 'styled-components';

export const CartListStyle = styled.div`
    .cart-top {
        border: 3px solid #000;
        border-radius: 20px;
        padding: 40px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
        .left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p {
                color: #666;
                &:first-child {
                    color: #000;
                    font-size: 20px;
                    font-weight: 600;
                }
            }
            .buttons {
                display: flex;
                justify-content: center;
                gap: 16px;
            }
        }
        .right {
            background-color: #ebebeb;
            border-radius: 16px;
            padding: 12px 20px;
            width: 40%;
            .right-title {
                font-weight: 600;
            }
            .divider {
                height: 1px;
                background-color: #bbb;
                margin: 6px 0 8px;
            }
            .benefit {
                font-size: 14px;
                display: flex;
                justify-content: space-between;
                span {
                    &:first-child {
                        color: #666;
                        font-weight: 600;
                    }
                }
            }
        }
    }
    .cart-list-wrap {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .cart-list {
            border: 3px solid #000;
            border-radius: 20px;
            padding: 40px;
            article {
                width: 760px;
                display: flex;
                border-bottom: 1px solid #ddd;
                align-items: center;
                justify-content: space-between;
                padding: 24px 12px;
                img {
                    width: 100px;
                    border-radius: 12px;
                    border: 1px solid #000;
                }
                h3 {
                    width: 300px;
                }
                div {
                    width: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    span {
                        cursor: pointer;
                        font-size: 24px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                    }
                    strong {
                        text-align: center;
                        width: 32px;
                    }
                }
                .price {
                    text-align: right;
                    width: 120px;
                }
                .remove {
                    cursor: pointer;
                    font-size: 24px;
                    color: #999;
                }
            }
        }
        .cart-right {
            border: 3px solid #000;
            border-radius: 20px;
            padding: 40px;
            box-sizing: border-box;
            .divider {
                width: 100%;
                height: 1px;
                background-color: #000;
                margin: 20px 0;
            }
            p {
                display: flex;
                align-items: center;
                span {
                    margin-left: auto;
                    text-align: right;
                    em {
                        color: #ef4da2;
                        font-weight: 500;
                        font-size: 20px;
                    }
                }
            }
            button {
                display: block;
                margin-bottom: 16px;
            }
        }
    }
`;

export const CartEmptyWrap = styled.div`
    .empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        .empty_bg {
            text-align: center;
            border-radius: 24px;
            background-image: url('/images/cart_empty.png');
            background-repeat: no-repeat;
            width: 546px;
            height: 546px;
            font-size: 20px;
            font-weight: 500;
            padding-top: 45px;
            box-sizing: border-box;
        }
    }
`;
