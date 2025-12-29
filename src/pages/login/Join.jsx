import { JoinStyle } from './style';
import Spinner from '../../components/spinner';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../../store/modules/authSlice';
import { MainButtonStyle, SmallButtonStyle } from '../../ui/style';

const Join = () => {
    const [isSpinner, setIsSpinner] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const nameRef = useRef();
    const [user, setUser] = useState({
        name: '',
        tel: '',
        email: '',
        password: '',
    });
    const { name, email, tel, password } = user;
    const changeInput = (e) => {
        const { value, name } = e.target;
        setUser({
            ...user,
            [name]: value, // name 속성이 상태의 key로 쓰임
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !tel.trim() || !email.trim() || !password.trim())
            return;
        dispatch(authActions.signup(user));
        setUser({
            name: '',
            tel: '',
            password: '',
            email: '',
        });
        navigate(`/login`);
    };

    const onReset = (e) => {
        e.preventDefault();
        setUser({
            name: '',
            tel: '',
            password: '',
            email: '',
        });
        nameRef.current.focus();
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSpinner(false);
        }, 600);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            {isSpinner && <Spinner />}
            {/* 로딩여부에 따라 보이게안보이게 - 삼항연산자 */}
            <JoinStyle>
                <div className="inner">
                    <h2>회원가입</h2>
                    <form onSubmit={onSubmit}>
                        <p>
                            <label>이름</label>
                            <input
                                type="text"
                                placeholder="홍길동"
                                name="name"
                                value={name}
                                onChange={changeInput}
                                ref={nameRef}
                            />
                        </p>
                        <p>
                            <label>전화번호</label>
                            <input
                                type="tel"
                                name="tel"
                                value={tel}
                                placeholder="010-0000-0000"
                                onChange={changeInput}
                            />
                        </p>
                        <p>
                            <label>이메일</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="abc@naver.com"
                                onChange={changeInput}
                            />
                        </p>
                        <p>
                            <label>비밀번호</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                placeholder="1234"
                                onChange={changeInput}
                            />
                        </p>
                        <p className="divider"></p>
                        <p>
                            <MainButtonStyle
                                style={{ width: '260px' }}
                                type="submit"
                            >
                                회원가입
                            </MainButtonStyle>
                            <SmallButtonStyle
                                style={{ width: '260px' }}
                                onClick={onReset}
                            >
                                입력취소
                            </SmallButtonStyle>
                        </p>
                    </form>
                </div>
            </JoinStyle>
        </>
    );
};

export default Join;
