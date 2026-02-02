@echo off
echo ========================================
echo   Iniciando GS Contabilidade
echo ========================================
echo.

if not exist venv (
    echo Ambiente virtual nao encontrado!
    echo Execute setup.bat primeiro.
    pause
    exit /b 1
)

echo Ativando ambiente virtual...
call venv\Scripts\activate.bat

echo Iniciando servidor Flask...
echo.
echo ========================================
echo   Servidor rodando em:
echo   http://localhost:5000
echo.
echo   Pressione Ctrl+C para parar
echo ========================================
echo.

python app.py
