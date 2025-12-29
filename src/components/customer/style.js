import styled from 'styled-components';

export const CustomerListStyle = styled.div`
    .customerInfo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #eee;
        padding: 40px 40px 40px 140px;
        border-radius: 20px;
        margin-bottom: 50px;
        font-size: 20px;
        background-image: url('/images/customer.png');
        background-repeat: no-repeat;
        background-position: 60px center;
        background-size: 60px;
    }
`;

export const CustomerAddStyle = styled.div`
    .inner {
        padding: 100px 0;
    }
    .customer-add {
        border-top: 2px solid #000;
        padding: 20px 0;
        p {
            margin-bottom: 15px;
            input {
                width: 100%;
                height: 55px;
                padding: 20px;
                box-sizing: border-box;
                font-family: 'pretendard';
                font-size: 16px;
            }
            textarea {
                width: 100%;
                box-sizing: border-box;
                height: 300px;
                padding: 20px;
                font-family: 'pretendard';
                font-size: 16px;
            }
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
    .btn_wrap {
        display: flex;
        justify-content: center;
        gap: 16px;
        border-top: 2px solid #000;
        padding-top: 40px;
    }
`;
export const CustomerDetailStyle = styled.div`
    .inner {
        padding: 100px 0;
    }
    .con {
        font-size: 16px;
        line-height: 1.7;
        border-top: 2px solid #000;
        border-bottom: 2px solid #000;
        margin-bottom: 40px;
        padding: 20px 0;
        .con_top {
            /* padding-bottom: 20px; */
            border-bottom: 1px solid #ddd;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            .num {
                margin-bottom: 20px;
            }
            h3 {
                font-size: 24px;
                font-weight: 500;
            }
            .date {
                color: #999;
            }
        }
        .txt {
            margin: 20px 0;
            height: 300px;
            white-space: pre-line;
        }
    }
    .btn_wrap {
        display: flex;
        justify-content: center;
        gap: 16px;
    }
`;
