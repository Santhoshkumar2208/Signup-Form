from fastapi import FastAPI,Depends,HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
import database_models
from models import users 
from database import session,engine

database_models.base.metadata.create_all(bind = engine)


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

def get_db():
    db = session()
    try:
        yield db
    finally:
        db.close()
@app.post("/register")
def reg(users:users, db:Session = Depends(get_db)):
    exist = db.query(database_models.users).filter(database_models.users.email == users.email).first()
    if exist:
        raise HTTPException(status_code = 400, detail = "Email already registered");
    new = database_models.users(**users.model_dump())
    db.add(new)
    db.commit()
    db.refresh(new)
    return {"message": "User registered", "id": new.id}
