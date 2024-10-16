import { useState } from 'react';
import { List, Typography } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import style from './color.module.css'

const Color = () => {
  const [showColors, setShowColors] = useState(true);
  const colors = [
    { _id: 9001, title: 'Green', base: '#22c55e' },
    { _id: 9002, title: 'Gray', base: '#a3a3a3' },
    { _id: 9003, title: 'Red', base: '#dc2626' },
    { _id: 9004, title: 'Yellow', base: '#f59e0b' },
    { _id: 9005, title: 'Blue', base: '#3b82f6' },
  ];

  return (
    <div>
      <div onClick={() => setShowColors(!showColors)} style={{ cursor: 'pointer', display:'flex', justifyContent:'space-between' }} >
        <h3>Shop by Color</h3>
        <CaretDownOutlined />
      </div>
      {showColors && (
        <List
          dataSource={colors}
          renderItem={({ _id, title, base }) => (
            <List.Item key={_id} className={style.color}>
              <span
                style={{
                  background: base,
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  marginRight: '8px',
                }}
              ></span>
              <Typography.Text>{title}</Typography.Text>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default Color;
