"""
GS Contabilidade - Aplicação Principal Flask
Website moderno e modular para contabilidade
"""
from flask import Flask, render_template, request, jsonify, flash, redirect, url_for
from config import Config
import os

def create_app(config_class=Config):
    """Factory pattern para criar a aplicação Flask"""
    app = Flask(__name__)
    app.config.from_object(config_class)
    
    # Context processor para disponibilizar variáveis globalmente nos templates
    @app.context_processor
    def inject_theme():
        """Injeta o theme em todos os templates"""
        return {'current_theme': app.config.get('DEFAULT_THEME', 'azul-moderno')}
    
    # Registrar blueprints (módulos)
    from routes.main import main_bp
    app.register_blueprint(main_bp)
    
    # Blueprints para implementações futuras
    # from routes.auth import auth_bp
    # app.register_blueprint(auth_bp, url_prefix='/auth')
    
    # from routes.admin import admin_bp
    # app.register_blueprint(admin_bp, url_prefix='/admin')
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, host='0.0.0.0', port=5000)
