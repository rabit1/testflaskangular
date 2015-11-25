from flask import Flask, render_template
from flask.ext.restless import APIManager
from flask.ext.sqlalchemy import SQLAlchemy 
from sqlalchemy import Column, Integer, Text
from flask.ext.triangle import Triangle

app = Flask(__name__, static_url_path='/static')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///pin.db'
db = SQLAlchemy(app)
Triangle(app)

class Pin(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	title = db.Column(db.Text, unique=False)
	image = db.Column(db.Text, unique=False)


# db.create_all()

api_manager = APIManager(app, flask_sqlalchemy_db=db)
api_manager.create_api(Pin, methods=['GET', 'POST', 'DELETE', 'PUT'])
 

@app.route('/')
def index():
	return render_template('index.html')
	# return app.send_static_file("index.html")

app.debug = True

if __name__ == '__main__':
	app.run(host="0.0.0.0")



