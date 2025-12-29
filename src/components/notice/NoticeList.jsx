import { NoticeListStyle } from './style';
import NoticeItem from './NoticeItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { pagenationActions } from '../../store/modules/pagenationSlice';
import { TableStyle } from '../../ui/style';

const NoticeList = () => {
    const { notices } = useSelector((state) => state.notice);
    const { pageData, perPage, currentPage } = useSelector(
        (state) => state.pagenation
    );
    const dispatch = useDispatch();
    const startIdx = (currentPage - 1) * perPage;
    const endIdx = startIdx + perPage;
    const currentNotices = pageData.slice(startIdx, endIdx);
    useEffect(() => {
        dispatch(pagenationActions.setData(notices));
    }, [notices]);
    return (
        <NoticeListStyle>
            <TableStyle>
                <caption>공지사항 게시판</caption>
                <colgroup>
                    <col className="num" />
                    <col className="title" />
                    <col className="date" />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {currentNotices.map((notice) => (
                        <NoticeItem
                            key={notice.id}
                            notice={notice}
                            currentPage={currentPage}
                        />
                    ))}
                </tbody>
            </TableStyle>
        </NoticeListStyle>
    );
};

export default NoticeList;
