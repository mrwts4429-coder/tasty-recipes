export default function Navbar() {
  return (
    <nav className="navbar">
    <h2 className="navbar-title">Tasty Recipes 🍝</h2>
    <ul className="navbar-links">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/Recipes">Recipes</a></li>
    </ul>
    </nav>
  );
}