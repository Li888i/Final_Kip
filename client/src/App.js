import React from "react";
import { Route } from "react-router-dom";

import Header from "./Header/Header";
import Aside from "./Aside/Aside";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import MyPagePage from "./pages/MyPagePage";
import PlayListPage from "./pages/PlayListPage";
import AllPage from "./pages/AllPage";
import MyPage from "./pages/MyPage";
import HelpPage from "./pages/HelpPage";
import KipPage from "./pages/KipPage";
import RankPage from "./pages/RankPage";

import A_chPage from "./pages/A_chPage";
import A_ch_otPage from "./pages/A_ch_otPage";

import A_ch_qusPage from "./pages/A_ch_qusPage";
import A_ch_introPage from "./pages/A_ch_introPage";

import Mypage_inforPage from "./pages/Mypage_inforPage";
import Mypage_memoPage from "./pages/Mypage_memoPage";
import Mypage_goPage from "./pages/Mypage_goPage";
import Join_changePage from "./pages/Join_changePage";

import MyA_chPage from "./pages/MyA_chPage";
import MyA_ch2Page from "./pages/MyA_ch2Page";
import MyA_ch_videoPage from "./pages/MyA_ch_videoPage";

import GuidePage from "./pages/GuidePage";

import styled from "styled-components";

const StyledAppDiv = styled.div`
  width: 86vw;
  height: 150vw;
  padding: 2vw 2vw 0 3vw;
  float: right;
  /* background-color: aqua; */
`;

const App = () => {
  return (
    <div>
      <Header />
      <Route path='/' exact={true} component={MainPage} />
      <StyledAppDiv>
        <Route path='/login' exact={true} component={LoginPage} />
        <Route path='/join' exact={true} component={JoinPage} />
        <Route path='/mypage' exact={true} component={MyPagePage} />
        <Route path='/playlist' exact={true} component={PlayListPage} />
        <Route path='/all' exact={true} component={AllPage} />
        <Route path='/my' exact={true} component={MyPage} />
        <Route path='/help' exact={true} component={HelpPage} />
        <Route path='/kip' exact={true} component={KipPage} />
        <Route path='/rank' exact={true} component={RankPage} />

        <Route path='/A_ch_qus' exact={true} component={A_ch_qusPage} />
        <Route path='/A_ch_intro' exact={true} component={A_ch_introPage} />
        <Route path='/A_ch' exact={true} component={A_chPage} />
        <Route path='/A_ch_ot' exact={true} component={A_ch_otPage} />

        <Route path='/Mypage_infor' exact={true} component={Mypage_inforPage} />
        <Route path='/Mypage_memo' exact={true} component={Mypage_memoPage} />
        <Route path='/Mypage_go' exact={true} component={Mypage_goPage} />
        <Route path='/Join_change' exact={true} component={Join_changePage} />

        <Route path='/MyA_ch' exact={true} component={MyA_chPage} />
        <Route path='/MyA_ch2' exact={true} component={MyA_ch2Page} />
        <Route path='/MyA_ch_video' exact={true} component={MyA_ch_videoPage} />

        <Route path='/guide' exact={true} component={GuidePage} />
      </StyledAppDiv>
      <Aside />
    </div> /*메뉴바 + A채널 바로가기, 소개, 문의 + 마이페이지 개인정보수정, 메모장, 바로가기설정*/
  );
};

export default App;
