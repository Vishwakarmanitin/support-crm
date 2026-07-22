from flask import Blueprint, jsonify, request
from database import db
from models import Ticket
from datetime import datetime
import random
from models import Ticket, Note
from sqlalchemy import or_

main = Blueprint("main", __name__)


@main.route("/")
def home():
    return jsonify({"message": "Backend Connected Successfully"})


@main.route("/tickets", methods=["POST"])
def create_ticket():

    data = request.get_json()

    ticket = Ticket(
        ticket_id=f"DST-{random.randint(100000,999999)}",
        customer_name=data["customer_name"],
        customer_email=data["customer_email"],
        subject=data["subject"],
        description=data["description"],
        status="Open",
        created_at=datetime.utcnow(),
        updated_at=datetime.utcnow()
    )

    db.session.add(ticket)
    db.session.commit()

    return jsonify({
        "message": "Ticket Created Successfully",
        "ticket_id": ticket.ticket_id
    }), 201
    
@main.route("/tickets", methods=["GET"])
def get_tickets():

    tickets = Ticket.query.order_by(Ticket.created_at.desc()).all()

    result = []

    for ticket in tickets:
        result.append({
            "id": ticket.id,
            "ticket_id": ticket.ticket_id,
            "customer_name": ticket.customer_name,
            "customer_email": ticket.customer_email,
            "subject": ticket.subject,
            "description": ticket.description,
            "status": ticket.status,
            "created_at": ticket.created_at.strftime("%d %b %Y, %I:%M %p")
        })

    return jsonify(result)

@main.route("/tickets/<int:id>", methods=["GET"])
def get_ticket(id):

    ticket = Ticket.query.get_or_404(id)

    return jsonify({
        "id": ticket.id,
        "ticket_id": ticket.ticket_id,
        "customer_name": ticket.customer_name,
        "customer_email": ticket.customer_email,
        "subject": ticket.subject,
        "description": ticket.description,
        "status": ticket.status,
        "created_at": ticket.created_at,
        "updated_at": ticket.updated_at
    })
    
@main.route("/tickets/<int:id>", methods=["PUT"])
def update_ticket(id):

    ticket = Ticket.query.get_or_404(id)

    data = request.get_json()

    ticket.status = data["status"]

    ticket.updated_at = datetime.utcnow()

    db.session.commit()

    return jsonify({
        "message": "Status Updated Successfully"
    })
    
@main.route("/tickets/<int:id>/notes", methods=["POST"])
def add_note(id):

    Ticket.query.get_or_404(id)

    data = request.get_json()

    note = Note(
        ticket_id=id,
        note=data["note"]
    )

    db.session.add(note)
    db.session.commit()

    return jsonify({
        "message": "Note Added Successfully"
    }), 201
    
@main.route("/tickets/search", methods=["GET"])
def search_tickets():

    query = request.args.get("query", "")

    tickets = Ticket.query.filter(
        or_(
            Ticket.customer_name.ilike(f"%{query}%"),
            Ticket.customer_email.ilike(f"%{query}%"),
            Ticket.subject.ilike(f"%{query}%"),
            Ticket.ticket_id.ilike(f"%{query}%")
        )
    ).all()

    result = []

    for ticket in tickets:
        result.append({
            "id": ticket.id,
            "ticket_id": ticket.ticket_id,
            "customer_name": ticket.customer_name,
            "subject": ticket.subject,
            "status": ticket.status
        })

    return jsonify(result)

@main.route("/tickets/filter", methods=["GET"])
def filter_tickets():

    status = request.args.get("status")

    tickets = Ticket.query.filter_by(status=status).all()

    result = []

    for ticket in tickets:
        result.append({
            "id": ticket.id,
            "ticket_id": ticket.ticket_id,
            "customer_name": ticket.customer_name,
            "subject": ticket.subject,
            "status": ticket.status
        })

    return jsonify(result)

@main.route("/tickets/<int:id>/notes", methods=["GET"])
def get_notes(id):

    notes = Note.query.filter_by(ticket_id=id).order_by(Note.created_at.desc()).all()

    result = []

    for note in notes:
        result.append({
            "id": note.id,
            "note": note.note,
            "created_at": note.created_at
        })

    return jsonify(result)

@main.route("/tickets/check-duplicate", methods=["POST"])
def check_duplicate():

    data = request.get_json()

    ticket = Ticket.query.filter_by(
        customer_email=data["customer_email"],
        subject=data["subject"],
        status="Open"
    ).first()

    if ticket:
        return jsonify({
            "duplicate": True,
            "message": "An open ticket with this email and subject already exists."
        })

    return jsonify({
        "duplicate": False
    })