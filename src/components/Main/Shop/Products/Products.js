import React from "react";
import { Button, Container, Divider, Placeholder } from "semantic-ui-react";
import { uniqueKeyID } from "../../../../utils";
import Product from "../../../../containers/Product/Product.container";
import { useLocation } from "react-router-dom";

const Products = ({
  categoryLoader,
  categories,
  setCategoryId,
  setCategoryName,
  setOpenAddProductModal,
  setOpenAddCategoryModal,
  setOpenEditCategoryModal,
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
      {location.pathname === "/account/store-management" && (
        <>
          <Divider clearing />
          <Button
            color="blue"
            icon="plus"
            content="Ajouter une catégorie"
            onClick={(e) => setOpenAddCategoryModal(true)}
          />
          <Divider clearing />
        </>
      )}
      <ul className="products__header">
        {/* la categorie sur laquelle je boucle renvois tous les produits qui correspondent a la categorie courante  */}

        {categories?.map((category) => (
          <li key={uniqueKeyID()}>
            {!categoryLoader ? (
              <>
                <h2>{category?.name}</h2>
                {location.pathname === "/account/store-management" && (
                  <>
                    <Button
                      color="green"
                      content={`Editer ${category.name}`}
                      compact
                      icon="edit"
                      onClick={(e) =>
                        handleClickOnEditButton(category?._id, category?.name)
                      }
                    />
                    <Button
                      onClick={(e) =>
                        handleClickOnDeleteModal(category?._id, category?.name)
                      }
                      color="red"
                      compact
                      content={`Supprimer ${category.name}`}
                      icon="trash alternate"
                    />
                    <Divider hidden fitted />
                    <Button
                      color="black"
                      compact
                      icon="plus"
                      content={`Ajouter un produit dans ${category.name}`}
                      onClick={e => setOpenAddProductModal(true)}                      
                    />
                    <Divider hidden/>
                  </>
                )}
              </>
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
