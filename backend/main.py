#
# Copie e cole este código para dentro de backend/main.py
#
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
# VITAL: Permite que o seu app React (rodando em outra porta) acesse esta API
CORS(app) 

# Seus dados de tarefas. Em uma aplicação real, isso viria de um banco de dados.
# Por enquanto, vamos manter em memória para simplificar.
tarefas = []
# Para garantir que cada tarefa tenha um ID único
next_id = 1

# --- SUAS FUNÇÕES, AGORA ADAPTADAS PARA A API ---

# ROTA 1: Ver todas as tarefas (GET /tasks)
@app.route("/tasks", methods=["GET"])
def ver_tarefas():
    print("GET /tasks foi chamado. Retornando tarefas:", tarefas)
    return jsonify(tarefas)

# ROTA 2: Adicionar uma tarefa (POST /tasks)
@app.route("/tasks", methods=["POST"])
def adicionar_tarefa():
    global next_id
    dados = request.get_json() # Pega os dados enviados pelo React

    # Regra 1: Validação do nome da tarefa
    nome_tarefa = dados.get("tarefa", "").strip()
    if not nome_tarefa:
        return jsonify({"erro": "A tarefa não pode ser vázia"}), 400
    
    # Regra 2: Validação de tarefa existente
    if any(t["tarefa"] == nome_tarefa for t in tarefas):
        return jsonify({"erro": "Já existe uma tarefa com esse nome."}), 409
    
    nova_tarefa = {
        "id": next_id,
        "tarefa": nome_tarefa, 
        "completada": False
    }
    tarefas.append(nova_tarefa)
    next_id += 1
    
    print(f"POST /tasks: Tarefa '{nome_tarefa}' adicionada com sucesso!")
    return jsonify(nova_tarefa), 201 # 201 = Created

# ROTA 3: Completar uma tarefa (PUT /tasks/<id>/complete)
@app.route("/tasks/<int:id_tarefa>/complete", methods=["PUT"])
def completar_tarefa(id_tarefa):
    for tarefa in tarefas:
        if tarefa["id"] == id_tarefa:
            tarefa["completada"] = not tarefa.get("completada", False) # Alterna o status
            print(f"PUT /tasks/{id_tarefa}/complete: Tarefa '{tarefa['tarefa']}' atualizada.")
            return jsonify(tarefa)
    return jsonify({"erro": "Tarefa não encontrada"}), 404

# ROTA 4: Deletar uma tarefa (DELETE /tasks/<id>)
@app.route("/tasks/<int:id_tarefa>", methods=["DELETE"])
def deletar_tarefa(id_tarefa):
    global tarefas
    tarefa_a_remover = next((t for t in tarefas if t["id"] == id_tarefa), None)
    
    if tarefa_a_remover:
        tarefas.remove(tarefa_a_remover)
        print(f"DELETE /tasks/{id_tarefa}: Tarefa deletada.")
        return jsonify({"sucesso": True})
    
    return jsonify({"erro": "Tarefa não encontrada"}), 404


# Inicia o servidor Flask
if __name__ == "__main__":
    app.run(port=5000, debug=True)