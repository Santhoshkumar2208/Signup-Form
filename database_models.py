from sqlalchemy import Column,String,Integer
from sqlalchemy.ext.declarative import declarative_base

base = declarative_base()

class users(base):
    __tablename__ = 'Login'
    id = Column(Integer,primary_key=True,index=True)
    name = Column(String(100))
    email = Column(String(100),unique=True,index=True)
    password = Column(String(255))