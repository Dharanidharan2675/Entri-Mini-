function CategoryCard({ icon, title, onClick }) {
  return (
    <button className="category-card" onClick={onClick}>
      <div className="category-icon">
        {icon}
      </div>

      <span>{title}</span>
    </button>
  );
}

export default CategoryCard;