from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from models import db, Admin, RepairRequest, ContactMessage
from config import Config
import os

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)
jwt = JWTManager(app)
db.init_app(app)

# --- CLI COMMANDS ---
@app.cli.command('initdb')
def initdb_command():
    """Initializes the database and creates a default admin."""
    db.create_all()
    if not Admin.query.filter_by(username='admin').first():
        admin = Admin(username='admin')
        admin.set_password('admin123') # Default password, change in production
        db.session.add(admin)
        db.session.commit()
        print('Initialized the database and created default admin (admin/admin123).')
    else:
        print('Database already initialized.')

# --- PUBLIC ROUTES ---
@app.route('/api/repair-request', methods=['POST'])
def submit_repair_request():
    data = request.json
    try:
        new_request = RepairRequest(
            full_name=data['full_name'],
            phone_number=data['phone_number'],
            service_category=data['service_category'],
            device=data['device'],
            problem_description=data['problem_description'],
            preferred_date=data.get('preferred_date'),
            preferred_contact=data.get('preferred_contact')
        )
        db.session.add(new_request)
        db.session.commit()
        return jsonify({"message": "Repair request submitted successfully", "id": new_request.id}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/api/contact', methods=['POST'])
def submit_contact():
    data = request.json
    try:
        new_msg = ContactMessage(
            name=data['name'],
            phone=data['phone'],
            message=data['message']
        )
        db.session.add(new_msg)
        db.session.commit()
        return jsonify({"message": "Contact message submitted successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# --- AUTH ROUTES ---
@app.route('/api/admin/login', methods=['POST'])
def login():
    username = request.json.get('username', None)
    password = request.json.get('password', None)
    
    admin = Admin.query.filter_by(username=username).first()
    if admin and admin.check_password(password):
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token), 200
    
    return jsonify({"msg": "Bad username or password"}), 401

# --- PROTECTED ADMIN ROUTES ---
@app.route('/api/admin/requests', methods=['GET'])
@jwt_required()
def get_repair_requests():
    requests = RepairRequest.query.order_by(RepairRequest.created_at.desc()).all()
    result = []
    for r in requests:
        result.append({
            "id": r.id,
            "full_name": r.full_name,
            "phone_number": r.phone_number,
            "service_category": r.service_category,
            "device": r.device,
            "problem_description": r.problem_description,
            "preferred_date": r.preferred_date,
            "preferred_contact": r.preferred_contact,
            "status": r.status,
            "created_at": r.created_at.isoformat()
        })
    return jsonify(result), 200

@app.route('/api/admin/requests/<int:id>/status', methods=['PUT'])
@jwt_required()
def update_request_status(id):
    req = RepairRequest.query.get_or_404(id)
    data = request.json
    if 'status' in data:
        req.status = data['status']
        db.session.commit()
        return jsonify({"message": "Status updated successfully"}), 200
    return jsonify({"error": "Status not provided"}), 400

@app.route('/api/admin/messages', methods=['GET'])
@jwt_required()
def get_contact_messages():
    messages = ContactMessage.query.order_by(ContactMessage.created_at.desc()).all()
    result = []
    for m in messages:
        result.append({
            "id": m.id,
            "name": m.name,
            "phone": m.phone,
            "message": m.message,
            "is_read": m.is_read,
            "created_at": m.created_at.isoformat()
        })
    return jsonify(result), 200

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        # Create default admin if not exists
        if not Admin.query.filter_by(username='admin').first():
            admin = Admin(username='admin')
            admin.set_password('admin123')
            db.session.add(admin)
            db.session.commit()
    app.run(debug=True, port=5000)
