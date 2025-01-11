from flask import Blueprint, jsonify, request
from models import db, Assignment  # Import db and models from models.py

assignment_blueprint = Blueprint("assignments", __name__)

@assignment_blueprint.route("/", methods=["GET"])
def get_assignments():
    assignments = Assignment.query.all()
    return jsonify([{
        "id": assignment.id,
        "fileName": assignment.file_name,
        "deadline": assignment.deadline,
        "status": assignment.status,
        "completedFileUrl": assignment.completed_file_url
    } for assignment in assignments])

@assignment_blueprint.route("/", methods=["POST"])
def add_assignment():
    data = request.json
    new_assignment = Assignment(
        file_name=data.get("fileName"),
        deadline=data.get("deadline"),
        status="Pending"
    )
    db.session.add(new_assignment)
    db.session.commit()
    return jsonify({"message": "Assignment added successfully!"}), 201

@assignment_blueprint.route("/<int:id>", methods=["PUT"])
def update_assignment(id):
    assignment = Assignment.query.get_or_404(id)
    data = request.json
    assignment.status = data.get("status", assignment.status)
    assignment.completed_file_url = data.get("completedFileUrl", assignment.completed_file_url)
    db.session.commit()
    return jsonify({"message": "Assignment updated successfully!"})

@assignment_blueprint.route("/<int:id>", methods=["DELETE"])
def delete_assignment(id):
    assignment = Assignment.query.get_or_404(id)
    db.session.delete(assignment)
    db.session.commit()
    return jsonify({"message": "Assignment deleted successfully!"})