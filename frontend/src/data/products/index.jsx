const fetchProducts = async () => {
  try {
    const response = await fetch('http://localhost:4001/api/books');
    if (!response.ok) {
      throw new Error();
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

const getProducts = async () => {
  return await fetchProducts();
};
export default getProducts;
