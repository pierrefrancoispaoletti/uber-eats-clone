import axios from "axios";
import React, { useEffect, useState } from "react";
import { Placeholder } from "semantic-ui-react";
import ProductModal from "../../../../../containers/ProductModal/ProductModal.container";
import { uniqueKeyID } from "../../../../../utils";

const Product = ({
  products,
  categoryId,
  getProducts,
  getSubCategories,
  productLoader,
}) => {
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [productId, setProductId] = useState("");

  const uniqueProducts = Array.from(
    new Set(products.map((product) => product.subCategoryId))
  ).map((id) => {
    return products.find((product) => product.subCategoryId === id);
  });

  useEffect(() => {
    getProducts(categoryId);
    getSubCategories(categoryId);
  }, []);

  // // renvoit un objet contenant 2 tableaux d'options

  // const filterFunction = (
  //   option1 = "",
  //   option2 = "",
  //   arg = "",
  //   arg2 = "",
  //   items
  // ) => {
  //   return items
  //     .map((item) => {
  //       if (option1 && option2) {
  //         if (
  //           item?.options[option1] === arg &&
  //           item?.options[option2] === arg2 &&
  //           item?.status === true
  //         ) {
  //           return item;
  //         }
  //       }
  //       if (option1 && option2 === "") {
  //         if (item.options[option1] === arg && item.status === true) {
  //           return item;
  //         }
  //       }
  //       if (option2 && option1 === "") {
  //         if (item.options[option2] === arg2 && item.status === true) {
  //           return item;
  //         }
  //       } else {
  //         return item;
  //       }
  //     })
  //     .filter((i) => i !== false && i !== undefined);
  // };

  // //console.log(filterFunction("", "", "", "", products));

  const handleClick = (id) => {
    setIsOpenProductModal(true);
    setProductId(id);
  };

  return (
    <>
      {!productLoader ? (
        uniqueProducts.map((product) => (
          <div
            key={uniqueKeyID()}
            tabIndex={0}
            onClick={(e) => handleClick(product._id)}
          >
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
        ))
      ) : (
        <>
          <Placeholder fluid>
            <Placeholder.Header image></Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
          <Placeholder fluid>
            <Placeholder.Header image></Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
          <Placeholder fluid>
            <Placeholder.Header image></Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        </>
      )}

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
