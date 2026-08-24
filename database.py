from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

db_url = "mysql+mysqlconnector://username:password@localhost:3306/db_name"

engine = create_engine(db_url)

session = sessionmaker(autocommit = False, autoflush = False, bind = engine)
