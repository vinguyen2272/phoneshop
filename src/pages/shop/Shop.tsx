/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getAllProducts } from '../../redux/slides/ProductSlice';
import { Col, Pagination, Row } from 'antd';
import Product from '../../components/products/Product';
import styles from './shop.module.css'
import Price from '../../components/price/Price';
import Category from '../../components/category/Category';
import Color from '../../components/colors/Color';
import Brand from '../../components/brand/Brand';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.products)
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllProducts()); 
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const onShowSizeChange = (current:number, size:number) => {
    console.log(current)
    setCurrent(1); 
    setPageSize(size);
  };

  const onChange = (page:number) => {
    setCurrent(page);
  };

  // Tính toán các mục hiển thị
  const startIndex = (current - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentItems = items.slice(startIndex, endIndex);
  const handleProductClick = (id:any) => {
    navigate(`/shop/${id}`);

  };
  return (<>
  <Row gutter={24}>
    <Col lg={6} sm={0} className={styles.myNav}>
    <Category/>
    <Color/>
    <Brand/>
    <Price/>
    </Col>
    <Col lg={18} sm={24}>
    <div>
      <h2>Products</h2>
       <Row 
      gutter={[24, 24]}>
         {currentItems.map((item) => (
    <Col lg={8} sm={12} xs={24} key={item.id} className={styles.myCarrd}>
      <Product 
      onClick={() => handleProductClick(item.id)} 
        title={item.productname}
        color={item.color}
        price={item.price}
        pic={item.img}
      />
    </Col>
  ))}
      </Row>
    </div>
    
    <Pagination
    className={styles.myPagination}
        total={items.length}
        current={current}
        pageSize={pageSize}
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        onChange={onChange}
        pageSizeOptions={[12,24,36,48]}
      />
    </Col>
  </Row>
  
    </>
  )
}

export default Shop
