"""
Modelos de Banco de Dados (para implementação futura)
"""
# from flask_sqlalchemy import SQLAlchemy
# from flask_login import UserMixin
# from werkzeug.security import generate_password_hash, check_password_hash
# from datetime import datetime

# db = SQLAlchemy()

# class User(UserMixin, db.Model):
#     """Modelo de usuário"""
#     __tablename__ = 'users'
#     
#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(120), unique=True, nullable=False, index=True)
#     username = db.Column(db.String(80), unique=True, nullable=False)
#     password_hash = db.Column(db.String(255), nullable=False)
#     nome = db.Column(db.String(120), nullable=False)
#     telefone = db.Column(db.String(20))
#     is_admin = db.Column(db.Boolean, default=False)
#     is_active = db.Column(db.Boolean, default=True)
#     created_at = db.Column(db.DateTime, default=datetime.utcnow)
#     updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
#     
#     def set_password(self, password):
#         """Define senha criptografada"""
#         self.password_hash = generate_password_hash(password)
#     
#     def check_password(self, password):
#         """Verifica senha"""
#         return check_password_hash(self.password_hash, password)
#     
#     def __repr__(self):
#         return f'<User {self.username}>'

# class ContactMessage(db.Model):
#     """Modelo para mensagens do formulário de contato"""
#     __tablename__ = 'contact_messages'
#     
#     id = db.Column(db.Integer, primary_key=True)
#     nome = db.Column(db.String(120), nullable=False)
#     email = db.Column(db.String(120), nullable=False)
#     telefone = db.Column(db.String(20))
#     mensagem = db.Column(db.Text, nullable=False)
#     is_read = db.Column(db.Boolean, default=False)
#     created_at = db.Column(db.DateTime, default=datetime.utcnow)
#     
#     def __repr__(self):
#         return f'<ContactMessage de {self.nome}>'

# class Service(db.Model):
#     """Modelo para serviços oferecidos"""
#     __tablename__ = 'services'
#     
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(120), nullable=False)
#     description = db.Column(db.Text, nullable=False)
#     icon = db.Column(db.String(50))
#     is_active = db.Column(db.Boolean, default=True)
#     order = db.Column(db.Integer, default=0)
#     created_at = db.Column(db.DateTime, default=datetime.utcnow)
#     
#     def __repr__(self):
#         return f'<Service {self.title}>'

# class Testimonial(db.Model):
#     """Modelo para depoimentos"""
#     __tablename__ = 'testimonials'
#     
#     id = db.Column(db.Integer, primary_key=True)
#     nome = db.Column(db.String(120), nullable=False)
#     cargo = db.Column(db.String(120))
#     texto = db.Column(db.Text, nullable=False)
#     rating = db.Column(db.Integer, default=5)
#     is_active = db.Column(db.Boolean, default=True)
#     created_at = db.Column(db.DateTime, default=datetime.utcnow)
#     
#     def __repr__(self):
#         return f'<Testimonial de {self.nome}>'
