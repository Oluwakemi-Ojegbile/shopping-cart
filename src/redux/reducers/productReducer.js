import uuid from "uuid";

const initState = {
  products: [
    {
      id: uuid(),
      image:
        "https://s3.amazonaws.com/sojoee.com/wp-content/uploads/2020/01/FTW-952-1-300x300.jpg",
      name: "Black Shoe-New Carribbean Female Flat Shoe - Wine Red",
      price: "$3000"
    },
    {
      id: uuid(),
      image:
        "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Y/Y/70742_1551267543.jpg",
      name:
        "Lossy Shoe-Shoe Republic LA T-Strap Heeled Sandals With Buttons Design - Pink",
      price: "$4200"
    },
    {
      id: uuid(),
      image:
        "https://www.decoweddings.com/wp-content/uploads/sapphire-blue-art-deco-heels-e1441577428358.jpg",
      name: "Sapphire Shoe-Women Ballerinas With Tassel - Blue",
      price: "$4000"
    },
    {
      id: uuid(),
      image:
        "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/82/392634/1.jpg?9674",
      name: "New Carribbean Female Flat Shoe - Blue- Shoe-Unique Ladies",
      price: "$3000"
    },
    {
      id: uuid(),
      image: "https://youqlo.com/wp-content/uploads/2018/05/27588-0ymdfs.jpg",
      name: "Black Shoe-Unique Ladies Court Shoe-Carribbean Female Flat Shoe.",
      price: "$2500"
    },
    {
      id: uuid(),
      image:
        "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/32/138454/1.jpg?7666",
      name:
        "Red Shoe-JGeTters Skyros Multi Metallic Slide flat - Multicolour",
      price: "$3500"
    }
  ]
};

const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    // case CartTypes.ADD_TO_CART:
    //   return {
    //     ...state,
    //     products: [...state.products,payload]
    //   }
    default:
      return state;
  }
};

export default ProductsReducer;
