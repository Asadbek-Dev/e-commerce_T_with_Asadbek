import React, { useContext } from "react";
import S from "../style/pages/product";
import { RiStarSFill } from "react-icons/ri";
import productImage from "../assets/img/main/productImage.png";
import { Link } from "react-router-dom";
import { Context } from "../store/context";

export default function Product({ data }) {
  const [context, setContext] = useContext(Context);
  const { title, img, price, description, weight, rate } = data;
  console.log(context, "length");
  return (
    <S.Product>
      <div className="item">
        <div className="image">
          <img src={img ? img : productImage} alt="product banner" />
        </div>
        <h4 style={{ textTransform: "capitalize" }}>{title}</h4>
        <p>{description}</p>
        <span>{new Array(rate).fill(<RiStarSFill />)}</span>
        <div className="item__price">
          <h4>{price} ₽/кг</h4>
          <p>За{weight}гр.</p>
        </div>
        <Link to='/content'
          onClick={() => setContext([...context, data])}
          className="button"

        >
          В корзину
        </Link>
      </div>
    </S.Product>
  );
}
