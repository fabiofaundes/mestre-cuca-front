from flask_restx import Namespace, Resource, fields
from flask import request, abort

from mestre_cuca.helpers import json_helper
from mestre_cuca.database import db
from mestre_cuca.models import hello

from google.cloud import datastore

api = Namespace("hello", "description")
hello_model = hello.getHelloModel(api)

@api.route("")
class Hello(Resource):    
    def get(self):
        return "Hello, World!"

@api.route("/db")
class HelloDB(Resource):
    @api.marshal_list_with(hello_model)
    def get(self):        
        query = db.query(kind="message")
        message_list = []

        for message in query.fetch():
            if "creationDate" in message.keys():
                message["creationDate"] = json_helper.json_serial(message["creationDate"])

            message_list.append(message)

        return message_list

    @api.expect(hello_model)
    def post(self):        
        req_data = request.get_json()
        print(req_data['content'])
        kind = "message"
        key = db.key(kind)
        message = datastore.Entity(key)
        message['content'] = req_data['content']

        db.put(message)

        return message        
        