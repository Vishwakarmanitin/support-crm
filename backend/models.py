from database import db
from datetime import datetime


class Ticket(db.Model):
    __tablename__ = "tickets"

    id = db.Column(db.BigInteger, primary_key=True)
    ticket_id = db.Column(db.String(20), unique=True, nullable=False)
    customer_name = db.Column(db.String(100), nullable=False)
    customer_email = db.Column(db.String(255), nullable=False)
    subject = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    status = db.Column(db.String(20), default="Open")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow
    )


class Note(db.Model):
    __tablename__ = "notes"

    id = db.Column(db.BigInteger, primary_key=True)
    ticket_id = db.Column(
        db.BigInteger,
        db.ForeignKey("tickets.id", ondelete="CASCADE"),
        nullable=False
    )
    note = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)