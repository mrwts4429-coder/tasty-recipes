import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RecipeList from "./components/RecipeList";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <RecipeList />
      <Footer />
    </div>
  );
}