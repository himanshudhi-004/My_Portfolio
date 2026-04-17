from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import ContactMessage
from schemas import ContactCreate, ContactResponse

router = APIRouter(prefix="/api/contact", tags=["contact"])

@router.post("/", response_model=ContactResponse)
def create_contact(contact: ContactCreate, db: Session = Depends(get_db)):
    try:
        db_contact = ContactMessage(
            name=contact.name,
            email=contact.email,
            subject=contact.subject,
            message=contact.message
        )
        db.add(db_contact)
        db.commit()
        db.refresh(db_contact)
        return {
            "id": db_contact.id,
            "name": db_contact.name,
            "email": db_contact.email,
            "subject": db_contact.subject,
            "message": db_contact.message,
            "created_at": db_contact.created_at
        }
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))