import styled from 'styled-components';

export const HeaderStyle = styled.header`
    background-color: #ef4da2;
    border-radius: 0 0 20px 20px;
    position: fixed;
    z-index: 100;
    width: 100%;
    .inner {
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    h1 {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        a {
            img {
                width: 220px;
            }
        }
    }
`;

export const NavStyle = styled.nav`
    &.nav {
        ul {
            display: flex;
            li {
                margin-right: 24px;
                a {
                    font-weight: 500;
                    transition: 0.3s;
                    color: #fff;
                    &:hover {
                        color: #f3d9e2;
                    }
                }
            }
        }
    }
`;

export const MemberMenu = styled.ul`
    &.member-menu {
        display: flex;
        li {
            margin-left: 16px;
            position: relative;
            align-items: center;
            &.out {
                display: flex;
                align-items: center;
                color: #fff;
                font-size: 16px;
                a {
                    font-size: 16px;
                    font-weight: 500;
                    margin-left: 16px;
                    background-color: #fff;
                    color: #ef4da2;
                    padding: 0px 12px;
                    border-radius: 12px;
                    &:hover {
                        color: #ef4da2;
                    }
                }
            }
            a {
                color: #fff;
                font-size: 28px;
                svg {
                    display: block;
                }
                &:hover {
                    color: #f3d9e2;
                }
            }
            &:last-child span {
                font-size: 12px;
                font-weight: 100;
                border-radius: 50%;
                display: block;
                position: absolute;
                right: -12px;
                top: -8px;
                width: 20px;
                height: 20px;
                background-color: #000;
                color: #fff;
                text-align: center;
                line-height: 20px;
            }
        }
    }
`;
