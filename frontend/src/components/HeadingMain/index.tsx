//
// Aplique este código em: frontend/src/components/HeadingMain/index.tsx
//
import styles from "./styles.module.css";

type HeadingMainProps = {
  createdCount: number;
  completedCount: number;
};

export function HeadingMain({ createdCount, completedCount }: HeadingMainProps) {
  return (
    <div className={styles.headingMain}>
      <p>
        Tarefas criadas<span>{createdCount}</span>
      </p>
      <p>
        Concluídas{" "}
        <span>
          {createdCount > 0 ? `${completedCount} de ${createdCount}` : "0"}
        </span>
      </p>
    </div>
  );
}