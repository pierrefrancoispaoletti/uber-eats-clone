import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loader, Placeholder } from "semantic-ui-react";
import ProductModal from "../../../../../containers/ProductModal/ProductModal.container";
import { uniqueKeyID } from "../../../../../utils";

const Product = ({ catId }) => {
  const [productLoading, setProductLoading] = useState(false);
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [productId, setProductId] = useState("");
  const [currentProducts, setCurrentProducts] = useState([]);

  const uniqueProducts = Array.from(
    new Set(currentProducts.map((product) => product?.subCategoryId))
  ).map((id) => {
    return currentProducts.find((product) => product?.subCategoryId === id);
  });

  useEffect(() => {
    setProductLoading(true);
    axios
      .get(`/products/category/${catId}`)
      .then((response) => {
        setCurrentProducts(response.data.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setProductLoading(false));
  }, []);

  const handleClick = (id) => {
    setIsOpenProductModal(true);
    setProductId(id);
  };

  return (
    <>
      {productLoading ? (
        <Loader active={productLoading} />
      ) : (
        uniqueProducts.map((product) => (
          <div
            key={uniqueKeyID()}
            tabIndex={0}
            onClick={(e) => handleClick(product?._id)}
          >
            <div className="first">
              <div className="second">
                <div className="third">
                  <div className="fourth">
                    <h4>
                      <div className="product__title">{product?.name}</div>
                    </h4>
                  </div>
                  <div className="product__description">
                    <div>{product?.description}</div>
                  </div>
                  <div className="product__price">
                    <div>{product?.price} €</div>
                  </div>
                </div>
                <div className="product__img">
                  <picture>
                    <img
                      alt={product?.name}
                      src={product?.urlImage}
                      aria-hidden="true"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      <ProductModal
        isOpenProductModal={isOpenProductModal}
        setIsOpenProductModal={setIsOpenProductModal}
        productId={productId}
        products={currentProducts}
        catId={catId}
      />
    </>
  );
};

export default Product;
