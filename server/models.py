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

class Cyclist(db.Model, SerializerMixin):
    __tablename__ = 'cyclists'

    serialize_rules = ('-registrations.cyclist', '-races.cyclsits')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    age = db.Column(db.Integer)
    hometown = db.Column(db.String)

    registrations = db.relationship('Registration', 
                                   back_populates='cyclist', cascade='all, delete-orphan')
    
    races = association_proxy('registrations', 'race',
                              creator=lambda race_obj: Registration(race=race_obj))


    def __repr__(self):
        return f'<ID:{self.id}, Name: {self.name}, Age: {self.age}, Hometown: {self.hometown} >'


class Race(db.Model, SerializerMixin):
    __tablename__ = 'races'

    serialize_rules = ('-registrations.race', '-cyclists.races')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    date = db.Column(db.DateTime)
    location = db.Column(db.String)
    length = db.Column(db.Float)
    registration_fee = db.Column(db.Float)

    registrations = db.relationship('Registration',
                                   back_populates='race', cascade='all, delete-orphan')
    
    cyclists = association_proxy('registrations', 'cyclist',
                                 creator=lambda cyclist_obj: Registration(cyclist=cyclist_obj))

    def __repr__(self):
        return f'<ID: {self.id}, Name: {self.name}, location: {self.location} \
                Length: {self.length} kms, Registration Fee: ${self.registration_fee}'
    

class Registration(db.Model, SerializerMixin):
    __tablename__ = 'registrations'

    serialize_rules = ('-cyclist.registrations', '-race.registrations')
    
    id = db.Column(db.Integer, primary_key=True)
    bike = db.Column(db.String)
    
    cyclist_id = db.Column(db.Integer, db.ForeignKey('cyclists.id'))
    race_id = db.Column(db.Integer, db.ForeignKey('races.id'))   

    cyclist = db.relationship('Cyclist', back_populates='registrations')
    race = db.relationship('Race', back_populates='registrations')

    def __repr__(self):
        return f'<ID: {self.id}, Bike: {self.bike}>' 