from sqlalchemy import Column, Integer, String,DateTime
from database import Base
from datetime import datetime
from sqlalchemy import Date

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name=Column(String(50),index=True)
    username = Column(String(50), unique=True, index=True)
    password = Column(String(255))
    email=Column(String(50),index=True,)
    dateofbirth=Column(Date)
    isactive = Column(Integer, default=1)
    createdate= Column(DateTime,default=datetime.now)
    