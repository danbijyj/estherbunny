import { useDispatch } from 'react-redux';
import { CustomerAddStyle } from './style';
import { MainButtonStyle, SmallButtonStyle } from '../../ui/style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { customerActions } from '../../store/modules/customerSlice';

const CustomerAdd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        title: '',
        content: '',
        date: '',
    });
    const { name, title, content, date } = data;
    const now = new Date();
    const changeInput = (e) => {
        const { value, name } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        data.date = `${now.getFullYear()}-${
            now.getMonth() + 1
        }-${now.getDate()}`;
        dispatch(customerActions.addCustomer(data));
        navigate('/customer');
    };
    const onGo = (e) => {
        e.preventDefault();
        navigate('/customer');
    };

    return (
        <CustomerAddStyle>
            <div className="inner">
                <h2>고객문의</h2>
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
                            onClick={onGo}
                        >
                            고객문의 목록 보기
                        </MainButtonStyle>
                        <SmallButtonStyle type="submit">저장</SmallButtonStyle>
                        <SmallButtonStyle onClick={onGo}>취소</SmallButtonStyle>
                    </div>
                </form>
            </div>
        </CustomerAddStyle>
    );
};

export default CustomerAdd;
