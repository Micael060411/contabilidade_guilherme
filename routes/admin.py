"""
Blueprint Administrativo (para implementação futura)
"""
from flask import Blueprint, render_template, redirect, url_for, flash, request
# from flask_login import login_required, current_user

admin_bp = Blueprint('admin', __name__)

# Decorator para verificar se usuário é admin (implementar depois)
# def admin_required(f):
#     @wraps(f)
#     def decorated_function(*args, **kwargs):
#         if not current_user.is_authenticated or not current_user.is_admin:
#             flash('Acesso negado.', 'error')
#             return redirect(url_for('main.index'))
#         return f(*args, **kwargs)
#     return decorated_function

@admin_bp.route('/')
# @login_required
# @admin_required
def dashboard():
    """Dashboard administrativo"""
    # TODO: Implementar dashboard com estatísticas
    return render_template('admin/dashboard.html')

@admin_bp.route('/users')
# @login_required
# @admin_required
def users():
    """Gerenciamento de usuários"""
    # TODO: Listar e gerenciar usuários
    return render_template('admin/users.html')

@admin_bp.route('/messages')
# @login_required
# @admin_required
def messages():
    """Mensagens recebidas do formulário de contato"""
    # TODO: Listar mensagens do banco de dados
    return render_template('admin/messages.html')

@admin_bp.route('/settings')
# @login_required
# @admin_required
def settings():
    """Configurações do site"""
    # TODO: Página de configurações
    return render_template('admin/settings.html')
