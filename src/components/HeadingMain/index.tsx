import styles from "./styles.module.css";

export function HeadingMain() {
  return (
    <>
      <div className={styles.headingMain}>
        <p>
          Tarefas criadas<span>5</span>
        </p>
        <p>
          Concluídas <span>2 de 5</span>
        </p>
      </div>
    </>
  );
}
