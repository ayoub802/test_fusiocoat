import qs from "query-string";

interface Category {
    id: string;
    name: string;
  };

  interface Image {
    id: string;
    url: string;
  }
interface Product {
    id: string;
    category: Category;
    name: string;
    price: string;
    priceBig: string,
    isFeatured: boolean;
    images: Image[]
  };
  
//   interface Query {
//     categoryId?: string;
//   }
const URL=`http://localhost:3000/api/product/similair`;

const getSmilairProducts = async (id: string): Promise<Product[]> => {

  const res = await fetch(`${URL}/${id}?limit=4`);
  

  return res.json();
};

export default getSmilairProducts;