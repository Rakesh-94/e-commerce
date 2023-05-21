import "./App.css";
import Allrouutes from "./Components/Allroutes/Allrouutes";
import CartProvider from "./ConstextApi/CartProvider";
import FormContextProvider from "./ConstextApi/ConstextApi";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <FormContextProvider>
        <Allrouutes />
      </FormContextProvider>
      </CartProvider>
    </div>
  );
}

export default App;
