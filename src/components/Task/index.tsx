import { useState, type ReactNode } from "react";
import styles from "./styles.module.css";
import { Icons } from "../Icons";

type TaskProps = {
  children: ReactNode;
};

export function Task({ children }: TaskProps) {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className={styles.task}>
        <div className={styles.checkbox}>
          <label className={styles.checkboxContainer}>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <span className={styles.checkmark}></span>
            <span className={styles.labelText}>{children}</span>
          </label>
        </div>
        <Icons />
      </div>
    </>
  );
}
