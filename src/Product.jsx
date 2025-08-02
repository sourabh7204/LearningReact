import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrices = ["12,999", "11,499", "1,599", "499"];
  let newPrices = ["8,999", "9,999", "899", "279"];
  let description = [
    ["8,00 DPI", "5 Programmable buttons"],
    ["intuitive surface", "desigend for iPad Pro"],
    ["desigend for iPad Pro", "intutive surface"],
    ["Wireless", "optical orientation"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
