/* eslint-disable @typescript-eslint/no-explicit-any */
import {  Button, Carousel, Col, Row} from "antd";
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Style from './home.module.css'
import b1 from '../../assets/banner/b1.png'
import b2 from '../../assets/banner/b2.png'
import b3 from '../../assets/banner/b3.png'
import Product from "../../components/products/Product";
import pic1 from'../../assets/banner/bannerQc.jpg'
import pic2 from'../../assets/product/qc2.png'
import pic3 from'../../assets/product/qc3.png'
import pic4 from'../../assets/product/qc4.png'

import { useEffect, useRef } from "react";
import { getAllProducts } from "../../redux/slides/ProductSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";




const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.products);
  const carouselRef = useRef(null);

  useEffect(() => {
    dispatch(getAllProducts()); 
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  
  const chunkSize = 4;
  const chunks = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    chunks.push(items.slice(i, i + chunkSize));
  }
  
  const handleProductClick = (id:any) => {
    navigate(`/shop/${id}`);

  };
  return (
   <>
  
  
  {/* Carousel hình banner */}
<Carousel dotPosition="bottom" autoplay={true} style={{marginBottom:'2rem'}}>
      <div className={Style.content}>
        <img src={b1} alt="" />
      </div>
      <div className={Style.content}>
      <img src={b2} alt="" />
      </div>
      <div className={Style.content}>
      <img src={b3} alt="" />
      </div>
    </Carousel>

    {/* Quảng cáo */}
    <Row gutter={24}>
      <Col lg={12} sm={24}>
      <img src={pic4} alt="QC" width='100%'style={{height:'34rem'}}/>
      </Col>
      <Col lg={12} sm={24}>
      <Row gutter={[0, 24]}>
        <Col span={24}>
        <img src={pic2} alt="QC" width='100%'style={{height:'16rem'}}/>
        </Col>
        <Col span={24}>
      <img src={pic3} alt="QC" width='100%' style={{height:'16rem'}}/>
        </Col>
      </Row>
      </Col>
    </Row>

    {/* Carousel sản phẩm mới */}
    <h2>New Arrivals</h2>
    <Carousel infinite = {true} autoplay={true} ref={carouselRef} dots={false}>
      {chunks.map((chunk, index) => (
        <div key={index}>
          <Row gutter={24}>
            {chunk.map(product => (
              <Col lg={6} sm={12} xs={24} key={product.id}>
                <Product 
                 onClick={() => handleProductClick(product.id)} 
                 title={product.productname}
                 color={product.color}
                 pic={product.img}
                 price={product.price}
                 id={product.id}
               />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Carousel>
    <div className={Style.buttonContainer}>
    <Button shape="circle" icon={<LeftOutlined />}  onClick={()=>{carouselRef.current.prev()}}  />
    <Button shape="circle" icon={<RightOutlined />}  onClick={()=>{carouselRef.current.next()}}  />
    
    </div>
    
    {/* Danh sách sản phẩm bán chạy hiển thị 4sp */}
    <h2>Our Bestsellers</h2>
    <Row className={Style.bestsellers}
      gutter={24}>
       {items.slice(16, 20).map((item) => (
    <Col lg={6} sm={12} xs={24} key={item.id}>
      <Product 
      onClick={() => handleProductClick(item.id)} 
        title={item.productname}
        color={item.color}
        pic={item.img}
        price={item.price}
      />
    </Col>
  ))}
        
      </Row>

  {/* Quảng cáo 2 */}
    <img src={pic1} alt="qc" className={Style.middle}/>

   {/* Danh sách sản phẩm giảm giá hiển thị 4sp */}
  <h2>Special Offers</h2>
  <Row className={Style.bestsellers}
      gutter={24}>
        {items.slice(44, 48).map((item) => (
    <Col lg={6} sm={12} xs={24} key={item.id}>
      <Product 
      onClick={() => handleProductClick(item.id)} 
        title={item.productname}
        color={item.color}
        pic={item.img}
        price={item.price}
      />
    </Col>
  ))}
      </Row>
   </>
  )
}

export default Home
