
import { List, Typography } from 'antd';
import style from './price.module.css'

const Price = () => {
  const priceList = [
    { _id: 950, priceOne: 0.0, priceTwo: 49.99 },
    { _id: 951, priceOne: 50.0, priceTwo: 99.99 },
    { _id: 952, priceOne: 100.0, priceTwo: 199.99 },
    { _id: 953, priceOne: 200.0, priceTwo: 399.99 },
    { _id: 954, priceOne: 400.0, priceTwo: 599.99 },
    { _id: 955, priceOne: 600.0, priceTwo: 1000.0 },
  ];

  return (
    <div style={{ cursor: 'pointer' }}>
      <h3>Shop by Price</h3>
    
      <List
        dataSource={priceList}
        renderItem={(item) => (
          <List.Item key={item._id} className={style.price}>
            <Typography.Text>
              ${item.priceOne.toFixed(2)} - ${item.priceTwo.toFixed(2)}
            </Typography.Text>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Price;
