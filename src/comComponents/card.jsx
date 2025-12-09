import styles from "./Card.module.css";

function Card({ products }) {
  return (
    <div className={styles.products}>
      {products.map((p) => (
        <div key={p.id} className={styles.productCard}>
          <img src={p.image} alt={p.title} className={styles.image} />
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <p className={styles.price}>{p.price} ₽</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
