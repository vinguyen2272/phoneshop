
import { List, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import style from './category.module.css'

const Category = () => {
  const items = [
    { _id: 990, title: 'New Arrivals', icons: true },
    { _id: 991, title: 'Gadgets' },
    { _id: 992, title: 'Accessories', icons: true },
    { _id: 993, title: 'Electronics' },
    { _id: 994, title: 'Others' },
  ];

  return (
    <div style={{ cursor: 'pointer' }}>
      <h3>Shop by Category</h3>
      <List
        dataSource={items}
        renderItem={({ _id, title, icons }) => (
          <List.Item key={_id} className={style.myCategory}>
            <Typography.Text>{title}</Typography.Text>
            {icons && <PlusOutlined style={{ fontSize: '14px', color: '#767676' }} />}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Category;
