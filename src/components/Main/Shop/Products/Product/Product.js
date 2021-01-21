import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Divider, Loader } from "semantic-ui-react";
import ProductModal from "../../../../../containers/ProductModal/ProductModal.container";
import { uniqueKeyID } from "../../../../../utils";

const Product = ({ catId, products,shop }) => {
  const location = useLocation();
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
    if (catId !== undefined) {
      axios
        .get(`/products/category/${catId}`)
        .then((response) => {
          setCurrentProducts(response.data.data);
        })
        .catch((e) => console.log(e))
        .finally(() => setProductLoading(false));
    }
  }, []);

  const handleClick = (id) => {
    setIsOpenProductModal(true);
    setProductId(id);
  };

  return (
    <>
      {location.pathname === "/account/store-management" ? (
        productLoading ? (
          <Loader active={productLoading} />
        ) : (
          //mettre tout ca dans un composant dans le store management
          currentProducts.map((product) => (
            <>
              <Container textAlign="left">
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
                            <div className="product__title">
                              {product?.name}
                            </div>
                          </h4>
                        </div>
                        <div className="product__description">
                          <div>{product?.description}</div>
                        </div>
                        <div className="product__description">
                          {product.options &&
                            Object.keys(product.options).map((option) => (
                              <p>
                                {option}: {product.options[option]}
                              </p>
                            ))}
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
              </Container>
              <Divider hidden />
            </>
          ))
        )
      ) : productLoading ? (
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
        shop={shop}
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
