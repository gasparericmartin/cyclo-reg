#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports


# Views go here!

class Home(Resource):
    def get(self):
        return '<h1>Cyclo reg</h1>'

class Races(Resource):
    def get(self):
        pass

    def post(self):
        pass

class RacesById(Resource):
    def get(self, id):
        pass

    def patch(self, id):
        pass

    def delete(self, id):
        pass

class Cyclists(Resource):
    def get(self):
        pass

    def post(self):
        pass

class CyclistsById(Resource):
    def get(self, id):
        pass

    def patch(self, id):
        pass

    def delete(self, id):
        pass

class Signups(Resource):
    def get(self):
        pass

    def post(self):
        pass



api.add_resource(Home, '/')
api.add_resource(Races, '/races')
api.add_resource(RacesById, '/races/<int:id>')
api.add_resource(Cyclists, '/cyclists')
api.add_resource(CyclistsById, '/cyclists/<int:id>')
api.add_resource(Signups, '/signups')



if __name__ == '__main__':
    app.run(port=5555, debug=True)

