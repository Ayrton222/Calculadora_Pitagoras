
from flask import Flask, request, jsonify, render_template
from math import sqrt, pow

app = Flask(__name__, static_folder='static')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/test', methods=['POST'])
def test():
    catetoA = float(request.json["catetoA"])
    catetoB = float(request.json["catetoB"])
    hypotenuse = sqrt(pow(catetoA,2) + pow(catetoB,2))
    return jsonify(hypotenuse=hypotenuse)

@app.route('/static/<path:path>')
def send_static_css(path):
    return ('static', path)


@app.route('/static/<path:path>')
def send_static_js(path):
    return ('static', path)


if __name__ == '__main__':
    app.run(debug=True)