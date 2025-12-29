import { useDispatch, useSelector } from 'react-redux';
import { CustomerAddStyle } from './style';
import { MainButtonStyle, SmallButtonStyle } from '../../ui/style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { customerActions } from '../../store/modules/customerSlice';
const CustomerEdit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { current } = useSelector((state) => state.customer);
    const [user, setUser] = useState(current);
    const { title, id, name, content, date } = user;
    const now = new Date();
    const changeInput = (e) => {
        const { value, name } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        dispatch(
            customerActions.updateCustomer({
                ...user,
                date: `${now.getFullYear()}-${
                    now.getMonth() + 1
                }-${now.getDate()}`,
            })
        );
        navigate('/customer');
    };
    const onCancel = (e) => {
        e.preventDefault();
        navigate('/customer');
    };
    return (
        <CustomerAddStyle>
            <div className="inner">
                <h2>고객문의 수정</h2>
                <form className="customer-add" onSubmit={onSubmit}>
                    <p>
                        <input
                            type="text"
                            placeholder="제목"
                            name="title"
                            value={title}
                            onChange={changeInput}
                        />
                    </p>
                    <p>
                        <input
                            type="text"
                            placeholder="작성자"
                            name="name"
                            value={name}
                            onChange={changeInput}
                        />
                    </p>
                    <p>
                        <textarea
                            cols="100"
                            rows="10"
                            placeholder="문의하실 내용을 입력 하세요."
                            name="content"
                            value={content}
                            onChange={changeInput}
                        ></textarea>
                    </p>
                    <div className="btn_wrap">
                        <MainButtonStyle
                            style={{ width: '300px' }}
                            onClick={onCancel}
                        >
                            고객문의 목록 보기
                        </MainButtonStyle>
                        <SmallButtonStyle type="submit">수정</SmallButtonStyle>
                        <SmallButtonStyle onClick={onCancel}>
                            취소
                        </SmallButtonStyle>
                    </div>
                </form>
            </div>
        </CustomerAddStyle>
    );
};
export default CustomerEdit;
