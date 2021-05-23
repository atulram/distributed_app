#!flask/bin/python
from flask import Flask, jsonify, make_response
from flask import request
from flask import abort
from sys import stderr
from logging.config import dictConfig
import random

app = Flask(__name__)

@app.route('/check')
def check():
	print("\n-------inside check---------")
	response = jsonify({msg:"Hello from python"})
	response.headers.add("Access-Control-Allow-Origin", "*")
	return response


@app.route('/add', methods=['POST', 'OPTIONS'])
def addition():
	if request.method == "OPTIONS": # CORS preflight
		response = make_response()
		response.headers.add("Access-Control-Allow-Origin", "*")
		response.headers.add('Access-Control-Allow-Headers', "*")
		return response
	else:
		print("-------Post Call Addition---------")
        print("-------inputs ---------", request.json["inp1"], request.json["inp2"])
        try:
            result = request.json["inp1"] + request.json["inp2"]
        except:
            result = None
        response = jsonify({"ans":result})
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add('Access-Control-Allow-Headers', "*")
        return response, 201

@app.route('/sub', methods=['POST', 'OPTIONS'])
def subtract():
	if request.method == "OPTIONS": # CORS preflight
		response = make_response()
		response.headers.add("Access-Control-Allow-Origin", "*")
		response.headers.add('Access-Control-Allow-Headers', "*")
		return response
	else:
		print("-------Post Call Subtract---------")
        print("-------inputs ---------", request.json["inp1"], request.json["inp2"])
        try:
            result = request.json["inp1"] - request.json["inp2"]
        except:
            result = None
        response = jsonify({"ans":result})
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add('Access-Control-Allow-Headers', "*")
        return response, 201


if __name__ == '__main__':
	app.run(debug=True)