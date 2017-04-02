#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

# INSTALL & START
#
# pip install Flask flask-cors
# python nemo.py

app = Flask(__name__)
CORS(app)
val = 0

@app.route("/", methods=['GET', 'POST'])
def hello():
	global val
	if request.method == 'POST':
		val = request.args.get('state')
	res = { 'state' : val }
	return jsonify(res)

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
