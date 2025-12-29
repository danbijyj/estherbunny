import styled, { createGlobalStyle } from 'styled-components';

export const MasonryStyle = createGlobalStyle`
  .grid {
    display: flex;
    margin-left: -40px;
    width: auto;
  }
  .column {
    padding-left: 40px;
  }
`;

export const BookBox = styled.article`
    width: 100%;
    margin-bottom: 40px;
    cursor: pointer;
    overflow: hidden;
    box-sizing: border-box;
    transition: all 0.3s ease;
    border-radius: 20px;
    border: 2px solid #000;
    h3 {
        padding: 10px 16px;
        span {
            color: #999;
        }
        .title {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-word;
        }
    }
    p {
        width: 100%;
        overflow: hidden;
        img {
            width: 100%;
            display: block;
            object-fit: contain;
            transition: 0.3s;
        }
        &:hover img {
            transform: scale(1.1);
        }
    }
`;
