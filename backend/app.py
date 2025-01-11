from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# Initialize Flask app
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///assignments.db"  # SQLite DB
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Enable CORS
CORS(app)

# Import and initialize Database
from models import db
db.init_app(app)
migrate = Migrate(app, db)

# Import Routes
from routes.assignments import assignment_blueprint
from routes.auth import auth_blueprint

# Register Blueprints
app.register_blueprint(assignment_blueprint, url_prefix="/api/assignments")
app.register_blueprint(auth_blueprint, url_prefix="/api/auth")

if __name__ == "__main__":
    app.run(debug=True)