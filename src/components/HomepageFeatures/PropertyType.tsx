import styles from "./PropertyType.module.css";

const PropertyType = ({ children }) => {
  return <span className={styles.highlightedType}>{children}</span>;
};

export default PropertyType;
