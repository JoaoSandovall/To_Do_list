//
// Aplique este código em: frontend/src/components/Main/index.tsx
//
import { useState, useEffect } from "react";
import { Button } from "../ButtonAddTask";
import { HeadingMain } from "../HeadingMain";
import { MainTask } from "../MainTasks";
import styles from "./styles.module.css";

// Definimos o "molde" para o objeto de tarefa
export interface ITask {
  id: number;
  tarefa: string;
  completada: boolean;
}

// A URL da nossa API Python
const API_URL = "http://localhost:5000";

export function Main() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Função para buscar/recarregar as tarefas do backend
  const fetchTasks = async () => {
    try {
      const response = await fetch(`${API_URL}/tasks`);
      const data: ITask[] = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Busca as tarefas iniciais quando o componente é montado
  useEffect(() => {
    fetchTasks();
  }, []);

  // --- FUNÇÕES PARA MANIPULAR AS TAREFAS ---

  const handleAddTask = async (taskName: string) => {
    try {
      const response = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tarefa: taskName }),
      });

      if (response.ok) {
        fetchTasks(); // Recarrega a lista para incluir a nova tarefa
      } else {
        const errorData = await response.json();
        alert(`Erro ao criar tarefa: ${errorData.erro}`);
      }
    } catch (error) {
      console.error("Falha ao criar tarefa:", error);
      alert("Falha na comunicação com o servidor.");
    }
  };

  const handleDeleteTask = async (taskId: number) => {
    if (window.confirm("Tem certeza que deseja excluir esta tarefa?")) {
      try {
        await fetch(`${API_URL}/tasks/${taskId}`, { method: "DELETE" });
        fetchTasks(); // Recarrega a lista para remover a tarefa
      } catch (error) {
        console.error("Falha ao deletar tarefa:", error);
      }
    }
  };

  const handleToggleComplete = async (taskId: number) => {
    try {
      await fetch(`${API_URL}/tasks/${taskId}/complete`, { method: "PUT" });
      fetchTasks(); // Recarrega a lista para atualizar o status
    } catch (error) {
      console.error("Falha ao completar tarefa:", error);
    }
  };

  const completedCount = tasks.filter((task) => task.completada).length;

  return (
    <div className={styles.main}>
      <HeadingMain createdCount={tasks.length} completedCount={completedCount} />
      <Button onAddTask={handleAddTask} />
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <MainTask
          tasks={tasks}
          onDelete={handleDeleteTask}
          onComplete={handleToggleComplete}
        />
      )}
    </div>
  );
}