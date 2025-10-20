//
// Aplique este código em: frontend/src/components/Task/index.tsx
//
import styles from "./styles.module.css";
import { Icons } from "../Icons";
import type { ITask } from "../Main";

type TaskProps = {
  task: ITask;
  onDelete: (taskId: number) => void;
  onComplete: (taskId: number) => void;
};

export function Task({ task, onDelete, onComplete }: TaskProps) {
  return (
    <div className={styles.task}>
      <div className={styles.checkbox}>
        <label className={styles.checkboxContainer}>
          <input
            type="checkbox"
            checked={task.completada}
            onChange={() => onComplete(task.id)}
          />
          <span className={styles.checkmark}></span>
          <span className={styles.labelText}>{task.tarefa}</span>
        </label>
      </div>
      <Icons onDelete={() => onDelete(task.id)} />
    </div>
  );
}