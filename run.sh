#!/bin/bash

echo "========================================"
echo "  Iniciando GS Contabilidade"
echo "========================================"
echo

if [ ! -d "venv" ]; then
    echo "Ambiente virtual não encontrado!"
    echo "Execute setup.sh primeiro."
    exit 1
fi

echo "Ativando ambiente virtual..."
source venv/bin/activate

echo "Iniciando servidor Flask..."
echo
echo "========================================"
echo "  Servidor rodando em:"
echo "  http://localhost:5000"
echo
echo "  Pressione Ctrl+C para parar"
echo "========================================"
echo

python app.py
