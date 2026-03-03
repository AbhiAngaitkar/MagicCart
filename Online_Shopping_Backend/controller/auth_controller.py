from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from schemas.auth_schema import RegisterRequest, LoginRequest
from service.auth_service import AuthService

router = APIRouter(prefix="/auth", tags=["Authentication"])
auth_service = AuthService()

# Dependency (like @Autowired DB)
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/register")
def register(request: RegisterRequest, db: Session = Depends(get_db)):
    return auth_service.register(db, request)

@router.post("/login")
def login(request: LoginRequest, db: Session = Depends(get_db)):
    return auth_service.login(db, request)