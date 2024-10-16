import { Menu, Button, Drawer, Avatar, ConfigProvider} from 'antd';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import logo from '../../../assets/logo.png'
import { Input } from "antd";

import Style from './style.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MyBadge from '../../badge/MyBadge';



const { Search } = Input;
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [visible, setVisible] = useState(false);

    const onSearch = (value:string) => {
      console.log('Search:', value);
    }
 
    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };   
    
    const menuItems = [
        { key: '1', label: 'Home', path:'/'},
        { key: '5', label: 'Shop', path:'shop'},
        { key: '2', label: 'About' , path:'/about'},
        { key: '3', label: 'Contact', path:'/contact'},
        { key: '4', label: 'Journal' , path:'journal'},
        
      ];
    
      const handleShowMenu = () => {
        setShowMenu(!showMenu);
      };
  return (
  
    <>
    
    <div className={Style.myHeader}>
      <div className={Style.headerTop}>
      <ConfigProvider
  theme={{
    components: {
      Menu: {
        darkItemBg: '#262626',
        darkItemSelectedBg:'#f5926e'
      },
    },
  }}
>
<Menu 
        className={Style.pcMode} 
        theme="dark" 
        mode="horizontal"
        items={menuItems.map(item => ({
          key: item.key,
          label: <Link to={item.path}>{item.label}</Link>,
        }))} />
</ConfigProvider>
      
        <div className={Style.info} onClick={()=>{handleShowMenu()}}> 
        <Avatar icon={<UserOutlined />} className={Style.ava}/>
        <div className={Style.user}>John Doe</div>
        {showMenu && (
          <div className={Style.subMenu}>
            <Link to='/login' className={Style.link}><p>Login</p></Link>
            <Link to='/signup'className={Style.link}><p>Sign up</p></Link>
            
            
          </div>
        )}
        </div>
        
         {/* Responsive Menu Button */}
         <Button className={Style.hambugerMenu} type="text" icon={<MenuOutlined />} onClick={showDrawer} style={{ color: 'white' }} />
      </div>
      <div className={Style.headerBottom}>
        <Link to='/'><img src={logo} alt="logo" width={200} /></Link>
      
     
    <Search placeholder="input search text" onSearch={onSearch} size="large" style={{ width: 500}} />
    <MyBadge/>
      </div>     
      </div>

      {/* Drawer for Mobile View */}
      <Drawer
        title="Menu"
        placement="right"
        closable={false}
        onClose={onClose}
        open={visible}
      >
        <Menu mode="vertical" items={menuItems.map(item => ({
          key: item.key,
          label: <Link to={item.path}>{item.label}</Link>,
        }))} />
      </Drawer>
      

      </> )
      
}

export default Header
