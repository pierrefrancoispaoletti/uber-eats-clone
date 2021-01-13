import React from "react";
import { Placeholder } from "semantic-ui-react";
import { uniqueKeyID } from "../../../../utils";
import Product from "../../../../containers/Product/Product.container";

const Products = ({ categoryLoader, categories }) => {
  console.log(categoryLoader);
  return (
    <div className="products">
      <ul className="products__header">
        {/* la categorie sur laquelle je boucle renvois tous les produits qui correspondent a la categorie courante  */}
        {categories.map((category) => (
          <li key={uniqueKeyID()}>
            {!categoryLoader ? (
              <h2>{category.name}</h2>
            ) : (
              <Placeholder>
                <Placeholder.Paragraph>
                  <Placeholder.Header length="short" />
                </Placeholder.Paragraph>
              </Placeholder>
            )}
            <ul className="products__list">
              <li>
                <Product key={uniqueKeyID()} categoryId={category._id} />
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
