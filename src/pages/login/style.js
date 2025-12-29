import styled from 'styled-components';

export const LoginStyle = styled.div`
    .inner {
        padding: 100px 0;
        .login {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 50px;
            img {
                width: 400px;
                border-radius: 20px;
            }
            form {
                border: 3px solid #000;
                border-radius: 20px;
                height: 394px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 20px;
                padding: 0 50px;
                p {
                    label {
                        display: inline-block;
                        width: 90px;
                    }
                    input[type='email'],
                    input[type='password'] {
                        width: 350px;
                        box-sizing: border-box;
                        height: 48px;
                        padding: 0 10px;
                        border-radius: 20px;
                        border: 1px solid #000;
                    }
                }
                .divider {
                    width: 100%;
                    height: 1px;
                    background-color: #ddd;
                    margin: 20px 0;
                }
                .kakao {
                    width: 100%;
                    height: 50px;
                    font-size: 16px;
                    font-weight: 600;
                    border-radius: 25px;
                    background-color: #fee500;
                    border: 2px solid #000;
                    cursor: pointer;
                    box-shadow: 3px 3px 0 #000;
                    transition: transform 0.15s ease, box-shadow 0.15s ease;
                    &:hover {
                        transform: translate(3px, 3px);
                        box-shadow: 0 0 0 #000;
                    }
                }
            }
        }
    }
`;

export const LogoutStyle = styled.div`
    .inner {
        padding: 100px 0;
        .logout {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 3px solid #000;
            border-radius: 20px;
            width: 600px;
            margin: 0 auto;
            padding: 70px 0;
            p {
                font-size: 20px;
                span {
                    color: #ef4da2;
                    font-weight: 600;
                }
                img {
                    width: 200px;
                    margin: 50px 0;
                }
            }
        }
    }
`;

export const JoinStyle = styled.div`
    .inner {
        padding: 100px 0;
    }
    form {
        border: 3px solid #000;
        border-radius: 20px;
        width: 600px;
        margin: 0 auto;
        text-align: center;
        padding: 50px;
        p {
            margin-bottom: 20px;
            label {
                display: inline-block;
                width: 90px;
                text-align: left;
            }
            input[type='email'],
            input[type='password'],
            input[type='tel'],
            input[type='text'] {
                width: 450px;
                box-sizing: border-box;
                height: 48px;
                padding: 0 10px;
                border-radius: 20px;
                border: 1px solid #000;
            }
            &:last-child {
                display: flex;
                justify-content: center;
                gap: 20px;
            }
        }
        .divider {
            width: 100%;
            height: 1px;
            background-color: #ddd;
            margin: 50px 0;
        }
    }
`;
