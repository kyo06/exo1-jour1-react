import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";

function ProductCard({ name, price, image, inStock, onAddToCart }) {
  const handleAddToCart = () => {
    if (!inStock) return;
    onAddToCart({ name, price });
  };
 
  return (
    <div className={styles.card}>
      {/* Badge rupture de stock */}
      {!inStock && (
        <span className={styles.badge}>Rupture de stock</span>
      )}
 
      {/* Image du produit */}
      <img
        src={image}
        alt={name}
        className={styles.image}
      />
 
      {/* Infos produit */}
      <div className={styles.body}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.price}>{price.toFixed(2)} €</p>
      </div>
 
      {/* Bouton panier */}
      <button
        className={styles.button}
        onClick={handleAddToCart}
        disabled={!inStock}
      >
        {inStock ? "Ajouter au panier" : "Indisponible"}
      </button>
    </div>
  );
}
 
// Valiation des props avec PropTypes
ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  inStock: PropTypes.bool.isRequired,
  onAddToCart: PropTypes.func,
};
 
// Valeurs par défaut (optionnel mais bonne pratique)
ProductCard.defaultProps = {
  onAddToCart: () => {},
};
 
export default ProductCard;
