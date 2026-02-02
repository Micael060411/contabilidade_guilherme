#!/bin/bash

echo "========================================"
echo "  GS Contabilidade - Setup Inicial"
echo "========================================"
echo

echo "[1/4] Criando ambiente virtual..."
python3 -m venv venv
if [ $? -ne 0 ]; then
    echo "Erro ao criar ambiente virtual!"
    exit 1
fi

echo "[2/4] Ativando ambiente virtual..."
source venv/bin/activate

echo "[3/4] Instalando dependências..."
pip install -r requirements.txt
if [ $? -ne 0 ]; then
    echo "Erro ao instalar dependências!"
    exit 1
fi

echo "[4/4] Criando arquivo .env..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo "Arquivo .env criado! Edite-o com suas configurações."
else
    echo "Arquivo .env já existe."
fi

echo
echo "========================================"
echo "  Setup concluído com sucesso!"
echo "========================================"
echo
echo "Para executar o projeto:"
echo "  1. source venv/bin/activate"
echo "  2. python app.py"
echo
echo "O site estará disponível em:"
echo "  http://localhost:5000"
echo

# Tornar o script executável
chmod +x setup.sh
