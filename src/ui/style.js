import styled from 'styled-components';

export const MainButtonStyle = styled.button`
    height: 50px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 25px;
    background-color: #898dee;
    border: 2px solid #000;
    cursor: pointer;
    box-shadow: 3px 3px 0 #000;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    &:hover {
        transform: translate(3px, 3px);
        box-shadow: 0 0 0 #000;
    }
`;
export const SmallButtonStyle = styled.button`
    width: 70px;
    height: 50px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 25px;
    background-color: #fff;
    border: 2px solid #000;
    cursor: pointer;
    box-shadow: 3px 3px 0 #000;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    &:hover {
        transform: translate(3px, 3px);
        box-shadow: 0 0 0 #000;
    }
`;

export const ButtonStyle = styled.button`
    background-color: ${(props) => props.bgColor || '#000'};
    color: ${(props) => props.textColor || '#fff'};
    width: ${(props) => props.width || 'auto'};
    border: none;
    border: 1px solid #999;
    text-align: center;
    cursor: pointer;
    padding: 12px 20px;
    vertical-align: top;
    transition: background-color 0.3s;
    &:hover {
        opacity: 0.9;
    }
`;

export const InputStyle = styled.input`
    background-color: ${(props) => props.bgColor || '#fff'};
    color: ${(props) => props.textColor || '#000'};
    width: ${(props) => props.width || '200px'};
    border: 1px solid #ccc;
    padding: 10px 15px;
    font-size: 16px;
    outline: none;
    border-radius: 4px;
    box-sizing: border-box;
    transition: border 0.3s;
    &::placeholder {
        color: #aaa;
    }
    &:focus {
        border: 1px solid #666;
    }
`;

export const TableStyle = styled.table`
    width: 100%;
    border: 3px solid #000;
    border-radius: 20px;
    border-collapse: separate;
    border-spacing: 0;
    overflow: hidden;
    caption {
        position: absolute;
        text-indent: -9999px;
        left: 0;
        top: 0;
    }
    .num {
        width: 10%;
    }
    .title {
        width: auto;
    }
    .name {
        width: 15%;
    }
    .date {
        width: 15%;
    }
    th,
    td {
        height: 60px;
        vertical-align: middle;
        border-bottom: 1px solid #ddd;
    }
    th {
        border-bottom: none;
        font-weight: 700;
        background: #f3d9e2;
    }
    tr:last-child td {
        border-bottom: none;
    }
    td {
        text-align: center;
        &:nth-child(2) {
            text-align: left;
            padding-left: 20px;
        }
        &:last-child {
            color: #999;
        }
    }
`;
