// Styling
import { GlobalStyle, ThemeButton } from "./styles";

import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

// Data
import _products from "./products";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light")
  ;

  const [products, setProducts] = useState(_products);
  const deleteProduct = (productID) => {
    const filterProducts = _products.filter((product) => product.id !== productID);
    setProducts(filterProducts);
  };

  const [product, setProduct] = useState(null);
  const setView =
    product === null?
    (<ProductList products={products} setProduct={setProduct} deleteProduct={deleteProduct}/>) : 
    (<ProductDetail product={product} setProduct={setProduct} deleteProduct={deleteProduct}/>)
  ;

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle/>
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <Home/>
      {setView}
    </ThemeProvider>
  );
}

export default App;
