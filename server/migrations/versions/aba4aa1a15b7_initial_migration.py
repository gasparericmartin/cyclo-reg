"""Initial migration

Revision ID: aba4aa1a15b7
Revises: 
Create Date: 2024-06-12 19:02:48.592507

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'aba4aa1a15b7'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('cyclists',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('age', sa.Integer(), nullable=True),
    sa.Column('hometown', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('races',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('date', sa.DateTime(), nullable=False),
    sa.Column('location', sa.String(), nullable=False),
    sa.Column('length', sa.Float(), nullable=False),
    sa.Column('registration_fee', sa.Float(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('registrations',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('bike', sa.String(), nullable=False),
    sa.Column('cyclist_id', sa.Integer(), nullable=False),
    sa.Column('race_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['cyclist_id'], ['cyclists.id'], name=op.f('fk_registrations_cyclist_id_cyclists')),
    sa.ForeignKeyConstraint(['race_id'], ['races.id'], name=op.f('fk_registrations_race_id_races')),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('cyclist_id', 'race_id', name='_reg_uc')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('registrations')
    op.drop_table('races')
    op.drop_table('cyclists')
    # ### end Alembic commands ###