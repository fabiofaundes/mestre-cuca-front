import os

from flask import Flask
from flask_restx import Api, Namespace

# importing controllers
import controllers

def create_app(test_config=None):
    
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev'
    )

    api = Api(app, version='1,0', title="Mestre Cuca API", description="The python API for the Mestre Cuca PWA")
    api.add_namespace(controllers.hello_ns)
    
    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass    

    return app