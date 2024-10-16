import React, { useState } from 'react';
import { List, Typography } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import style from './brand.module.css'

const Brand = () => {
  const [showBrands, setShowBrands] = useState(true);
  const brands = [
    { _id: 9006, title: 'Apple' },
    { _id: 9007, title: 'Ultron' },
    { _id: 9008, title: 'Unknown' },
    { _id: 9009, title: 'Shoppers Home' },
    { _id: 9010, title: 'Hoichoi' },
  ];

  return (
    <div>
      <div onClick={() => setShowBrands(!showBrands)} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
        <h3>Shop by Brand</h3>
        <CaretDownOutlined />
      </div>
      {showBrands && (
        <List
          dataSource={brands}
          renderItem={({ _id, title }) => (
            <List.Item key={_id} className={style.myBrand}>
              <Typography.Text>{title}</Typography.Text>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default Brand;
