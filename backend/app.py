from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({'message': 'Hello from Flask test app'})

@app.route('/test')
def test_route():
    return jsonify({'status': 'ok', 'detail': 'This is a test route'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
