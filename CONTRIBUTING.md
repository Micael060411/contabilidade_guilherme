# 💡 Dicas de Desenvolvimento

Guia prático para desenvolvedores que vão trabalhar ou expandir este projeto.

## 🏗️ Arquitetura do Projeto

### Padrão MVC Adaptado
```
Model (models.py) → Controller (routes/) → View (templates/)
```

### Blueprints (Módulos)
- **main**: Rotas públicas do site
- **auth**: Autenticação (preparado)
- **admin**: Administração (preparado)

## 📝 Convenções de Código

### Python (PEP 8)
```python
# Use snake_case para funções e variáveis
def minha_funcao():
    variavel_local = "valor"

# Use PascalCase para classes
class MinhaClasse:
    pass

# Docstrings obrigatórias
def funcao_importante():
    """Descrição clara do que a função faz"""
    pass
```

### HTML/CSS
```html
<!-- Use kebab-case para classes CSS -->
<div class="minha-classe-css">
    <!-- Indentação de 4 espaços -->
</div>
```

### JavaScript
```javascript
// Use camelCase para variáveis e funções
const minhaVariavel = 'valor';

function minhaFuncao() {
    // código
}
```

## 🎨 Adicionando Novas Páginas

### 1. Criar Rota
```python
# Em routes/main.py
@main_bp.route('/nova-pagina')
def nova_pagina():
    return render_template('nova_pagina.html')
```

### 2. Criar Template
```html
<!-- Em templates/nova_pagina.html -->
{% extends "base.html" %}

{% block title %}Título da Página{% endblock %}

{% block content %}
<section class="section">
    <!-- Seu conteúdo aqui -->
</section>
{% endblock %}
```

### 3. Adicionar no Menu
```html
<!-- Em templates/base.html -->
<li class="nav__item">
    <a href="{{ url_for('main.nova_pagina') }}" class="nav__link">
        Nova Página
    </a>
</li>
```

## 🎨 Sistema de Cores

### Variáveis CSS Principais
```css
--primary-color: #2563eb;      /* Azul principal */
--secondary-color: #10b981;    /* Verde secundário */
--accent-color: #f59e0b;       /* Laranja/Amarelo destaque */
```

### Uso Recomendado
- **Primary**: Botões principais, links, destaques
- **Secondary**: Ícones de sucesso, badges
- **Accent**: Alertas, promoções

## 🧩 Componentes Reutilizáveis

### Card de Serviço
```html
<div class="service-card">
    <div class="service-card__icon">
        <i class="fas fa-icon"></i>
    </div>
    <h3 class="service-card__title">Título</h3>
    <p class="service-card__description">Descrição</p>
</div>
```

### Botão Padrão
```html
<a href="#" class="button button--primary">
    <i class="fas fa-icon"></i>
    Texto do Botão
</a>
```

## 🔌 Implementando Banco de Dados

### 1. Adicionar Dependências
```bash
pip install Flask-SQLAlchemy Flask-Migrate
```

### 2. Configurar em config.py
```python
SQLALCHEMY_DATABASE_URI = 'sqlite:///gscontabilidade.db'
SQLALCHEMY_TRACK_MODIFICATIONS = False
```

### 3. Inicializar em app.py
```python
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    db.init_app(app)
    migrate.init_app(app, db)
    return app
```

### 4. Criar Modelo
```python
# Em models.py
class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100))
```

### 5. Criar Tabelas
```bash
flask db init
flask db migrate -m "Initial migration"
flask db upgrade
```

## 🔐 Implementando Autenticação

### 1. Instalar Flask-Login
```bash
pip install Flask-Login
```

### 2. Configurar
```python
from flask_login import LoginManager

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'auth.login'
```

### 3. Proteger Rotas
```python
from flask_login import login_required

@app.route('/admin')
@login_required
def admin():
    return render_template('admin.html')
```

## 📧 Configurando Email

### Opção 1: Flask-Mail
```python
from flask_mail import Mail, Message

mail = Mail(app)

def enviar_email(destinatario, assunto, corpo):
    msg = Message(assunto,
                  sender='seu@email.com',
                  recipients=[destinatario])
    msg.body = corpo
    mail.send(msg)
```

### Opção 2: SendGrid
```python
import sendgrid
from sendgrid.helpers.mail import Mail

def enviar_email(destinatario, assunto, corpo):
    message = Mail(
        from_email='seu@email.com',
        to_emails=destinatario,
        subject=assunto,
        html_content=corpo
    )
    sg = sendgrid.SendGridAPIClient(api_key='SUA_API_KEY')
    sg.send(message)
```

## 🧪 Testes

### Estrutura de Testes
```
tests/
├── __init__.py
├── test_routes.py
├── test_models.py
└── test_forms.py
```

### Exemplo de Teste
```python
import unittest
from app import create_app

class TestRoutes(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.client = self.app.test_client()
    
    def test_home_page(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
```

## 🚀 Deploy

### Preparar para Produção
```python
# config.py
class ProductionConfig(Config):
    DEBUG = False
    TESTING = False
    # Usar variáveis de ambiente
```

### Requirements para Produção
```txt
gunicorn==21.2.0
psycopg2-binary==2.9.9  # Se usar PostgreSQL
```

### Comando Gunicorn
```bash
gunicorn -w 4 -b 0.0.0.0:8000 app:app
```

## 📊 Monitoramento

### Logs
```python
import logging

logging.basicConfig(filename='app.log', level=logging.INFO)
app.logger.info('Servidor iniciado')
```

### Métricas
```python
from flask import g
import time

@app.before_request
def before_request():
    g.start = time.time()

@app.after_request
def after_request(response):
    diff = time.time() - g.start
    app.logger.info(f'Request time: {diff}')
    return response
```

## 🔧 Debugging

### Flask Debug Toolbar
```bash
pip install flask-debugtoolbar
```

```python
from flask_debugtoolbar import DebugToolbarExtension
toolbar = DebugToolbarExtension(app)
```

### Breakpoints
```python
import pdb; pdb.set_trace()  # Python debugger
```

## 📚 Recursos Úteis

- [Flask Documentation](https://flask.palletsprojects.com/)
- [Jinja2 Templates](https://jinja.palletsprojects.com/)
- [SQLAlchemy](https://www.sqlalchemy.org/)
- [Flask-Login](https://flask-login.readthedocs.io/)
- [Flask Mega Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Minha feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Padrão de Commits
```
Add: Nova funcionalidade
Fix: Correção de bug
Update: Atualização de código
Refactor: Refatoração
Docs: Documentação
Style: Formatação
```

---

**Happy Coding! 🚀**
