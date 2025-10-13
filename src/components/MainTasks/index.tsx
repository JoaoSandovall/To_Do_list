import { Task } from "../Task";
import { Tasks } from "../Tasks";

export function MainTask() {
  return (
    <>
      <Tasks>
        <Task>Fazer compras do mês</Task>
        <Task>Ir a academia</Task>
        <Task>Levar cachorro pra passear</Task>
        <Task>Limpar a casa</Task>
      </Tasks>
    </>
  );
}
