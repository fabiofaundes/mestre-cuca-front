import hello_controller

from flask_restx import Namespace

hello_ns = Namespace("hello", "description", "/hello")
hello_ns.add_resource(hello_controller.Hello, "")