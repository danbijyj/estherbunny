import styled from 'styled-components';

export const NoticeListStyle = styled.div``;

export const NoticeDetailStyle = styled.div`
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
        .num {
            margin-bottom: 20px;
        }
        h3 {
            font-size: 24px;
            font-weight: 500;
        }
        .date {
            color: #999;
            padding-bottom: 20px;
            border-bottom: 1px solid #ddd;
        }
        .txt {
            margin: 20px 0;
            height: 300px;
            white-space: pre-line;
        }
    }
`;
