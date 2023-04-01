import classes from "./Products.module.css";
import ProductsItem from "./ProductsItem";
const Products = () => {
  const DUMMY_PRODUCTS = [
    {
      id: "p1",
      price: 6,
      title: "My First Book",
      brief: "the first book i ever wrote",
    },
    {
      id: "p2",
      price: 5,
      title: "My second Book",
      brief: "the second book i ever wrote",
    },
  ];
  return (
    <section className={classes.contents}>
      <h3> BUY AND ENJOY </h3>
      <ul className={classes.products}>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductsItem
            key={product.id}
            id={product.id}
            price={product.price}
            title={product.title}
            brief={product.brief}
          />
        ))}
      </ul>
    </section>
  );
};
export default Products;
