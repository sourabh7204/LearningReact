function Price({ oldPrice, newPrice }) {
  let oldStyles = {
    textDecorationLine: "line-through",
  };
  let newStyles = {
    fontWeight: "bold",
  };
  let Styles = {
    backgroundColor: "#e0c367",
    height: "30px",
    borderBottomLeftRadius: "25px",
    borderBottomRightRadius: "25px",
    widhth: "200px",
  };
  return (
    <div style={Styles}>
      <span style={oldStyles}>{oldPrice}</span>
      &nbsp; &nbsp; &nbsp;
      <span style={newStyles}>{newPrice}</span>
    </div>
  );
}

export default Price;
