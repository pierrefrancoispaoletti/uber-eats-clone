import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

const AdminPanel = ({ setOpenAddCategoryModal, openAddCategoryModal }) => {
  return (
    <Menu>
      <Dropdown item text="Catégories">
        <Dropdown.Menu>
          <Dropdown.Item active={openAddCategoryModal} onClick={(e) => setOpenAddCategoryModal(true)}>
            Ajouter une catégorie
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item text="Produits">
        <Dropdown.Menu>
          <Dropdown.Item >
            Ajouter un produit
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};

export default AdminPanel;
