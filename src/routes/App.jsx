import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/FetchItems";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <>
      <Header />
      <FetchItems />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
