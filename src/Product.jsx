import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrices = ["12,999", "11,499", "1,599", "499"];
  let newPrices = ["8,999", "9,999", "899", "279"];
  let description = [
    "8,00 DPI",
    "intuitive surface",
    "desigend for iPad Pro",
    "Wireless",
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
