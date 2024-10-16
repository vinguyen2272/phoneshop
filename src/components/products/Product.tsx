/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './product.module.css'
import {AliyunOutlined, ShoppingCartOutlined, ExpandOutlined, HeartOutlined }from '@ant-design/icons';
import { Card} from 'antd';
import './product.css'


const Product = ({ onClick, id, pic, title, price, color }: any) => {
  return (
    <>
      <Card
        className={styles.container}
        onClick={onClick}
        key={id}
        hoverable
        style={{ width: '100%' }}
        cover={<img alt="example" src={pic} />}
      >
        <div className={styles.overlay}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Compare
              <AliyunOutlined style={{ fontSize: '1.5rem' }} />
            </li>
            <li className={styles.listItem}>
              Add to Cart
              <ShoppingCartOutlined style={{ fontSize: '1.5rem' }} />
            </li>
            <li className={styles.listItem}>
              View Details
              <ExpandOutlined style={{ fontSize: '1.5rem' }} />
            </li>
            <li className={styles.listItem}>
              Add to Wish List
              <HeartOutlined style={{ fontSize: '1.5rem' }} />
            </li>
          </ul>
        </div>
        <div className={styles.metaCard}>
          <div className={styles.myTitle}>
            <h4>{title}</h4>
            <h4>{price}</h4>
          </div>
          <p>{color}</p>
        </div>
      </Card>
    </>
  );
};

export default Product;
