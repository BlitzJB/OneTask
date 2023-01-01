from revChatGPT.ChatGPT import Chatbot
from flask import Flask, request, jsonify
from dotenv import find_dotenv, load_dotenv
from flask_cors import CORS
import os



load_dotenv(find_dotenv())


def make_prompt(task, num_subtasks):
    return f"""
        create {num_subtasks} subtasks breaking down the task "{task}" in the below format. dont describe the tasks, write them like how you'd find them in a todo list. dont ask for additional context, just work with this information. make it sound like what you'd write in your personal todo list rather than instructions to someone. delimit the subtasks with the "|" character.

        format:
        1. <subtask here>|2. <subtask here>|3. <subtask here>
    """


chatbot = Chatbot({
  "session_token": os.environ.get("CLOUDFLARE_SESSION_TOKEN")
}, conversation_id=None, parent_id=None) # You can start a custom conversation


def get_subtasks(task, num_subtasks):
    response = chatbot.ask(
        make_prompt(task, num_subtasks), 
        conversation_id=None, 
        parent_id=None
    )
    message = response['message']
    tasks = message.split("|")
    tasks = [task.strip()[3::] for task in tasks if task.strip()[3::] != '']
    return tasks

app = Flask(__name__)
CORS(app)


@app.route('/getSubtasks', methods=['POST'])
def get_subtasks():
    data = request.get_json()
    task = data['task']
    num_subtasks = data['num_subtasks']
    response = chatbot.ask(
        make_prompt(task, num_subtasks), 
        conversation_id=None, 
        parent_id=None
    )
    message = response['message']
    tasks = message.split("|")
    tasks = [task.strip()[3::] for task in tasks if task.strip()[3::] != '']
    return jsonify(tasks)

if __name__ == '__main__':
    app.run(port=5000)