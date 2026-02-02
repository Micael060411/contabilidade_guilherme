# 🚀 Início Rápido - GS Contabilidade

Este guia te ajudará a colocar o site no ar em **menos de 5 minutos**!

## ⚡ Método Rápido (Automático)

### Windows
```bash
# Execute o script de setup
setup.bat

# Depois execute
run.bat
```

### Linux/Mac
```bash
# Dê permissão e execute o setup
chmod +x setup.sh
./setup.sh

# Depois execute
chmod +x run.sh
./run.sh
```

## 📋 Método Manual

### 1. Instalar Dependências

```bash
# Criar ambiente virtual
python -m venv venv

# Ativar ambiente virtual
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Instalar pacotes
pip install -r requirements.txt
```

### 2. Configurar Variáveis de Ambiente

```bash
# Copiar arquivo de exemplo
copy .env.example .env  # Windows
cp .env.example .env    # Linux/Mac

# Editar .env e mudar SECRET_KEY
```

### 3. Executar

```bash
python app.py
```

### 4. Acessar

Abra seu navegador em: **http://localhost:5000**

## ✅ Checklist de Verificação

- [ ] Python 3.8+ instalado
- [ ] pip instalado
- [ ] Ambiente virtual criado
- [ ] Dependências instaladas
- [ ] Arquivo .env configurado
- [ ] Servidor rodando
- [ ] Site acessível no navegador

## 🔧 Personalizações Básicas

### Mudar Nome da Empresa

Edite em `templates/base.html`:
```html
<span>SEU NOME AQUI</span>
```

### Mudar Cores

Edite em `static/css/style.css`:
```css
:root {
  --primary-color: #2563eb;  /* Sua cor aqui */
}
```

### Mudar Telefone/WhatsApp

Procure por `5511988887777` e substitua pelo seu número.

## ❓ Problemas Comuns

### "Python não reconhecido"
- Instale Python de python.org
- Marque "Add to PATH" na instalação

### "pip não reconhecido"
```bash
python -m pip install --upgrade pip
```

### Porta 5000 já em uso
Edite `app.py`:
```python
app.run(debug=True, port=5001)  # Use outra porta
```

## 📚 Próximos Passos

1. ✅ Site funcionando localmente
2. 📝 Personalize os textos
3. 🎨 Ajuste cores e estilos
4. 📧 Configure email no formulário
5. 🚀 Faça deploy em produção

## 🆘 Precisa de Ajuda?

- 📖 Leia o [README.md](README.md) completo
- 💬 Abra uma issue no GitHub
- 📧 Entre em contato

---

**Boa sorte com seu projeto! 🎉**
