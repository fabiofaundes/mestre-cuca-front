from flask_restx import fields

def getHelloModel (api):
    return api.model('Hello', {
        'content': fields.String(required=True, description='The message content'),
        'creationDate': fields.DateTime(required=False, description='The datetime of the message creation')
    })