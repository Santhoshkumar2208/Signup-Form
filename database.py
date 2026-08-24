from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

db_url = "mysql+mysqlconnector://root:222005@localhost:3306/Registration"

engine = create_engine(db_url)

session = sessionmaker(autocommit = False, autoflush = False, bind = engine)