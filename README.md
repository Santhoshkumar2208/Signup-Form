# Signup-Form

A full-stack signup/registration system with client-side validation, a FastAPI backend, and MySQL persistence via SQLAlchemy.

## Features
- Email format and strong-password validation (regex: uppercase, lowercase, digit, special char, 8+ chars) on the client before any network call
- Password visibility toggle
- Duplicate-email prevention enforced at the database level (`UNIQUE` constraint) and checked server-side before insert
- Clear success/error feedback via alerts, with actual backend error messages (e.g. "Email already registered") surfaced to the user
- Form auto-clears on successful registration

## Tech Stack
- **Frontend:** HTML, CSS, vanilla JavaScript (Fetch API), Bootstrap glyphicons
- **Backend:** FastAPI, Pydantic (request validation)
- **ORM / DB:** SQLAlchemy, MySQL (`mysql-connector-python`)

## Project Structure
```
├── form.html            # Signup form UI
├── form.css              # Styling
├── form.js                # Client-side validation + API calls
├── main.py                # FastAPI routes
├── models.py              # Pydantic request schemas
├── database_models.py     # SQLAlchemy ORM models
└── database.py             # DB engine + session config
```

## Setup
1. Create a MySQL database named `Registration`
2. Create a virtual environment and install dependencies:
```bash
   pip install fastapi uvicorn sqlalchemy mysql-connector-python "pydantic[email]"
```
3. Update the DB credentials in `database.py` (consider moving these to a `.env` file)
4. Run the backend:
```bash
   uvicorn main:app --reload
```
5. Open `form.html` via a live server (e.g. VS Code Live Server on port 5500)

## Notes
- CORS is currently open (`allow_origins=["*"]`) — restrict this to your frontend's origin in production
- Passwords are currently stored in plain text — a good next step would be hashing with `passlib`/`bcrypt`


