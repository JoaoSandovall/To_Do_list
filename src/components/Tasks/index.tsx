import type { ReactNode } from "react";
import styles from "./styles.module.css";

type TaskProps = {
  children: ReactNode;
};

export function Tasks({ children }: TaskProps) {
  return <div className={styles.tasks}>{children}</div>;
}
