import React, { useState, useEffect } from 'react';
import All from '../Components/all/All';

const AllPage = () => {
  const [download, setDownload] = useState([]);

  useEffect(() => {
    let data = [
      {
        id: '1',
        image: 'https://placeimg.com/64/64/1',
        c_name: 'A채널',
        go: <a href="http://localhost:3000/A_ch">채널 바로가기</a>,
        intro: <a href="http://localhost:3000/A_ch_intro">소개</a>,
        qus: <a href="http://localhost:3000/A_ch_qus">문의</a>,
      },
      {
        id: '2',
        image: 'https://placeimg.com/64/64/2',
        c_name: 'B채널',
        go: '채널 바로가기',
        intro: '소개',
        qus: '문의',
      },
      {
        id: '3',
        image: 'https://placeimg.com/64/64/3',
        c_name: 'C채널',
        go: '채널 바로가기',
        intro: '소개',
        qus: '문의',
      },
      {
        id: '4',
        image: 'https://placeimg.com/64/64/4',
        c_name: 'D채널',
        go: '채널 바로가기',
        intro: '소개',
        qus: '문의',
      },
      {
        id: '5',
        image: 'https://placeimg.com/64/64/5',
        c_name: 'E채널',
        go: '채널 바로가기',
        intro: '소개',
        qus: '문의',
      },
    ];
    setDownload([...data]);
  }, []);

  return <All download={download} />;
};

export default AllPage;