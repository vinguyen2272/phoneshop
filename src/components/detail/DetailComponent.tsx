import { Button, Col, Row } from "antd";
import style from './style.module.css'

interface DetailComponentProps {
  id:string;
  pic: string;
  title: string;
  price: number;
  des: string;
  color: string;
  onAddToCart: (product: { id: string; name: string; price: number; color: string; description: string; quantity: number,img:string}) => void;
}
const DetailComponent: React.FC<DetailComponentProps> = ({ pic, title, price, des, color,id, onAddToCart }) => {
  const handleAddToCart = () => {
    const product = { id, name: title, price, color,img:pic, description: des,quantity: 1 };
    onAddToCart(product);
  };

  return (
    <Row gutter={24} className={style.container}>
      <Col className={style.picCol}
      lg={12} sm={24}>
        <img src={pic} alt="img"/>
      </Col>
      <Col lg={12} sm={24} className={style.content}>
        <h2>{title}</h2>
        <h3>${price}</h3>
        <p className={style.myDes}>{des}</p>
        <p className={style.myColor}>
          Color: <span>{color}</span>
        </p>
        <Button color="default" variant="solid"
        className={style.addCart}
         onClick={handleAddToCart}>Add to Cart</Button>
        <p className={style.catelogy}>
          <span className={style.tagName}> Categories:</span> Spring collection, Streetwear, Women Tags: featured SKU: N/A
        </p>
      </Col>
    </Row>
  );
};

export default DetailComponent;
