from flask import Flask, render_template
app = Flask(__name__, template_folder="templates")

@app.route('/')
def hello_world():
    return render_template('index1.html')

# app.debug = True

if __name__ == '__main__':
    app.run(host="0.0.0.0")
