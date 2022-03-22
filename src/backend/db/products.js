import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: 100,
    title: "Lebron 19",
    brandName: "Nike",
    rating: 4,
    inStock: true,
    price: 17595,
    gender: "Men",
    inWishlist: false,
    unitsLeft: 100,
    isFeatured: true,
    categoryName: "Shoes",
    imgUrl:
      "https://res.cloudinary.com/dkt7yy5ta/image/upload/v1647852090/lebron_fymli2.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam doloribus illo modi! Laboriosam aliquam perferendis cumque nemo corporis vel!",
  },
  {
    _id: 101,
    title: "Air Max Alpha ",
    brandName: "Nike",
    rating: 4,
    inStock: true,
    price: 17595,
    inWishlist: false,
    unitsLeft: 100,
    gender: "Men",
    isFeatured: false,
    categoryName: "Shoes",
    imgUrl:
      "https://res.cloudinary.com/dkt7yy5ta/image/upload/v1647852627/products/Mens/AirMax_mtuikj.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam doloribus illo modi! Laboriosam aliquam perferendis cumque nemo corporis vel!",
  },
  {
    _id: 103,
    title: "Jordan Why Not",
    brandName: "Adidas",
    rating: 4,
    inStock: true,
    price: 17595,
    inWishlist: false,
    unitsLeft: 100,
    gender: "Men",
    isFeatured: false,
    categoryName: "Shoes",
    imgUrl:
      "https://res.cloudinary.com/dkt7yy5ta/image/upload/v1647852628/products/Mens/JordanWhyNot_-_Copy_kks5ou.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam doloribus illo modi! Laboriosam aliquam perferendis cumque nemo corporis vel!",
  },
  {
    _id: 104,
    title: "Air Max Alpha ",
    brandName: "Adidas",
    rating: 4,
    inStock: true,
    price: 47595,
    inWishlist: false,
    unitsLeft: 100,
    gender: "Men",
    isFeatured: true,
    categoryName: "Shoes",
    imgUrl:
      "https://res.cloudinary.com/dkt7yy5ta/image/upload/v1647852627/products/Mens/AirMax_mtuikj.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam doloribus illo modi! Laboriosam aliquam perferendis cumque nemo corporis vel!",
  },
  {
    _id: 105,
    title: "Metcon",
    brandName: "Puma",
    rating: 4,
    inStock: true,
    price: 37595,
    inWishlist: false,
    unitsLeft: 100,
    gender: "Men",
    isFeatured: false,
    categoryName: "Shoes",
    imgUrl:
      "https://res.cloudinary.com/dkt7yy5ta/image/upload/v1647852633/products/Mens/Metcon_evnuep.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam doloribus illo modi! Laboriosam aliquam perferendis cumque nemo corporis vel!",
  },
  {
    _id: 106,
    title: "Zoom Air",
    brandName: "Adidas",
    rating: 4,
    inStock: true,
    price: 17595,
    inWishlist: false,
    unitsLeft: 100,
    gender: "Women",
    isFeatured: false,
    categoryName: "Shoes",
    imgUrl:
      "https://res.cloudinary.com/dkt7yy5ta/image/upload/v1647852637/products/Mens/ZoomAir_qhtwm8.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam doloribus illo modi! Laboriosam aliquam perferendis cumque nemo corporis vel!",
  },
  {
    _id: 107,
    title: "Vapor Max",
    brandName: "Puma",
    rating: 4,
    inStock: true,
    price: 67595,
    inWishlist: false,
    unitsLeft: 100,
    gender: "Women",
    isFeatured: false,
    categoryName: "Shoes",
    imgUrl:
      "https://res.cloudinary.com/dkt7yy5ta/image/upload/v1647852636/products/Mens/VaporMax_hd8s7r.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam doloribus illo modi! Laboriosam aliquam perferendis cumque nemo corporis vel!",
  },
  {
    _id: 108,
    title: "Retro",
    brandName: "Puma",
    rating: 4,
    inStock: true,
    price: 17005,
    inWishlist: false,
    unitsLeft: 100,
    gender: "Women",
    isFeatured: true,
    categoryName: "Shoes",
    imgUrl:
      "https://res.cloudinary.com/dkt7yy5ta/image/upload/v1647852634/products/Mens/Retro_zeew0h.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam doloribus illo modi! Laboriosam aliquam perferendis cumque nemo corporis vel!",
  },
  {
    _id: 109,
    title: "Vapour",
    brandName: "Nike",
    rating: 4,
    inStock: true,
    price: 57595,
    inWishlist: false,
    unitsLeft: 100,
    gender: "Kids",
    isFeatured: true,
    categoryName: "Shoes",
    imgUrl:
      "https://res.cloudinary.com/dkt7yy5ta/image/upload/v1647852636/products/Mens/VaporMax_hd8s7r.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam doloribus illo modi! Laboriosam aliquam perferendis cumque nemo corporis vel!",
  },
  {
    _id: 110,
    title: "Air Max Alpha ",
    brandName: "Nike",
    rating: 4,
    inStock: true,
    price: 17595,
    inWishlist: false,
    unitsLeft: 100,
    gender: "Men",
    isFeatured: false,
    categoryName: "Shoes",
    imgUrl:
      "https://res.cloudinary.com/dkt7yy5ta/image/upload/v1647852627/products/Mens/AirMax_mtuikj.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam doloribus illo modi! Laboriosam aliquam perferendis cumque nemo corporis vel!",
  },
];
