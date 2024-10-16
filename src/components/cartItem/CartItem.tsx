import React, { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons"; 

import {
 removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
} from "../../redux/slides/CartSlice";
import styles from './item.module.css';
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";


interface Item {
  id: string;
  pic: string;
  name: string;
  price: number;
  quantity: number;
}

interface ItemCardProps {
  item: Item;
}

const CartItem: React.FC<ItemCardProps> = ({ item }) => {
  const [shippingCharge, setShippingCharge] = useState<number>(0);
  const [totalAmt, setTotalAmt] = useState<number>(0);
  const dispatch = useAppDispatch();
  const products = useAppSelector((state: any) => state.cart.items);

  useEffect(() => {
    const price = products.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalAmt(price);
  }, [products]);
  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else {
      setShippingCharge(20);
    }
  }, [totalAmt]);
  console.log(item)
  return (<>
    <Row gutter={[24, 24]}
     className={styles.card}>
      <Col lg={8} sm={12}
       className={styles.itemDetails}>
        <DeleteOutlined style={{fontSize:'1.5rem'}}
          onClick={() => dispatch(removeFromCart({ id: item.id }))}
        />
        <img src={item.pic} alt="Product" />
        <h3>{item.name}</h3>
      </Col>
      
      <Col lg={4} sm={12} 
      className={styles.price}>
        ${item.price}
      </Col>
      <Col lg={6} sm={12} 
      className={styles.quantityControl}>
        <span
          onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
          className={styles.button}
        >
          &ndash;
        </span>
        <p>{item.quantity}</p>
        <span
          onClick={() => dispatch(increaseQuantity({ id: item.id }))}
          className={styles.button}
        >
          +
        </span>
      </Col>
      <Col 
      lg={6} sm={12}
      className={styles.total}>
        <p>${item.quantity * item.price}</p>
      </Col>
    </Row>
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
    </>
  );
};

export default CartItem;
