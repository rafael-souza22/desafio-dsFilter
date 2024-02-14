import "./index.css";
import Header from "./components/Header";
import ListingBody from "./components/ListingBody";
import { useState } from "react";
import { ContextProductCount } from "./utils/context-product";

function App() {

const [contextProductCount, setContextProductCount] = useState<number>(0);

  return (
    <>
    <ContextProductCount.Provider value={{contextProductCount, setContextProductCount}}>
      <Header />
      <ListingBody />
      </ContextProductCount.Provider>
    </>
  );
}

export default App;
