"""
Rotas principais do site
"""
from flask import Blueprint, render_template, request, jsonify, flash, redirect, url_for

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    """Página inicial"""
    return render_template('index.html')

@main_bp.route('/servicos')
def servicos():
    """Página de serviços"""
    return render_template('servicos.html')

@main_bp.route('/sobre')
def sobre():
    """Página sobre nós"""
    return render_template('sobre.html')

@main_bp.route('/diferenciais')
def diferenciais():
    """Página de diferenciais"""
    return render_template('diferenciais.html')

@main_bp.route('/depoimentos')
def depoimentos():
    """Página de depoimentos"""
    return render_template('depoimentos.html')

@main_bp.route('/contato', methods=['GET', 'POST'])
def contato():
    """Página de contato"""
    if request.method == 'POST':
        # Processar formulário de contato
        nome = request.form.get('nome')
        email = request.form.get('email')
        telefone = request.form.get('telefone')
        mensagem = request.form.get('mensagem')
        
        # Aqui você pode adicionar lógica para enviar email, salvar no BD, etc.
        # Por enquanto, apenas retorna sucesso
        
        if request.is_json:
            return jsonify({
                'success': True,
                'message': 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
            })
        else:
            flash('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success')
            return redirect(url_for('main.contato'))
    
    return render_template('contato.html')

@main_bp.route('/api/contato', methods=['POST'])
def api_contato():
    """API para formulário de contato (AJAX)"""
    data = request.get_json()
    
    # Validação básica
    if not data or not data.get('nome') or not data.get('email'):
        return jsonify({
            'success': False,
            'message': 'Nome e email são obrigatórios'
        }), 400
    
    # Aqui você pode adicionar lógica para processar o contato
    # Exemplo: enviar email, salvar no banco de dados, etc.
    
    return jsonify({
        'success': True,
        'message': 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    })
