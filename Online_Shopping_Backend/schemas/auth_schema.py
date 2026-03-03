from pydantic import BaseModel


class RegisterRequest(BaseModel):
    username: str
    password: str
    email: str
    name:str
    dateofbirth:str


class LoginRequest(BaseModel):
    username: str
    password: str
