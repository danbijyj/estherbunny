import { useDispatch } from 'react-redux';
import { LoginStyle } from './style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { authActions } from '../../store/modules/authSlice';
import { MainButtonStyle } from '../../ui/style';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const { email, password } = user;
    const changeInput = (e) => {
        const { value, name } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (!password.trim() || !email.trim()) return;
        dispatch(authActions.login(user));
        setUser({
            email: '',
            password: '',
        });
        navigate('/');
    };

    const kakaoLogin = () => {
        window.Kakao.Auth.login({
            scope: 'profile_nickname',
            success: function () {
                window.Kakao.API.request({
                    url: '/v2/user/me',
                    success: function (res) {
                        const user = {
                            id: res.id,
                            name: res.kakao_account.profile.nickname,
                            provider: 'kakao',
                        };
                        dispatch(authActions.kakaoLogin(user));
                        navigate('/');
                    },
                });
            },
            fail: function (err) {
                console.error(err);
            },
        });
    };

    return (
        <LoginStyle>
            <div className="inner">
                <h2>로그인</h2>
                <div className="login">
                    <div>
                        <img src="./images/login.png" alt="로그인" />
                    </div>
                    <form onSubmit={onSubmit}>
                        <p>
                            <label>이메일</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="테스트 이메일: abc@naver.com"
                                onChange={changeInput}
                            />
                        </p>
                        <p>
                            <label>비밀번호</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                placeholder="테스트 비밀번호: 1234"
                                onChange={changeInput}
                            />
                        </p>
                        <p className="divider"></p>
                        <MainButtonStyle
                            style={{ width: '100%' }}
                            type="submit"
                        >
                            LOGIN
                        </MainButtonStyle>
                        <button
                            className="kakao"
                            type="button"
                            onClick={kakaoLogin}
                        >
                            카카오톡 로그인
                        </button>
                    </form>
                </div>
            </div>
        </LoginStyle>
    );
};

export default Login;
