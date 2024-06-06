#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc
import datetime

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Cyclist, Race, Registration

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        Cyclist.query.delete()
        Race.query.delete()
        Registration.query.delete()
        
        print("Starting seed...")

        cyclist1 = Cyclist(
                    name = 'Janice',
                    age = 56,
                    hometown = 'New York, NY'
        )
        cyclist2 = Cyclist(
                    name = 'Dillon',
                    age = 23,
                    hometown = 'Portland, ME'
        )

        db.session.add(cyclist1)
        db.session.add(cyclist2)
        db.session.commit()

        print('Cyclists seeded')

        race_1 = Race(
                    name = 'Badlands 500',
                    date = datetime.datetime.now(),
                    location = 'Arizona',
                    length = 36,
                    registration_fee = 100.0
        )    
        race_2 = Race(
                    name = 'Nutmeg',
                    date = datetime.datetime.now(),
                    location = 'New Haven, CT',
                    length = 20.0,
                    registration_fee = 200.0
        )

        db.session.add(race_1)
        db.session.add(race_2)
        db.session.commit()

        print('Races seeded')

        reg_1 = Registration(
                    bike = 'Kona',
                    cyclist_id = 1,
                    race_id = 1
        )
        reg_2 = Registration(
                    bike = 'All-City',
                    cyclist_id = 2,
                    race_id = 2
        )

        db.session.add(reg_1)
        db.session.add(reg_2)
        db.session.commit()

        print('Registrations seeded')


        
