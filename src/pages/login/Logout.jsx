import { useDispatch, useSelector } from 'react-redux';
import { LogoutStyle } from './style';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../../store/modules/authSlice';
import { SmallButtonStyle } from '../../ui/style';

const Logout = () => {
    const { authed, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onLogout = () => {
        if (user?.provider === 'kakao' && window.Kakao?.Auth) {
            window.Kakao.Auth.logout();
        }
        dispatch(authActions.logout());
        navigate(`/`);
    };

    return (
        <LogoutStyle>
            <div className="inner">
                {authed ? (
                    <>
                        <div className="logout">
                            <p>
                                <span>{user.name}</span>님,
                            </p>
                            <p>이용해 주셔서 감사합니다.</p>
                            <p>
                                <img src="/images/logout.gif" alt="" />
                            </p>
                            <p>
                                <SmallButtonStyle
                                    style={{ width: '300px' }}
                                    onClick={onLogout}
                                >
                                    LOGOUT
                                </SmallButtonStyle>
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <p>로그인 정보를 찾을수 없습니다.</p>
                    </>
                )}
            </div>
        </LogoutStyle>
    );
};

export default Logout;
