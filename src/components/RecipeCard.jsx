export default  function RecipeCard({ name, category, time, image, description, isPopular}) {
  function handleClick() {
    alert(`You clicked on ${name}`);
  }
  return (
    <div className="recipe-card">
    <img src={image} alt={name} className="recipe-image" />
    <div className="recipe-content">
      <h3 className="recipe-title">{name}</h3>
      <p className="recipe-category">{category}</p>
      <p className="recipe-time">{time}</p>
      <p className="recipe-description">{description}</p>
      {isPopular && <span className="popular-badge">Popular🔥</span>}
    </div>
    <button className="view-recipe-button" onClick={handleClick}>
      View Recipe
    </button>
    </div>
  
  );
}