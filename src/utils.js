import slugify from "slugify"

export const slugifyUrl = (shopName) => {

    return slugify(shopName, {
        replacement: "-",
        lower: true
    })
}