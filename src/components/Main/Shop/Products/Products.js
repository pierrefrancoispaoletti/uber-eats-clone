import React from "react";
import { Button, Container, Placeholder } from "semantic-ui-react";
import { uniqueKeyID } from "../../../../utils";
import Product from "../../../../containers/Product/Product.container";
import { useLocation } from "react-router-dom";

const Products = ({
  categoryLoader,
  categories,
  setCategoryId,
  setOpenEditCategoryModal,
  setCategoryName,
  setOpenDeleteCategoryModal,
}) => {
  const location = useLocation();
  const handleClickOnEditButton = (catId, catName) => {
    setCategoryId(catId);
    setCategoryName(catName);
    setOpenEditCategoryModal(true);
  };
  const handleClickOnDeleteModal = (catId, catName) => {
    setCategoryId(catId);
    setCategoryName(catName);
    setOpenDeleteCategoryModal(true);
  };
  return (
    <div className="products">
      <ul className="products__header">
        {/* la categorie sur laquelle je boucle renvois tous les produits qui correspondent a la categorie courante  */}

        {categories?.map((category) => (
          <li key={uniqueKeyID()}>
            {!categoryLoader ? (
              <Container text>
                <h2>{category?.name}</h2>
                {location.pathname === "/account/store-management" && (
                  <>
                    <Button
                      color="green"
                      circular
                      icon={{ name: "edit" }}
                      onClick={(e) =>
                        handleClickOnEditButton(category?._id, category?.name)
                      }
                    />
                    <Button
                    onClick={(e) => handleClickOnDeleteModal(category?._id, category?.name)}
                      color="red"
                      circular
                      icon={{ name: "trash alternate" }}
                    />
                  </>
                )}
              </Container>
            ) : (
              <Placeholder>
                <Placeholder.Paragraph>
                  <Placeholder.Header length="short" />
                </Placeholder.Paragraph>
              </Placeholder>
            )}
            <ul className="products__list">
              <li>
                <Product key={uniqueKeyID()} catId={category._id} />
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
