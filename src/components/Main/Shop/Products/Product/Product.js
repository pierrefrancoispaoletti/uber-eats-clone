import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductModal from "./ProductModal";

const Product = ({ categoryId }) => {
  const [products, setProducts] = useState([]);
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [productId, setProductId] = useState("");

  useEffect(() => {
    axios
      .get(`/products/category/${categoryId}`)
      .then((response) => setProducts(response.data.data));
  }, []);

  const handleClick = (id) => {
    setIsOpenProductModal(true);
    setProductId(id);
  };
  return (
    <>
      {products.map((product) => (
        <div tabIndex={0} onClick={(e) => handleClick(product._id)}>
          <div className="first">
            <div className="second">
              <div className="third">
                <div className="fourth">
                  <h4>
                    <div className="product__title">{product.name}</div>
                  </h4>
                </div>
                <div className="product__description">
                  <div>{product.description}</div>
                </div>
                <div className="product__price">
                  <div>{product.price} €</div>
                </div>
              </div>
              <div className="product__img">
                <picture>
                  <img
                    alt={product.name}
                    src={product.urlImage}
                    aria-hidden="true"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      ))}
      <ProductModal
        isOpenProductModal={isOpenProductModal}
        setIsOpenProductModal={setIsOpenProductModal}
        productId={productId}
        products={products}
      />
    </>
  );
};

export default Product;
