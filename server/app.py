#!/usr/bin/env python3

# Standard library imports
from models import Cyclist, Race, Registration
from flask import request
from flask_restful import Resource
from config import app, db, api
from flask import Flask, make_response, jsonify, request
import os
# Add your model imports

# Views go here!

class Home(Resource):
    def get(self):
        return '<h1>Cyclo reg</h1>'

class Races(Resource):
    def get(self):
        races = Race.query.all()
        races_dict = [race.to_dict(rules=('-registrations',)) for race in races]
        return races_dict, 200

    def post(self):
        new_race = Race(
            name = request.json['name'],
            location = request.json['location'],
            length = request.json['length'],
            registration_fee = request.json['registration_fee']
        )

        db.session.add(new_race)
        db.session.commit()

        new_race_dict = new_race.to_dict()

        return new_race_dict, 201

class RacesById(Resource):
    def get(self, id):
        race = Race.query.filter_by(id=id).first()
        
        return race.to_dict(), 200

    def patch(self, id):
        race = Race.query.filter_by(id=id).first()
        for attr in request.json:
            setattr(race, attr, request.json[attr])
        
        db.session.add(race)
        db.session.commit()

        return race.to_dict(), 202

    def delete(self, id):
        race = Race.query.filter_by(id=id).first()

        db.session.delete(race)
        db.session.commit()

        return [], 204

class Cyclists(Resource):
    def get(self):
        cyclists = Cyclist.query.all()
        cyclists_dict = [cyclist.to_dict() for cyclist in cyclists]

        return cyclists_dict, 200

    def post(self):
        cyclist = Cyclist(
                    name = request.json['name'],
                    age = request.json['age'],
                    hometown = request.json['hometown']
        )

        db.session.add(cyclist)
        db.session.commit()

        return cyclist.to_dict(), 201

class CyclistsById(Resource):
    def get(self, id):
        cyclist = Cyclist.query.filter_by(id=id).first()

        return cyclist.to_dict(), 200

    def patch(self, id):
        cyclist = Cyclist.query.filter_by(id=id).first()

        for attr in request.json:
            setattr(cyclist, attr, request.json[attr])
        
        db.session.add(cyclist)
        db.session.commit()

        return cyclist.to_dict(), 202

    def delete(self, id):
        cyclist = Cyclist.query.filter_by(id=id).first()
        
        db.session.delete(cyclist)
        db.session.commit()

        return [], 204

class Registrations(Resource):
    def get(self):
        registrations = Registration.query.all()
        reg_dict = [reg.to_dict() for reg in registrations]

        return reg_dict, 200

    def post(self):
        new_reg = Registration(
                    bike = request.json['bike'],
                    cyclist_id = request.json['cyclist_id'],
                    race_id = request.json['race_id']
        )

        db.session.add(new_reg)
        db.session.commit()

        return new_reg.to_dict(), 201

class RegistrationsById(Resource):
    def delete(self, id):
        registration = Registration.query.filter_by(id=id).first()

        db.session.delete(registration)
        db.session.commit()

        return [], 204



api.add_resource(Home, '/')
api.add_resource(Races, '/races')
api.add_resource(RacesById, '/races/<int:id>')
api.add_resource(Cyclists, '/cyclists')
api.add_resource(CyclistsById, '/cyclists/<int:id>')
api.add_resource(Registrations, '/registrations')
api.add_resource(RegistrationsById, '/registrations/<int:id>')



if __name__ == '__main__':
    app.run(port=5555, debug=True)

