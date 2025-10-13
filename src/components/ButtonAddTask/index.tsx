import styles from "./styles.module.css";

export function Button() {
  return (
    <>
      <button className={styles.button}>
        <span>+</span> Nova tarefa
      </button>
    </>
  );
}
