# 🔧 Comandos Úteis - GS Contabilidade

Referência rápida de comandos para desenvolvimento e manutenção do projeto.

## 🚀 Inicialização

### Primeira Vez
```bash
# Setup automático
setup.bat          # Windows
./setup.sh         # Linux/Mac

# Ou manual
python -m venv venv
venv\Scripts\activate              # Windows
source venv/bin/activate           # Linux/Mac
pip install -r requirements.txt
copy .env.example .env             # Windows
cp .env.example .env               # Linux/Mac
```

### Execução Diária
```bash
# Método rápido
run.bat            # Windows
./run.sh           # Linux/Mac

# Ou manual
venv\Scripts\activate              # Windows
source venv/bin/activate           # Linux/Mac
python app.py
```

## 📦 Gerenciamento de Dependências

### Instalar Novas Dependências
```bash
pip install nome-do-pacote
pip freeze > requirements.txt
```

### Atualizar Dependências
```bash
pip install --upgrade -r requirements.txt
```

### Ver Dependências Instaladas
```bash
pip list
pip show nome-do-pacote
```

## 🗃️ Banco de Dados (Futuro)

### Inicializar Banco
```bash
flask db init
```

### Criar Migração
```bash
flask db migrate -m "Descrição da mudança"
```

### Aplicar Migração
```bash
flask db upgrade
```

### Reverter Migração
```bash
flask db downgrade
```

### Ver Histórico
```bash
flask db history
```

## 🧪 Testes

### Executar Todos os Testes
```bash
python -m pytest
```

### Executar com Cobertura
```bash
python -m pytest --cov=app tests/
```

### Executar Teste Específico
```bash
python -m pytest tests/test_routes.py
```

## 🔍 Linting e Formatação

### Formatar Código (Black)
```bash
pip install black
black .
```

### Verificar Estilo (Flake8)
```bash
pip install flake8
flake8 app.py routes/
```

### Ordenar Imports (isort)
```bash
pip install isort
isort .
```

## 🐛 Debug

### Modo Debug
```bash
# Já configurado em app.py
python app.py
```

### Flask Shell
```bash
flask shell
# Você terá acesso ao contexto da aplicação
```

### Ver Rotas Disponíveis
```bash
flask routes
```

## 📊 Performance

### Profiling
```bash
pip install Flask-Profiler
# Adicione ao app.py e acesse /profiler
```

### Memory Usage
```bash
pip install memory_profiler
python -m memory_profiler app.py
```

## 🚀 Deploy

### Gunicorn (Produção)
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:8000 app:app
```

### Com Workers e Reload
```bash
gunicorn -w 4 --reload app:app
```

### Heroku
```bash
# Login
heroku login

# Criar app
heroku create seu-app-nome

# Deploy
git push heroku main

# Ver logs
heroku logs --tail

# Abrir app
heroku open
```

### Railway
```bash
# Instalar CLI
npm install -g @railway/cli

# Login
railway login

# Iniciar projeto
railway init

# Deploy
railway up
```

## 🔒 Segurança

### Gerar Secret Key
```bash
python -c "import secrets; print(secrets.token_hex(32))"
```

### Verificar Vulnerabilidades
```bash
pip install safety
safety check
```

### Atualizar Pacotes de Segurança
```bash
pip install --upgrade pip
pip-audit
```

## 📝 Git

### Inicializar Repositório
```bash
git init
git add .
git commit -m "Initial commit"
```

### Criar Branch
```bash
git checkout -b feature/nova-funcionalidade
```

### Commitar Mudanças
```bash
git add .
git commit -m "Add: Nova funcionalidade"
```

### Push para Remoto
```bash
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

### Ver Status
```bash
git status
git log --oneline
```

## 🧹 Limpeza

### Limpar Cache Python
```bash
# Windows
del /s /q __pycache__
del /s /q *.pyc

# Linux/Mac
find . -type d -name __pycache__ -exec rm -r {} +
find . -type f -name '*.pyc' -delete
```

