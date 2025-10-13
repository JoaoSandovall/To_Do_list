import { Button } from "../ButtonAddTask";
import { HeadingMain } from "../HeadingMain";
import { MainTask } from "../MainTasks";
import styles from "./styles.module.css";

export function Main() {
  return (
    <>
      <div className={styles.main}>
        <HeadingMain />
        <Button />
        <MainTask />
      </div>
    </>
  );
}
