/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge} from "antd";
import {ShoppingCartOutlined}from '@ant-design/icons';
import { useAppSelector } from "../../redux/store";
import { Link } from "react-router-dom";

const MyBadge = () => {
    const itemsInCart = useAppSelector((state: any) => state.cart.items);
    const count = itemsInCart.reduce((total, item) => total + item.quantity, 0);
  return (
   <>
   <Link to='/cart'>
   <Badge count={count}>
    <ShoppingCartOutlined shape="square" style={{fontSize:30, color:'#fff'}}/>
    </Badge>
    </Link>
   </>
  )
}

export default MyBadge
