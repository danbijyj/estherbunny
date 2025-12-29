import { CustomerListStyle } from './style';
import { MainButtonStyle, TableStyle } from '../../ui/style';
import CustomerItem from './CustomerItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { pagenationActions } from '../../store/modules/pagenationSlice';
import { customerActions } from '../../store/modules/customerSlice';
import { useNavigate } from 'react-router-dom';

const CustomerLIst = () => {
    const { customers } = useSelector((state) => state.customer);
    const { pageData, perPage, currentPage } = useSelector(
        (state) => state.pagenation
    );
    const { authed } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const startIdx = (currentPage - 1) * perPage;
    const endIdx = startIdx + perPage;
    const currentCustomers = pageData.slice(startIdx, endIdx);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(pagenationActions.setData(customers));
    }, [customers]);
    const onMake = () => {
        if (authed) {
            navigate(`/customer/customeradd`);
        } else {
            alert('로그인하세요.');
            navigate(`/login`);
        }
    };
    return (
        <CustomerListStyle>
            <div className="customerInfo">
                <div>
                    <p>궁금한 점이 있으신가요?</p>
                    <p>문의글을 등록해 보세요.</p>
                </div>
                <MainButtonStyle style={{ width: '200px' }} onClick={onMake}>
                    문의 등록하기
                </MainButtonStyle>
            </div>
            <TableStyle>
                <caption>게시판</caption>
                <colgroup>
                    <col className="num" />
                    <col className="title" />
                    <col className="name" />
                    <col className="date" />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {currentCustomers.map((customer) => (
                        <CustomerItem
                            key={customer.id}
                            customer={customer}
                            currentPage={currentPage}
                        />
                    ))}
                </tbody>
            </TableStyle>
        </CustomerListStyle>
    );
};

export default CustomerLIst;
