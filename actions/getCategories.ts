interface Category {
    id: string;
    name: string;
};

const URL=`http://localhost:3000/api/stores`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getCategories;