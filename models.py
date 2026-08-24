from pydantic import BaseModel,EmailStr

class users(BaseModel):
    name:str
    email:EmailStr
    password:str