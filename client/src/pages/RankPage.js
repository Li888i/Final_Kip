import React, { useState, useEffect } from 'react';
import Rank from '../Components/rank/Rank';

const RankPage = () => {
    const [download, setDownload] = useState([]);

    useEffect(() => {
        let data = [
            {
                id: '1',
                image: 'https://placeimg.com/64/64/1',
                name: '[국어] 된소리 바로 알기!',
                good: '84',
                soso: '42',
                bad: '3',
            },
            {
                id: '2',
                image: 'https://placeimg.com/64/64/2',
                name: '[수학] 탄젠트란?',
                good: '64',
                soso: '28',
                bad: '6',
            },
            {
                id: '3',
                image: 'https://placeimg.com/64/64/3',
                name: '[영어] 토익 900점 도전 - (3)',
                good: '57',
                soso: '30',
                bad: '9',
            },
            {
                id: '4',
                image: 'https://placeimg.com/64/64/4',
                name: '[과학] 태양 주위를 도는 행성들~',
                good: '29',
                soso: '15',
                bad: '1',
            },
            {
                id: '5',
                image: 'https://placeimg.com/64/64/5',
                name: "[역사] 아름다운 이 땅에 금수강산에 '단군' 할아버지가! ",
                good: '7',
                soso: '3',
                bad: '0',
            },
        ];
        setDownload([...data]);
    }, []);

    return <Rank download={download} />;
};

export default RankPage;
