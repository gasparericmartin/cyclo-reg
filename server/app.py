#!/usr/bin/env python3

# Standard library imports
from models import Cyclist, Race, Registration
from flask import request
from flask_restful import Resource
from config import app, db, api
from flask import Flask, make_response, jsonify, request
import os
import datetime
# Add your model imports

# Views go here!

class Home(Resource):
    def get(self):
        return '<h1>Cyclo reg</h1>'

class Races(Resource):
    def get(self):
        races = Race.query.all()

        if races:
            races_dict = [race.to_dict() for race in races]
            return races_dict, 200
        
        return {'error': '404 not found'}, 404

    def post(self):
        try:
            new_race = Race(
                name = request.json['name'],
                date = datetime.datetime(
                                    request.json['date'][0],
                                    request.json['date'][1],
                                    request.json['date'][2]
                        ),
                location = request.json['location'],
                length = request.json['length'],
                registration_fee = request.json['registration_fee']
            )

            db.session.add(new_race)
            db.session.commit()

            new_race_dict = new_race.to_dict()

            return new_race_dict, 201
        
        except Exception as exc:
            return {'error': f'{exc}'}, 400

class RacesById(Resource):
    def get(self, id):
        race = Race.query.filter_by(id=id).first()
        
        if race:
            return race.to_dict(), 200
        
        return {'error': '404 not found'}, 404

    def patch(self, id):
        race = Race.query.filter_by(id=id).first()

        if race:
            try:
                for attr in request.json:
                    if attr != 'date':
                        setattr(race, attr, request.json[attr])
                    else:
                        date = datetime.datetime(
                                    request.json['date'][0],
                                    request.json['date'][1],
                                    request.json['date'][2]
                        )
                        setattr(race, attr, date)
                
                db.session.add(race)
                db.session.commit()

                return race.to_dict(), 202
            
            except Exception as exc:
                return {'error': f'{exc}'}, 400
        
        return {'error': '404 not found'}, 404

    def delete(self, id):
        race = Race.query.filter_by(id=id).first()
        if race:
            try:
                db.session.delete(race)
                db.session.commit()

                return [], 204
            
            except Exception as exc:
                return {'error', f'{exc}'}, 400
        
        return {'error', '404 not found'}, 404

class Cyclists(Resource):
    def get(self):
        cyclists = Cyclist.query.all()

        if cyclists:
            cyclists_dict = [cyclist.to_dict() for cyclist in cyclists]

            return cyclists_dict, 200
        
        return {'error': '404 not found'}, 404

    def post(self):
        try:
            cyclist = Cyclist(
                        name = request.json['name'],
                        age = request.json['age'],
                        hometown = request.json['hometown']
            )

            db.session.add(cyclist)
            db.session.commit()

            return cyclist.to_dict(), 201
        
        except Exception as exc:
            return {'error': f'{exc}'}, 400

class CyclistsById(Resource):
    def get(self, id):
        cyclist = Cyclist.query.filter_by(id=id).first()

        if cyclist:
            return cyclist.to_dict(), 200
        
        return {'error': '404 not found'}, 404

    def patch(self, id):
        cyclist = Cyclist.query.filter_by(id=id).first()

        if cyclist:
            try:

                for attr in request.json:
                    setattr(cyclist, attr, request.json[attr])
                
                db.session.add(cyclist)
                db.session.commit()

                return cyclist.to_dict(), 202
            
            except Exception as exc:
                return {'error': f'{exc}'}, 400
        
        return {'error': '404 not found'}, 404

    def delete(self, id):
        cyclist = Cyclist.query.filter_by(id=id).first()
        
        if cyclist:
            try:
                db.session.delete(cyclist)
                db.session.commit()

                return {}, 204
            
            except Exception as exc:
                return {'error': f'{exc}'}
        
        return {'error': '404 not found'}, 404
        


class Registrations(Resource):
    def get(self):
        registrations = Registration.query.all()

        if registrations:
            reg_dict = [reg.to_dict() for reg in registrations]

            return reg_dict, 200
        
        return {'error': '404 not found'}, 404

    def post(self):
        try:
            new_reg = Registration(
                        bike = request.json['bike'],
                        cyclist_id = request.json['cyclist_id'],
                        race_id = request.json['race_id']
            )

            db.session.add(new_reg)
            db.session.commit()

            return new_reg.to_dict(), 201
        
        except Exception as exc:
            return {'error': f'{exc}'}

class RegistrationsById(Resource):
    def delete(self, id):
        registration = Registration.query.filter_by(id=id).first()

        if registration:
            try:
                db.session.delete(registration)
                db.session.commit()

                return [], 204
            
            except Exception as exc:
                return {'error': f'{exc}'}, 400
        
        return {'error': '404 not found'}, 404



api.add_resource(Home, '/')
api.add_resource(Races, '/races')
api.add_resource(RacesById, '/races/<int:id>')
api.add_resource(Cyclists, '/cyclists')
api.add_resource(CyclistsById, '/cyclists/<int:id>')
api.add_resource(Registrations, '/registrations')
api.add_resource(RegistrationsById, '/registrations/<int:id>')



if __name__ == '__main__':
    app.run(port=5555, debug=True)

