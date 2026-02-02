"""
Configurações da aplicação
"""
import os
from datetime import timedelta

class Config:
    """Configuração base da aplicação"""
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-secret-key-change-in-production'
    
    # Configurações do Flask
    DEBUG = False
    TESTING = False
    
    # Theme do Site (escolha um dos disponíveis)
    # Opções: azul-moderno, azul-elegante, dourado-premium, verde-profissional,
    #         escuro-moderno, roxo-corporativo, laranja-criativo, cinza-minimalista,
    #         vermelho-energia, turquesa-refrescante
    DEFAULT_THEME = 'azul-moderno'
    
    # Sessão
    SESSION_COOKIE_SECURE = False
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SAMESITE = 'Lax'
    PERMANENT_SESSION_LIFETIME = timedelta(days=7)
    
    # Upload de arquivos (para futuras implementações)
    MAX_CONTENT_LENGTH = 16 * 1024 * 1024  # 16MB max
    UPLOAD_FOLDER = os.path.join(os.path.dirname(__file__), 'uploads')
    
    # Database (para futuras implementações)
    # SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///gscontabilidade.db'
    # SQLALCHEMY_TRACK_MODIFICATIONS = False

class DevelopmentConfig(Config):
    """Configuração para desenvolvimento"""
    DEBUG = True

class ProductionConfig(Config):
    """Configuração para produção"""
    DEBUG = False
    SESSION_COOKIE_SECURE = True

# Configurações disponíveis
config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}
