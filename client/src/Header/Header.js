import React from "react";
import "./Header.css";
import logo from "../img/logo.png";
import Nav from "./Nav/Navigation";
import {
  faCartPlus,
  faUserEdit,
  faQuestionCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  btnBox: {
    display: 'flex',
    flex: '1',
    justifyContent: 'flex-end',
  }
}));


const Header = () => {
  /*마이페이지 메뉴바*/
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  

  return (
    <div className='app-header'>

      <Box className={classes.btnBox}>
        <Link to='/join'><Button>회원가입</Button></Link>
        <Link to='/login'><Button>로그인</Button></Link>
      </Box>

      <div className='MOM'>
        <div className='BABY1'>
          <Link to='/'>
            <img className='Logo' src={logo} alt='logo' />
          </Link>
        </div>
        <div>
          <input
            className='s-bar'
            type='text'
            placeholder='      Search'
          ></input>
        </div>
        <FontAwesomeIcon className='s' icon={faSearch} />
        <div className='i-mom'>
          {/* <Link to="/mypage"> */}
          <div className='i-baby'>
            <FontAwesomeIcon className='i-icon' icon={faUserEdit} />
            <div>
              <p className='i-text'
                aria-controls='simple-menu'
                aria-haspopup='true'
                onClick={handleClick}
              >
                마이페이지
              </p>
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <a href='http://localhost:3000/mypage_infor'>개인정보수정</a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a href='http://localhost:3000/mypage_memo'>메모장</a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a href='http://localhost:3000/mypage_go'>바로가기 설정</a>
                </MenuItem>
              </Menu>
            </div>
          </div>
          {/* </Link> */}

          <div className='i-baby'>
            <Link to='/playlist'>
              <FontAwesomeIcon className='i-icon' icon={faCartPlus} />
              <p className='i-text'>플레이리스트</p>
            </Link>
          </div>
          <div className='i-baby'>
            <Link to='/guide'>
              <FontAwesomeIcon className='i-icon' icon={faQuestionCircle} />
              <p className='i-text'>가이드</p>
            </Link>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
