import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "../src/Components/MediaQuery/MediaQuery.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import KitchenAccessories from "./Components/Items/Kitchen Accessories/KitchenAccessories";
import Wires from "./Components/Items/WIRES/Wires";
import Lockes from "./Components/Items/Lockes/Lockes";
import Vrprime from "./Components/Items/Kitchen Accessories/Vrprime";
import Plantex from "./Components/Items/Kitchen Accessories/Plantex";
import Amazon from "./Components/Items/Kitchen Accessories/Amazon";
import Copper from "./Components/Items/WIRES/Copper";
import Piergiacomi from "./Components/Items/WIRES/Piergiacomi";
import Tazlyn from "./Components/Items/WIRES/Tazlyn";
import CarFrill from "./Components/Items/Lockes/CarFrill";
import Generic from "./Components/Items/Lockes/Generic";
import Rjvon from "./Components/Items/Lockes/Rjvon";
import Tools from "./Components/Items/Tools/Tools";
import Paints from "./Components/Items/Paints/Paints";
import Roofing from "./Components/Items/Roofing/Roofing";
import Glass from "./Components/Items/Glass/Glass";
import Fastners from "./Components/Items/Fastners/Fastners";
import Kraft from "./Components/Items/Tools/Kraft";
import Sharpex from "./Components/Items/Tools/Sharpex";
import Wold from "./Components/Items/Tools/Wold";
// import Footer from "./Components/Footer/Footer";
import Asian from "./Components/Items/Paints/Asian";
import Berger from "./Components/Items/Paints/Berger";
import Emulsion from "./Components/Items/Paints/Emulsion";
import Sahul from "./Components/Items/Roofing/Sahul";
import Tarang from "./Components/Items/Roofing/Tarang";
import Generics from "./Components/Items/Roofing/Generics";
import Rab from "./Components/Items/Glass/Rab";
import Soul from "./Components/Items/Glass/Soul";
import Taj from "./Components/Items/Glass/Taj";
import Anchor from "./Components/Items/Fastners/Anchor";
import Concrete from "./Components/Items/Fastners/Concrete";
import Source from "./Components/Items/Fastners/Source";
import FooterEnd from "./Components/Footer/FooterEnd";
import ShopNow from "./Components/ShopNow/ShopNow";
import { ShopContextProvider } from "./Context/shop-context";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
    <ShopContextProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<NavBar />} />

        <Route index element={<Home />} />

        <Route path="KitchenAccessories" element={<KitchenAccessories />} />

        <Route path="Wires" element={<Wires />} />
        <Route path="Lockes" element={<Lockes />} />
        <Route path="Vrprime" element={<Vrprime />} />
        <Route path="Plantex" element={<Plantex />} />
        <Route path="Amazon" element={<Amazon />} />
        <Route path="Copper" element={<Copper />} />
        <Route path="Piergiacomi" element={<Piergiacomi />} />
        <Route path="Tazlyn" element={<Tazlyn />} />
        <Route path="Tools" element={<Tools />} />
        <Route path="Paints" element={<Paints />} />
        <Route path="Roofing" element={<Roofing />} />
        <Route path="Glass" element={<Glass />} />
        <Route path="Fastners" element={<Fastners />} />

        <Route path="CarFrill" element={<CarFrill />} />
        <Route path="Generic" element={<Generic />} />
        <Route path="Rjvon" element={<Rjvon />} />

        <Route path="Kraft" element={<Kraft />} />
        <Route path="Sharpex" element={<Sharpex />} />
        <Route path="Wold" element={<Wold />} />

        <Route path="Asian" element={<Asian />} />
        <Route path="Berger" element={<Berger />} />
        <Route path="Emulsion" element={<Emulsion />} />

        <Route path="Generics" element={<Generics />} />
        <Route path="Sahul" element={<Sahul />} />
        <Route path="Tarang" element={<Tarang />} />

        <Route path="Rab" element={<Rab />} />
        <Route path="Soul" element={<Soul />} />
        <Route path="Taj" element={<Taj />} />

        <Route path="Anchor" element={<Anchor />} />
        <Route path="Concrete" element={<Concrete />} />
        <Route path="Source" element={<Source />} />
        <Route path="ShopNow" element={<ShopNow />} />
        <Route path="Cart" element={<Cart/>}/>
      </Routes>
      <FooterEnd />
      </ShopContextProvider>
    </BrowserRouter>
  );
}

export default App;
