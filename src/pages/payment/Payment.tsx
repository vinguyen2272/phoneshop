/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from 'react-router-dom';
import { Button, Typography,  Card, Col, Row } from 'antd';

import ItemCard from '../../assets/emptyCart.png';
import styles from './Cart.module.css'; // Import the CSS module
import { useAppDispatch, useAppSelector } from '../../redux/store';
import CartItem from '../../components/cartItem/CartItem';
import { useEffect, useState } from 'react';
import { clearCart } from '../../redux/slides/CartSlice';

const { Title, Text } = Typography;

const Payment = () => {
  const [shippingCharge, setShippingCharge] = useState<number>(0);
  const [totalAmt, setTotalAmt] = useState<number>(0);
  const dispatch = useAppDispatch();
  const products = useAppSelector((state: any) => state.cart.items);

  useEffect(() => {
    const price = products.reduce((acc:any, item:any) => acc + item.price * item.quantity, 0);
    setTotalAmt(price);
  }, [products]);
  useEffect(() => {
    if (totalAmt <= 1000) {
      setShippingCharge(30);
    } else if (totalAmt <= 2000) {
      setShippingCharge(25);
    } else {
      setShippingCharge(20);
    }
  }, [totalAmt]);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cart</h2>
      
      {products.length > 0 ? (
        <>
        <Row gutter={[24, 24]}>
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
        <Button
      onClick={()=>dispatch(clearCart())}
       type="primary" danger className={styles.myButton}>
      RESET CART
    </Button>
        <Row className={styles.cartTotal}>
      <Col lg={16} sm={0}></Col>
      <Col lg={8} sm={24}>
      <h2>Cart Total</h2>
      <p>Subtotal<span>${totalAmt}</span></p>
      <p>Shipping Charge<span>${shippingCharge}</span></p>
      <p>Total<span>${totalAmt + shippingCharge}</span></p>
      <Link to="/getaway">
      <Button color="default" variant="solid">Procced to Checkout</Button>
     </Link>
      </Col>
      
      </Row>
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
