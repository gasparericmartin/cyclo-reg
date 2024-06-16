#!/usr/bin/env python3

from random import randint, uniform, choice as rc
from faker import Faker
from app import app
from models import db, Cyclist, Race, Registration

fake = Faker()

bike_brands = ['Kona', 'All-City', 'Specialized', 'Jones',
               'Sklar', 'Cotik', 'Otso', 'Moots', 'Litespeed',
               'Cannondale']

def create_cyclists():
    cyclists = []

    for x in range(10):
        cyclist = Cyclist(
                    name = fake.name(),
                    age = randint(10, 70),
                    hometown = fake.city()
        )
        cyclists.append(cyclist)
    
    return cyclists

def create_races():
    races = []

    for x in range(10):
        race = Race(
            name = fake.company(),
            date = fake.date_time(),
            location = fake.city(),
            length = randint(20, 150),
            registration_fee = uniform(0.0, 99.99)
        )    
        races.append(race)
    
    return races

def create_registrations():
    registrations = []

    for x in range(10):
        registration = Registration(
                    bike = rc(bike_brands),
                    cyclist_id = x + 1,
                    race_id = randint(1, 10)
        )
        registrations.append(registration)
    
    return registrations




if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print('Clearing db...')
        Cyclist.query.delete()
        Race.query.delete()
        Registration.query.delete()
        
        print('Seeding cyclists...')
        cyclists = create_cyclists()
        db.session.add_all(cyclists)
        db.session.commit()

        print('Seeding races...')
        races = create_races()
        db.session.add_all(races)
        db.session.commit()

        print('Seeding registrations...')
        registrations = create_registrations()
        db.session.add_all(registrations)
        db.session.commit()

        print('Seed complete.')



        
