import slugify from "slugify"

export const slugifyUrl = (shopName = '') => {

    return slugify(shopName, {
        replacement: "-",
        lower: true
    })
}

export const uniqueKeyID = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };