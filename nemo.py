from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

# INSTALL & START
#
# pip install Flask flask-cors
# ngrok http -subdomain=nemo 8080
# python nemo.py

app = Flask("Nemo")
CORS(app)
val = False

@app.route("/")
def hello():
    global val
    res = { 'state' : val}
    return jsonify(res)

@app.route("/hackhim")
def hackhim():
    global val
    val = not val
    res = { 'pownedTo' : val}
    # request.args.get('para1SiDansURL') <= pour recup' un param
    return jsonify(res)

app.run(debug=True, host='0.0.0.0', port=8080)
