"""
Blueprint de Autenticação (para implementação futura)
"""
from flask import Blueprint, render_template, redirect, url_for, flash, request
# from flask_login import login_user, logout_user, login_required, current_user

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['GET', 'POST'])
def login():
    """Página de login"""
    # TODO: Implementar lógica de login
    # if request.method == 'POST':
    #     email = request.form.get('email')
    #     password = request.form.get('password')
    #     # Validar credenciais
    #     # login_user(user)
    #     return redirect(url_for('main.index'))
    return render_template('auth/login.html')

@auth_bp.route('/register', methods=['GET', 'POST'])
def register():
    """Página de registro"""
    # TODO: Implementar lógica de registro
    return render_template('auth/register.html')

@auth_bp.route('/logout')
# @login_required
def logout():
    """Logout do usuário"""
    # logout_user()
    flash('Você saiu da sua conta.', 'info')
    return redirect(url_for('main.index'))

@auth_bp.route('/forgot-password', methods=['GET', 'POST'])
def forgot_password():
    """Recuperação de senha"""
    # TODO: Implementar lógica de recuperação de senha
    return render_template('auth/forgot_password.html')

@auth_bp.route('/reset-password/<token>', methods=['GET', 'POST'])
def reset_password(token):
    """Reset de senha com token"""
    # TODO: Implementar lógica de reset de senha
    return render_template('auth/reset_password.html')
