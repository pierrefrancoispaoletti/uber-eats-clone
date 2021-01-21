import CryptoJS from "crypto-js";
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

export const filterFunction = (
  objectName = "",
  optionObject = {},
  items = []
) => {
  return items
    .map((item) => {
      if (
        item?.options !== undefined && 
        Object.entries(item?.options)
          .toString()
          .localeCompare(Object.entries(optionObject).toString()) === 0 &&
        item.status === true &&
        item.name === objectName
      ) {
        return item;
      }

    })
    .find((e) => e !== undefined);
};

export const decryptPhoneNumber = (phoneNumberEncrypt) => {

  if (!phoneNumberEncrypt) {
      return false;
  }

  const bytes = CryptoJS.AES.decrypt(phoneNumberEncrypt, '>~^d5E}bL[y!Rsk,>~^d5E}bL[y!Rsk,');

  return bytes.toString(CryptoJS.enc.Utf8).toString();
};