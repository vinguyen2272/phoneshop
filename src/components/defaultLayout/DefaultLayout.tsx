
// import Style from './style.module.css'
import Footer from '../foooter/Footer';
import { Layout } from 'antd';
import Header from './header/Header';
import { Content } from 'antd/es/layout/layout';
import { Route, Routes } from "react-router-dom";
import routes from '../../routers/routers';



const DefaultLayout = () => {
  const showContentMenu = (routes: { path: string; component: React.FC }[]) => {
    return routes.map((item, index) => (
      <Route key={index} path={item.path} element={<item.component />} />
    ));
  };


  return (
    <>
    <Layout style={{minHeight:'100vh', background:'#f5f5f3'}}> 
      <Header/>
      
      <Content style={{margin:'9rem auto', width:'95%', background:'rgb(255 255 255);'}}>
      <Routes>
            {showContentMenu(routes)}
    </Routes>
      </Content>
      <Footer/>
    </Layout>
    </>
  )
}

export default DefaultLayout
