import { MainButtonStyle, SmallButtonStyle } from '../../ui/style';
import { useNavigate } from 'react-router-dom';

const CartTop = () => {
    const navigate = useNavigate();
    const onGoJoin = () => {
        navigate(`/join`);
    };
    const onGoLogin = () => {
        navigate(`/login`);
    };

    return (
        <>
            <div className="cart-top">
                <div className="left">
                    <div>
                        <p>회원가입하고 다양한 혜택 받아가세요.</p>
                        <p>
                            에스더버니몰 회원이 되시면 더 편리한 서비스와 풍부한
                            혜택을 받으실 수 있습니다.
                        </p>
                    </div>
                    <div className="buttons">
                        <SmallButtonStyle
                            style={{ width: '160px' }}
                            onClick={onGoJoin}
                        >
                            회원가입
                        </SmallButtonStyle>
                        <MainButtonStyle
                            style={{ width: '160px' }}
                            onClick={onGoLogin}
                        >
                            로그인
                        </MainButtonStyle>
                    </div>
                </div>
                <div className="right">
                    <p className="right-title">가입 혜택 안내</p>
                    <p className="divider"></p>
                    <p className="benefit">
                        <span>구매시 적립(%)</span>
                        <span>최대 3%</span>
                    </p>
                    <p className="benefit">
                        <span>일반 후기 작성(P)</span>
                        <span>50P</span>
                    </p>
                    <p className="benefit">
                        <span>포토 후기 작성(P)</span>
                        <span>100P</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default CartTop;
