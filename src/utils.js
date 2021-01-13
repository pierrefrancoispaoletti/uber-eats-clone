import slugify from "slugify";

export const slugifyUrl = (shopName = "") => {
  return slugify(shopName, {
    replacement: "-",
    lower: true,
  });
};

export const uniqueKeyID = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

export const getCartTotal = (cart) =>
  cart?.reduce(
    (amount, item) => Number(item.unitPrice * item.quantity) + amount,
    0
  );

export const filterFunction = (objectName, optionObject = {}, items = []) => {
  return items
    .map((item) => {
      if (
        Object.entries(item.options)
          .toString()
          .localeCompare(Object.entries(optionObject).toString()) === 0 &&
        item.status === true && item.name === objectName
      ) {
        return item;
      }
    })
    .find((e) => e !== undefined);
};
