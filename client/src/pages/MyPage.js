import React, { useState, useEffect } from 'react';
import My from '../Components/my/My';

const MyPage = () => {
  const [download, setDownload] = useState([]);

  useEffect(() => {
    let data = [
      {
        id: '1',
        image: 'https://placeimg.com/64/64/1',
        c_name: <a href="http://localhost:3000/MyA_ch">A채널</a>,
        del: '삭제',
      },
      {
        id: '2',
        image: 'https://placeimg.com/64/64/2',
        c_name: 'B채널',
        del: '삭제',
      },
      {
        id: '3',
        image: 'https://placeimg.com/64/64/3',
        c_name: 'C채널',
        del: '삭제',
      },
      {
        id: '4',
        image: 'https://placeimg.com/64/64/4',
        c_name: 'D채널',
        del: '삭제',
      },
      {
        id: '5',
        image: 'https://placeimg.com/64/64/5',
        c_name: 'E채널',
        del: '삭제',
      },
    ];
    setDownload([...data]);
  }, []);

  return <My download={download} />;
};

export default MyPage;
