import { Header } from "../Components/Header/Header";
import { List } from "../Components/List/List";
import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <List />
      <Footer />
    </>
  );
}

export {Home}