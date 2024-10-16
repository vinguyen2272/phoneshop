import { useEffect } from "react";
import { getDetail } from "../../redux/slides/DetailSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import DetailComponent from "../../components/detail/DetailComponent";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/slides/CartSlice";



const Detail = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { items, loading, error } = useAppSelector((state) => state.detail);

    useEffect(() => {
        if(id){
            dispatch(getDetail(id))
        }
        
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const handleAddToCart = (product: { id: number; name: string; price: number; color: string; description: string; image: string }) => {
      const productWithQuantity = { ...product, quantity: 1 }; 
      dispatch(addToCart(productWithQuantity));
    };
  return (
    <div>
     {items && <DetailComponent 
     pic={items.img} 
     title={items.productname}
     price = {items.price}
     des = {items.des}
     color= {items.color}
     onAddToCart={handleAddToCart}/>}
    </div>
  )
}

export default Detail
