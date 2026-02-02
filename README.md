# 🧾 GS Contabilidade - Site Institucional

Site moderno e modular para escritório de contabilidade, desenvolvido em Python Flask com design responsivo e pronto para futuras implementações de login, área do usuário e outras funcionalidades.

## 📋 Sumário

- [Características](#características)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Funcionalidades](#funcionalidades)
- [Futuras Implementações](#futuras-implementações)
- [Personalização](#personalização)
- [Deploy](#deploy)

## ✨ Características

- ✅ **Design Moderno**: Interface limpa e profissional
- ✅ **10 Themes Profissionais**: Troque as cores do site com um clique!
- ✅ **Logos Integradas**: 3 versões (branca, dourada e preta) que trocam automaticamente
- ✅ **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- ✅ **Modular**: Estrutura organizada com blueprints Flask
- ✅ **SEO Otimizado**: Meta tags e estrutura semântica
- ✅ **Animações Suaves**: Scroll reveal e transições elegantes
- ✅ **Formulário de Contato**: Sistema de envio de mensagens
- ✅ **Botão WhatsApp Flutuante**: Fácil comunicação
- ✅ **Pronto para Expansão**: Estrutura preparada para login e área administrativa

## 🚀 Tecnologias

### Backend
- **Python 3.8+**
- **Flask 3.0.0**: Framework web
- **python-dotenv**: Gerenciamento de variáveis de ambiente

### Frontend
- **HTML5**: Estrutura semântica
- **CSS3**: Variáveis CSS, Grid, Flexbox
- **JavaScript (Vanilla)**: Sem dependências
- **Font Awesome 6.5.1**: Ícones
- **Google Fonts (Inter)**: Tipografia moderna

## 📁 Estrutura do Projeto

```
guilherme_contador/
│
├── app.py                      # Aplicação principal Flask
├── config.py                   # Configurações da aplicação
├── requirements.txt            # Dependências Python
├── .env.example               # Exemplo de variáveis de ambiente
├── README.md                  # Este arquivo
│
├── routes/                    # Módulos de rotas (blueprints)
│   ├── __init__.py
│   └── main.py               # Rotas principais do site
│
├── static/                   # Arquivos estáticos
│   ├── css/
│   │   └── style.css        # CSS principal
│   └── js/
│       └── main.js          # JavaScript principal
│
└── templates/               # Templates HTML
    ├── base.html           # Template base
    ├── index.html          # Página inicial
    ├── servicos.html       # Página de serviços
    ├── sobre.html          # Página sobre nós
    ├── diferenciais.html   # Página de diferenciais
    ├── depoimentos.html    # Página de depoimentos
    └── contato.html        # Página de contato
```

## 📦 Instalação

### Pré-requisitos

- Python 3.8 ou superior
- pip (gerenciador de pacotes Python)
- Git (opcional)

### Passo a Passo

1. **Clone ou baixe o projeto**
```bash
git clone <url-do-repositorio>
cd guilherme_contador
```

2. **Crie um ambiente virtual** (recomendado)
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

3. **Instale as dependências**
```bash
pip install -r requirements.txt
```

4. **Configure as variáveis de ambiente**
```bash
# Copie o arquivo de exemplo
copy .env.example .env

# Edite o .env e adicione suas configurações
# No mínimo, altere a SECRET_KEY
```

5. **Execute a aplicação**
```bash
python app.py
```

6. **Acesse no navegador**
```
http://localhost:5000
```

## 🎯 Como Usar

### Desenvolvimento

Para rodar em modo desenvolvimento:

```bash
# Com debug ativado
python app.py
```

O servidor será iniciado em `http://localhost:5000` com hot-reload ativado.

### Páginas Disponíveis

- **Home**: `/` - Página inicial com visão geral
- **Serviços**: `/servicos` - Lista detalhada de serviços
- **Sobre**: `/sobre` - História e valores da empresa
- **Diferenciais**: `/diferenciais` - Diferenciais competitivos
- **Depoimentos**: `/depoimentos` - Feedback de clientes
- **Contato**: `/contato` - Formulário e informações de contato

### Personalizando Conteúdo

1. **Textos**: Edite os arquivos HTML em `templates/`
2. **Estilos**: Modifique `static/css/style.css`
3. **Cores**: Use o sistema de themes! Pressione `Ctrl + Alt + T` no navegador
4. **Theme Padrão**: Altere em `config.py` → `DEFAULT_THEME`
5. **Funcionalidades**: Adicione lógica em `routes/main.py`

### 🎨 Sistema de Themes

O site possui **10 themes profissionais** prontos! 

**Trocar theme:**
- **Atalho**: Pressione `Ctrl + Alt + T` no navegador
- **Console**: Digite `changeTheme("nome-do-theme")`
- **Código**: Edite `DEFAULT_THEME` em `config.py`

**Themes disponíveis:**
- `azul-moderno` (padrão) - Profissional e confiável
- `azul-elegante` - Sofisticado e sério
- `dourado-premium` - Luxo e exclusividade
- `verde-profissional` - Crescimento e prosperidade
- `escuro-moderno` - Dark mode elegante
- `roxo-corporativo` - Criativo e inovador
- `laranja-criativo` - Energético e dinâmico
- `cinza-minimalista` - Elegante e minimalista
- `vermelho-energia` - Vibrante e impactante
- `turquesa-refrescante` - Fresco e moderno

📖 **Guia completo**: Veja [THEMES.md](THEMES.md)

## 🔧 Funcionalidades

### Implementadas

✅ **Navegação Responsiva**
- Menu hamburguer em mobile
- Menu fixo no topo
- Scroll suave entre seções

✅ **Formulário de Contato**
- Validação frontend
- Envio via POST
- Feedback visual ao usuário

✅ **Animações**
- Scroll reveal
- Transições suaves
- Contador animado nas estatísticas

✅ **SEO**
- Meta tags configuradas
- URLs amigáveis
- Estrutura semântica

✅ **Performance**
- CSS otimizado
- JavaScript vanilla (sem jQuery)
- Lazy loading preparado
Themes

O site vem com 10 themes profissionais prontos! Pressione **`Ctrl + Alt + T`** no navegador para experimentar todos.

Para mudar permanentemente, edite `config.py`:

```python
DEFAULT_THEME = 'dourado-premium'  # Escolha o seu favorito
```

Veja todos os themes disponíveis em [THEMES.md](THEMES.md)

### Logos

As logos já estão integradas! O sistema troca automaticamente entre 3 versões:
- **Logo Dourada**: Para themes premium e elegantes
- **Logo Branca**: Para themes escuros e vibrantes  
- **Logo Preta**: Para fundos claros

Suas logos estão em `static/images/`:
- `logo-dourada.png`
- `logo-branca.png`
- `logo-preta.png`

### Cores (Avançado)

Para criar um theme totalmente customizado, edite `static/css/themes
🔜 **Sistema de Login**
```python
# Estrutura já preparada em app.py
# from routes.auth import auth_bp
# app.register_blueprint(auth_bp, url_prefix='/auth')
```

🔜 **Área Administrativa**
```python
# from routes.admin import admin_bp
# app.register_blueprint(admin_bp, url_prefix='/admin')
```

🔜 **Banco de Dados**
```python
# Configurações prontas em config.py
# SQLALCHEMY_DATABASE_URI já configurada
```

## 🎨 Personalização

### Cores

Edite as variáveis CSS em `static/css/style.css`:

```css
:root {
  --primary-color: #2563eb;      /* Azul principal */
  --secondary-color: #10b981;    /* Verde secundário */
  --accent-color: #f59e0b;       /* Laranja destaque */
  /* ... outras cores ... */
}
```

### Logo

Substitua o ícone no header em `templates/base.html`:

```html
<a href="/" class="nav__logo">
    <i class="fas fa-calculator"></i>  <!-- Substitua aqui -->
    <span>GS Contabilidade</span>
</a>
```

### Informações de Contato

Edite os dados em `templates/contato.html` e `templates/base.html`:

```html
<!-- Telefone -->
<a href="tel:+5511988887777">(11) 98888-7777</a>

<!-- WhatsApp -->
<a href="https://wa.me/5511988887777">WhatsApp</a>

<!-- Email -->
<a href="mailto:contato@gscontabilidade.com.br">...</a>
```

## 🚀 Deploy

### Opções de Deploy

#### 1. **Heroku** (Grátis)

```bash
# Crie Procfile
echo "web: python app.py" > Procfile

# Crie runtime.txt
echo "python-3.11.0" > runtime.txt

# Deploy
heroku create seu-app
git push heroku main
```

#### 2. **Railway** (Recomendado)

1. Conecte seu repositório GitHub
2. Configure as variáveis de ambiente
3. Deploy automático

#### 3. **PythonAnywhere** (Grátis)

1. Faça upload dos arquivos
2. Configure o WSGI
3. Ative o aplicativo

#### 4. **VPS (DigitalOcean, AWS, etc.)**

```bash
# Instale dependências
sudo apt update
sudo apt install python3-pip nginx

# Configure Gunicorn
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app

# Configure Nginx como proxy reverso
```

### Variáveis de Ambiente para Produção

```env
FLASK_ENV=production
SECRET_KEY=sua-chave-secreta-aleatoria-aqui
# Adicione outras conforme necessário
```

## 📝 Configuração do Formulário de Contato

Para funcionar em produção, você precisa configurar o envio de emails:

### Opção 1: Flask-Mail

```python
# Adicione em requirements.txt
Flask-Mail==0.9.1

# Configure em config.py
MAIL_SERVER = 'smtp.gmail.com'
MAIL_PORT = 587
MAIL_USE_TLS = True
MAIL_USERNAME = 'seu-email@gmail.com'
MAIL_PASSWORD = 'sua-senha'
```

### Opção 2: API de Email (SendGrid, Mailgun)

```python
# Instale
pip install sendgrid

# Use na rota de contato
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
```

### Opção 3: Salvar no Banco de Dados

```python
# Configure SQLAlchemy
# Crie modelo Contact
# Salve os dados no banco
```

## 🔐 Segurança

### Recomendações

✅ Sempre use HTTPS em produção
✅ Configure CSRF protection
✅ Valide todos os inputs
✅ Use variáveis de ambiente para dados sensíveis
✅ Mantenha dependências atualizadas

```python
# Adicionar CSRF protection
from flask_wtf.csrf import CSRFProtect
csrf = CSRFProtect(app)
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 📞 Suporte

- **Email**: contato@gscontabilidade.com.br
- **WhatsApp**: (11) 98888-7777
- **Issues**: Abra uma issue no GitHub

## 🎓 Recursos de Aprendizado

- [Flask Documentation](https://flask.palletsprojects.com/)
- [Python.org](https://www.python.org/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)

---

**Desenvolvido com ❤️ usando Python Flask**

⭐ Se este projeto foi útil, considere dar uma estrela no GitHub!
