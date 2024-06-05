from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from config import db

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

metadata = MetaData(naming_convention=convention)

db = SQLAlchemy(metadata=metadata)

class Cyclist(db.Model, SerializerMixin):
    __tablename__ = 'cyclists'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    age = db.Column(db.Integer)
    hometown = db.Column(db.String)

    registration = db.relationship('Registration', 
                                   back_populates='cyclist', cascade='all, delete-orphan')
    
    races = association_proxy('registrations', 'race',
                              creator=lambda race_obj: Registration(race=race_obj))


    def __repr__(self):
        return f'<ID:{self.id}, Name: {self.name}, Age: {self.age}, Hometown: {self.hometown} >'


class Race(db.Model, SerializerMixin):
    __tablename__ = 'races'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    location = db.Column(db.String)
    length = db.Column(db.Float)
    registration_fee = db.Column(db.Float)

    registration = db.relationship('Registration',
                                   back_populates='race', cascade='all, delete-orphan')
    
    cyclists = association_proxy('registrations', 'cyclist',
                                 creator=lambda cyclist_obj: Registration(cyclist=cyclist_obj))

    def __repr__(self):
        return f'<ID: {self.id}, Name: {self.name}, location: {self.location} \
                Length: {self.length}, Registration Fee: {self.registration_fee}'
    

class Registration(db.Model, SerializerMixin):
    __tablename__ = 'registrations'
    
    id = db.Column(db.Integer, primary_key=True)
    bike = db.Column(db.String)
    
    cyclist_id = db.Column(db.Integer, db.ForeignKey('cyclists.id'))
    race_id = db.Column(db.Integer, db.ForeignKey('races.id'))   

    cyclist = db.relationship('Cyclist', back_populates='registrations')
    race = db.relationship('Races', back_populates='registrations')

    def __repr__(self):
        return f'<ID: {self.id}, Bike: {self.bike}>' 