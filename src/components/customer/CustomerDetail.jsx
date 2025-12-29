import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { CustomerDetailStyle } from './style';
import { MainButtonStyle, SmallButtonStyle } from '../../ui/style';
import { useDispatch, useSelector } from 'react-redux';
import { customerActions } from '../../store/modules/customerSlice';

const CustomerDetail = () => {
    const { customerID } = useParams();
    const { customers } = useSelector((state) => state.customer);
    const { authed } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const newItem = customers.find(
        (customer) => customer.id === Number(customerID)
    );
    const { id, name, title, content, date } = newItem;

    const onEdit = () => {
        if (authed) {
            dispatch(customerActions.setCurrentCustomer(newItem));
            navigate(`/customer/customeredit`);
        } else {
            alert('로그인 사용');
            navigate(`/login`);
        }
    };
    const onDel = () => {
        if (authed) {
            dispatch(customerActions.removeCustomer(id));
            navigate('/customer');
        } else {
            alert('로그인 사용');
            navigate(`/login`);
        }
    };
    const onGoList = () => {
        if (location.state?.page) {
            navigate('/customer', {
                state: { page: location.state.page },
            });
        } else {
            navigate('/customer');
        }
    };

    return (
        <CustomerDetailStyle>
            <div className="inner">
                <h2>고객문의</h2>
                <div className="con">
                    <div className="con_top">
                        <div>
                            <p className="num">{id}번 문의글</p>
                            <h3>{title}</h3>
                            <p className="date">{date}</p>
                        </div>
                        <div>
                            <p className="name">작성자 : {name}</p>
                        </div>
                    </div>
                    <p className="txt">{content}</p>
                </div>
                <div className="btn_wrap">
                    <MainButtonStyle
                        style={{ width: '300px' }}
                        onClick={onGoList}
                    >
                        고객문의 목록 보기
                    </MainButtonStyle>
                    <SmallButtonStyle onClick={onEdit}>수정</SmallButtonStyle>
                    <SmallButtonStyle onClick={onDel}>삭제</SmallButtonStyle>
                </div>
            </div>
        </CustomerDetailStyle>
    );
};

export default CustomerDetail;
