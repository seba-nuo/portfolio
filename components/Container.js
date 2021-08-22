import styles from "../styles/Container.module.css";

function Container(props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

export default Container;
