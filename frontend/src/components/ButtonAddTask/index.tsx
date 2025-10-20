//
// Aplique este código em: frontend/src/components/ButtonAddTask/index.tsx
//
import styles from "./styles.module.css";

type ButtonProps = {
  onAddTask: (taskName: string) => void;
};

export function Button({ onAddTask }: ButtonProps) {
  const handleClick = () => {
    const taskName = prompt("Digite o nome da nova tarefa:");
    if (taskName && taskName.trim() !== "") {
      onAddTask(taskName);
    }
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      <span>+</span> Nova tarefa
    </button>
  );
}