import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { pagenationActions } from '../../store/modules/pagenationSlice';

import CustomerLIst from '../../components/customer/CustomerLIst';
import Pagination from '../../components/pagination';
import { CustomerStyle } from './style';

const Customer = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (location.state?.page) {
            dispatch(pagenationActions.goToPage(location.state.page));
        }
    }, [location.state, dispatch]);

    return (
        <CustomerStyle>
            <div className="inner">
                <h2>고객문의</h2>
                <CustomerLIst />
                <Pagination />
            </div>
        </CustomerStyle>
    );
};

export default Customer;
