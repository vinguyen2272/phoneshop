/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons"; 

import {
 removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/slides/CartSlice";
import styles from './item.module.css';
import { useAppDispatch} from "../../redux/store";
import { Col, Row } from "antd";


interface Item {
  id: string;
  img: string;
  name: string;
  price: number;
  quantity: number;
}

interface ItemCardProps {
  item: Item;
}

const CartItem: React.FC<ItemCardProps> = ({ item }) => {
  const dispatch = useAppDispatch();

 
  return (<>
    <Row gutter={[24, 24]}
     className={styles.card}>
      <Col lg={8} sm={12}
       className={styles.itemDetails}>
        <DeleteOutlined style={{fontSize:'1.5rem'}}
          onClick={() => dispatch(removeFromCart({ id: item.id }))}
        />
        <img src={item.img} alt="Product" />
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
    </>
  );
};

export default CartItem;
