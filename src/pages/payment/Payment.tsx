/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from 'react-router-dom';
import { Button, Typography,  Card, Col, Row } from 'antd';

import ItemCard from '../../assets/emptyCart.png';
import styles from './Cart.module.css'; // Import the CSS module
import { useAppSelector } from '../../redux/store';
import CartItem from '../../components/cartItem/CartItem';

const { Title, Text } = Typography;

const Payment = () => {
  
  const products = useAppSelector((state: any) => state.cart.items);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cart</h2>
      
      {products.length > 0 ? (
        <>
        <Row gutter={[24, 24]} style={{background:'rgb(245 247 247);'}}>
      <Col lg={8} sm={12}><h2>Product</h2></Col>
      <Col lg={4} sm={12} style={{textAlign:"center"}}><h2>Price</h2></Col>
      <Col lg={6} sm={12} style={{textAlign:"center"}}><h2>Quantity</h2></Col>
      <Col lg={6} sm={12} style={{textAlign:"center"}}><h2>Sub Total</h2></Col>
      </Row>
        <div>
        {products.map((product: any) => (
          <CartItem
            key={product.id} 
            item={product} 
          />
        ))}
      </div>
     </>
      ) : (
        <div className={styles.emptyCartContainer}>
          <img className={styles.emptyCartImage} src={ItemCard} alt="Empty Cart" />
          <Card className={styles.emptyCartCard}>
            <Title level={4} className={styles.emptyCartTitle}>Your Cart feels lonely.</Title>
            <Text className={styles.emptyCartMessage}>
              Your Shopping cart lives to serve. Give it purpose - fill it with books, electronics, videos, etc. and make it happy.
            </Text> <br />
            <Link to="/shop">
              <Button color="default" variant="solid" className={styles.continueShoppingButton}>Continue Shopping</Button>
            </Link>
          </Card>
        </div>
      )}

    </div>
  );
};

export default Payment;