### Limpar Ambiente Virtual
```bash
# Deletar e recriar
rm -rf venv           # Linux/Mac
rmdir /s venv         # Windows
python -m venv venv
```

## 📦 Backup

### Backup do Projeto
```bash
# Criar arquivo zip
# Windows
tar -czf backup.tar.gz *

# Linux/Mac
tar -czf backup-$(date +%Y%m%d).tar.gz --exclude=venv --exclude=__pycache__ *
```

### Backup do Banco de Dados
```bash
# SQLite
cp gscontabilidade.db gscontabilidade-backup-$(date +%Y%m%d).db

# PostgreSQL
pg_dump dbname > backup.sql
```

## 🔧 Manutenção

### Ver Versão Python
```bash
python --version
pip --version
```

### Ver Info da Aplicação
```bash
flask --version
flask routes
```

### Verificar Portas em Uso
```bash
# Windows
netstat -ano | findstr :5000

# Linux/Mac
lsof -i :5000
```

### Matar Processo na Porta
```bash
# Windows
taskkill /PID numero_do_pid /F

# Linux/Mac
kill -9 numero_do_pid
```

## 📊 Logs

### Ver Logs da Aplicação
```bash
tail -f app.log         # Linux/Mac
Get-Content app.log -Wait  # PowerShell Windows
```

### Logs do Gunicorn
```bash
gunicorn app:app --error-logfile error.log --access-logfile access.log
```

## 🌐 Networking

### Teste de Conectividade
```bash
# Testar rota
curl http://localhost:5000

# Com headers
curl -i http://localhost:5000

# POST request
curl -X POST http://localhost:5000/api/contato -H "Content-Type: application/json" -d '{"nome":"Teste"}'
```

## 💾 Configurações do Sistema

### Variáveis de Ambiente
```bash
# Ver todas
printenv              # Linux/Mac
set                   # Windows

# Definir temporariamente
export FLASK_ENV=development    # Linux/Mac
set FLASK_ENV=development       # Windows
```

### Editar .env
```bash
# Linux/Mac
nano .env
vim .env

# Windows
notepad .env
```

## 🎨 Assets

### Minificar CSS
```bash
pip install csscompressor
python -c "from csscompressor import compress; open('style.min.css', 'w').write(compress(open('style.css').read()))"
```

### Minificar JS
```bash
npm install -g uglify-js
uglifyjs main.js -o main.min.js
```

## 📱 Mobile Testing

### Ngrok (Expor localhost)
```bash
# Instalar ngrok
# Executar
ngrok http 5000
# Acesse a URL fornecida em dispositivos móveis
```

## 🔄 Automação

### Executar Script ao Salvar (Watchdog)
```bash
pip install watchdog
watchmedo auto-restart -d . -p '*.py' -- python app.py
```

### Cron Job (Linux/Mac)
```bash
# Editar crontab
crontab -e

# Executar script diariamente às 2am
0 2 * * * /path/to/venv/bin/python /path/to/backup.py
```

## 🎯 Comandos Rápidos do Dia a Dia

```bash
# Ativar ambiente e rodar
venv\Scripts\activate && python app.py          # Windows
source venv/bin/activate && python app.py       # Linux/Mac

# Update e teste
git pull && pip install -r requirements.txt && python app.py

# Commit rápido
git add . && git commit -m "Update" && git push

# Limpar e reiniciar
rm -rf __pycache__ && python app.py
```

## 🆘 Troubleshooting

### Porta em Uso
```bash
# Usar porta diferente
python -c "from app import create_app; app = create_app(); app.run(port=5001)"
```

### Importação Não Encontrada
```bash
pip install -r requirements.txt --force-reinstall
```

### Permissão Negada (Linux/Mac)
```bash
chmod +x setup.sh run.sh
```

---

## 📚 Referências Rápidas

- Flask: `flask --help`
- Pip: `pip --help`
- Git: `git --help`
- Python: `python --help`

**Salve este arquivo para consulta rápida!** 💾
