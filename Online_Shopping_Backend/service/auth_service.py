
from models.user import User
from models.security import hash_password, verify_password

class AuthService:
    def register(self, db, request):

        #  Hash password
        hashed_password = hash_password(request.password)

        #  Create user object
        new_user = User(
            username=request.username,
            password=hashed_password,
            email=request.email
            ,name=request.name
            ,dateofbirth=request.dateofbirth
        )

        #  Save to database
        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        return {"status": "registered", "username": new_user.username}


    def login(self, db, request):

        user = db.query(User).filter(
            User.username == request.username
        ).first()

        if not user:
            return {"error": "User not found"}

        #  Verify password
        if not verify_password(request.password, user.password):
            return {"error": "Invalid password"}

        return {"status": "logged_in"}
auth_service = AuthService()