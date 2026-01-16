import { Link } from 'react-router-dom';
import { HeaderStyle, NavStyle, MemberMenu } from './style';
import { useSelector } from 'react-redux';
import { CgLogIn, CgUserAdd, CgShoppingBag } from 'react-icons/cg';

const Header = () => {
    const { quantityTotal } = useSelector((state) => state.cart);
    const { authed, user } = useSelector((state) => state.auth);

    return (
        <HeaderStyle>
            <div className="inner">
                <NavStyle className="nav">
                    <ul>
                        <li>
                            <Link to="/about">Brand</Link>
                        </li>
                        <li>
                            <Link to="/book">News</Link>
                        </li>
                        <li>
                            <Link to="/product">Product</Link>
                        </li>
                        <li>
                            <Link to="/notice">Notice</Link>
                        </li>
                        <li>
                            <Link to="/customer">Customer</Link>
                        </li>
                    </ul>
                </NavStyle>

                <h1>
                    <Link to="/">
                        <img src="./images/logo.png" alt="logo" />
                    </Link>
                </h1>

                <MemberMenu className="member-menu">
                    {authed ? (
                        <li className="out">
                            {user.name} 님<Link to="/logout">Logout</Link>
                        </li>
                    ) : (
                        <>
                            <li>
                                <Link to="/join" aria-label="회원가입">
                                    <CgUserAdd />
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" aria-label="로그인">
                                    <CgLogIn />
                                </Link>
                            </li>
                        </>
                    )}
                    <li>
                        <Link to="/cart" aria-label="장바구니">
                            <CgShoppingBag />
                            <span>{quantityTotal}</span>
                        </Link>
                    </li>
                </MemberMenu>
            </div>
        </HeaderStyle>
    );
};

export default Header;
