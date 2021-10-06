import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TungstenIcon from '@mui/icons-material/Tungsten';
import LooksIcon from '@mui/icons-material/Looks';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LightModeIcon from '@mui/icons-material/LightMode';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import './Aside.css';

function Aside() {
  const [state, setState] = React.useState({
    책갈피: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['많이 들은 영상 1', '많이 들은 영상 2', '많이 들은 영상 3', '많이 들은 영상 4'].map((text, index) => (
          <ListItem button key={text}>
            <ArrowForwardIosIcon />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['내가 설정한 영상 1', '내가 설정한 영상 2', '내가 설정한 영상 3'].map((text, index) => (
          <ListItem button key={text}>
            <ArrowForwardIosIcon />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <FontAwesomeIcon icon={faBookOpen} color="#9bcee5" />
      {['책갈피'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      {/* <div><FilterDramaIcon className='a' /></div>
      <div><AccessAlarmIcon className='b' /></div>
      <div><EventNoteIcon className='c' /></div> */}
      {/* <div className='abc'><a>온라인 서점 사이트</a></div> */}
      {/* <div><img className='a' src='https://i.ibb.co/31FgDgF/24.png'/></div>
      <div><img className='d' src='https://i.ibb.co/tJqs6hT/image.png'/></div>
      <div><img className='c' src='https://i.ibb.co/JF3VcDF/image.png'/></div> */}
    </div>
  );
}

export default Aside;

// import React from 'react';
// import './Aside.css';
// import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const Aside = () => {
//   return (
//     <div className="app-aside">
//       <p className="b-icon">
//         <FontAwesomeIcon icon={faBookOpen} color="#9bcee5" />
//         책갈피<FontAwesomeIcon icon={faBookOpen} size="1x" color="#9bcee5" />
//       </p>
//       <div className="rgyPostIt">
//         <a href="http://localhost:3000/MyA_ch">채널 A</a>
//       </div>
//       <div className="rgyPostIt">채널 B</div>
//       <div className="rgyPostIt">채널 C</div>
//       <div className="rgyPostIt">채널 D</div>
//     </div>
//   );
// };

// export default Aside;

// import React, { useState } from 'react';
// import { Button } from '@material-ui/core';
// import MenuIcon from '@mui/icons-material/Menu';
// import './Aside.css';  
// import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const Aside = () => {

// const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정

// const toggleMenu = () => {
//       setMenu(isOpen => !isOpen); // on,off 개념 boolean
//   }

//   return(
//       <div className="header">
//               <ul className="header-wrapper">
//                   <li><MenuIcon onClick={()=>toggleMenu()}></MenuIcon></li>                    
//                   <li><FontAwesomeIcon icon={faBookOpen} color="#9bcee5" /></li>
//                   <li>
//                       <Button
//                           variant="contained"
//                           color="primary"
//                           size="small"
//                         //   style={buttonStyles}
//                       >
//                           책갈피
//                       </Button>
//                   </li>
//               </ul>
//               <ul className={isOpen ? "show-menu" : "hide-menu"}>
//                       <li >채널 A</li>
//                       <li >채널 B</li>
//                       <li >채널 C</li>
//                       <li >채널 D</li>
//               </ul>
//       </div>
//   )
// }

// export default Aside
