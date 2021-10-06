import React from 'react';
import './Navigation.css';  
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <header>
                <div class="Nav highlightTextIn">
                    <Link to="/all">전체 채널</Link>
                    <Link to="/my">My 클래스</Link>
                    <Link to="/help">Help 클래스</Link>
                    <Link to="/kip">KIP 챌린지</Link>
                    <Link to="/rank">영상 랭킹</Link>
                </div>
            </header>
        </div>
    );
};

export default Navigation;