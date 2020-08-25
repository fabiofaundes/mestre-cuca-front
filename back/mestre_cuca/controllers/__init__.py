from hello_controller import api as ns1
from flask_restx import Api

api = Api(    
    version='1,0',
    title="Mestre Cuca API",
    description="The python API for the Mestre Cuca PWA"
)

api.add_namespace(ns1)