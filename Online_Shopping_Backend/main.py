from fastapi import FastAPI
from controller.auth_controller import router as auth_router
from database import engine, Base
from fastapi.middleware.cors import CORSMiddleware

import models.user  # important so model is registered

app = FastAPI()

# Create tables
Base.metadata.create_all(bind=engine)

# Include routes
app.include_router(auth_router)

@app.get("/")
def home():
    return {"message": "API is running"}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)