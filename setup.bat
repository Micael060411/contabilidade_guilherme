@echo off
echo ========================================
echo   GS Contabilidade - Setup Inicial
echo ========================================
echo.

echo [1/4] Criando ambiente virtual...
python -m venv venv
if errorlevel 1 (
    echo Erro ao criar ambiente virtual!
    pause
    exit /b 1
)

echo [2/4] Ativando ambiente virtual...
call venv\Scripts\activate.bat

echo [3/4] Instalando dependencias...
pip install -r requirements.txt
if errorlevel 1 (
    echo Erro ao instalar dependencias!
    pause
    exit /b 1
)

echo [4/4] Criando arquivo .env...
if not exist .env (
    copy .env.example .env
    echo Arquivo .env criado! Edite-o com suas configuracoes.
) else (
    echo Arquivo .env ja existe.
)

echo.
echo ========================================
echo   Setup concluido com sucesso!
echo ========================================
echo.
echo Para executar o projeto:
echo   1. venv\Scripts\activate
echo   2. python app.py
echo.
echo O site estara disponivel em:
echo   http://localhost:5000
echo.
pause
