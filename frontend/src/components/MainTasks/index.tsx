//
// Aplique este código em: frontend/src/components/MainTasks/index.tsx
//
import { Task } from "../Task";
import { Tasks } from "../Tasks";
import type { ITask } from "../Main"; // Importa a interface do Main

type MainTaskProps = {
  tasks: ITask[];
  onDelete: (taskId: number) => void;
  onComplete: (taskId: number) => void;
};

export function MainTask({ tasks, onDelete, onComplete }: MainTaskProps) {
  return (
    <Tasks>
      {tasks.length === 0 ? (
        <p>Nenhuma tarefa cadastrada.</p>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))
      )}
    </Tasks>
  );
}