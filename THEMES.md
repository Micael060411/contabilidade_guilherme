# 🎨 Guia de Themes - GS Contabilidade

## 🌈 Themes Disponíveis

O site agora possui **10 themes profissionais** prontos para uso!

### 1️⃣ Azul Moderno (Padrão)
- **Cores**: Azul vibrante + Verde água
- **Logo**: Dourada
- **Indicado para**: Contabilidade tradicional e profissional
- **Código**: `azul-moderno`

### 2️⃣ Azul Elegante
- **Cores**: Azul escuro + Verde esmeralda
- **Logo**: Dourada
- **Indicado para**: Seriedade e confiança
- **Código**: `azul-elegante`

### 3️⃣ Dourado Premium
- **Cores**: Dourado + Preto
- **Logo**: Dourada
- **Indicado para**: Luxo e exclusividade
- **Código**: `dourado-premium`

### 4️⃣ Verde Profissional
- **Cores**: Verde + Turquesa
- **Logo**: Branca
- **Indicado para**: Crescimento e prosperidade
- **Código**: `verde-profissional`

### 5️⃣ Escuro Moderno (Dark Mode)
- **Cores**: Azul claro + Verde em fundo escuro
- **Logo**: Branca
- **Indicado para**: Visual moderno e sofisticado
- **Código**: `escuro-moderno`

### 6️⃣ Roxo Corporativo
- **Cores**: Roxo + Rosa
- **Logo**: Branca
- **Indicado para**: Inovação e criatividade
- **Código**: `roxo-corporativo`

### 7️⃣ Laranja Criativo
- **Cores**: Laranja + Turquesa
- **Logo**: Branca
- **Indicado para**: Energia e dinamismo
- **Código**: `laranja-criativo`

### 8️⃣ Cinza Minimalista
- **Cores**: Cinza + Turquesa
- **Logo**: Dourada
- **Indicado para**: Elegância minimalista
- **Código**: `cinza-minimalista`

### 9️⃣ Vermelho Energia
- **Cores**: Vermelho + Turquesa
- **Logo**: Branca
- **Indicado para**: Impacto e atenção
- **Código**: `vermelho-energia`

### 🔟 Turquesa Refrescante
- **Cores**: Turquesa + Verde
- **Logo**: Branca
- **Indicado para**: Modernidade e frescor
- **Código**: `turquesa-refrescante`

## 🔄 Como Trocar de Theme

### Método 1: Atalho de Teclado (Recomendado)
```
Pressione: Ctrl + Alt + T
```
Abrirá um seletor visual com preview de todos os themes!

### Método 2: Console do Navegador
```javascript
// Ver todos os themes disponíveis
showThemes()

// Trocar para um theme específico
changeTheme("dourado-premium")
changeTheme("verde-profissional")
changeTheme("escuro-moderno")
```

### Método 3: Configuração no Código
Edite o arquivo `config.py`:

```python
# Adicione nas configurações
DEFAULT_THEME = 'azul-moderno'  # Mude para o theme desejado
```

### Método 4: Via HTML
Adicione no `<html>` ou `<body>`:

```html
<html data-theme="dourado-premium">
<!-- ou -->
<body data-theme="verde-profissional">
```

## 🎯 Escolhendo o Theme Ideal

### Para Contabilidade Tradicional
- ✅ **Azul Moderno** (padrão)
- ✅ **Azul Elegante**
- ✅ **Cinza Minimalista**

### Para Contabilidade Premium/Luxo
- ✅ **Dourado Premium**
- ✅ **Escuro Moderno**

### Para Contabilidade Inovadora
- ✅ **Verde Profissional**
- ✅ **Roxo Corporativo**
- ✅ **Turquesa Refrescante**

### Para Contabilidade Dinâmica
- ✅ **Laranja Criativo**
- ✅ **Vermelho Energia**

## 🖼️ Logos Incluídas

O sistema troca automaticamente entre 3 versões da logo:

### 📄 Logo Branca
- Usada em: Themes escuros e com cores vibrantes
- Arquivo: `logo-branca.png`

### 🏆 Logo Dourada
- Usada em: Themes premium e elegantes
- Arquivo: `logo-dourada.png`

### ⚫ Logo Preta
- Usada em: Fundos claros (se necessário)
- Arquivo: `logo-preta.png`

O sistema escolhe automaticamente a logo mais adequada para cada theme!

## 💡 Personalizando Ainda Mais

### Criar Seu Próprio Theme

Edite `static/css/themes.css` e adicione:

```css
[data-theme="seu-theme"] {
  --primary-color: #SUA_COR_AQUI;
  --primary-dark: #COR_MAIS_ESCURA;
  --primary-light: #COR_MAIS_CLARA;
  
  --secondary-color: #SUA_COR_SECUNDARIA;
  --secondary-dark: #COR_MAIS_ESCURA;
  
  --accent-color: #COR_DE_DESTAQUE;
  
  --gradient-primary: linear-gradient(135deg, #COR1 0%, #COR2 100%);
  --gradient-secondary: linear-gradient(135deg, #COR3 0%, #COR4 100%);
  --gradient-hero: linear-gradient(135deg, #COR5 0%, #COR6 100%);
  
  --logo-color: 'dourada'; /* ou 'branca' ou 'preta' */
}
```

### Ajustar Cores de Um Theme

Se quiser apenas ajustar levemente um theme existente:

```css
[data-theme="azul-moderno"] {
  --primary-color: #0052a3; /* Tom de azul diferente */
}
```

## 🔧 Funcionalidades Avançadas

### Detectar Theme Atual
```javascript
const currentTheme = document.documentElement.getAttribute('data-theme');
console.log('Theme atual:', currentTheme);
```

### Escutar Mudanças de Theme
```javascript
window.addEventListener('themeChanged', (e) => {
  console.log('Theme mudou para:', e.detail.theme);
  // Seu código aqui
});
```

### Resetar para Theme Padrão
```javascript
changeTheme('azul-moderno')
```

### Limpar Preferência Salva
```javascript
localStorage.removeItem('gs-contabilidade-theme')
location.reload()
```

## 📱 Themes no Mobile

Todos os themes são **100% responsivos** e funcionam perfeitamente em:
- 📱 Smartphones
- 📱 Tablets
- 💻 Desktops
- 🖥️ Monitores wide

## ⚡ Performance

- ✅ Transições suaves entre themes
- ✅ Preferência salva no navegador
- ✅ Logo otimizada para carregamento rápido
- ✅ Sem impacto na velocidade do site

## 🎨 Dicas de Design

### Combinações Recomendadas

**Para site corporativo sério:**
```
Theme: Azul Elegante ou Cinza Minimalista
Logo: Dourada
```

**Para site moderno e jovem:**
```
Theme: Turquesa Refrescante ou Roxo Corporativo
Logo: Branca
```

**Para site premium/luxo:**
```
Theme: Dourado Premium ou Escuro Moderno
Logo: Dourada
```

**Para site energético:**
```
Theme: Laranja Criativo ou Vermelho Energia
Logo: Branca
```

## 🐛 Solução de Problemas

### Logo não aparece
```javascript
// Verifique se as imagens existem
console.log('Logos:', [
  '/static/images/logo-branca.png',
  '/static/images/logo-dourada.png',
  '/static/images/logo-preta.png'
])
```

### Theme não muda
```javascript
// Limpe o cache
localStorage.clear()
location.reload()
```

### Cores estranhas
```javascript
// Resete para padrão
changeTheme('azul-moderno')
```

## 📊 Testando Themes

Para testar rapidamente todos os themes:

```javascript
// Teste automático (muda a cada 3 segundos)
let themes = Object.keys({
  'azul-moderno': 1,
  'azul-elegante': 1,
  'dourado-premium': 1,
  'verde-profissional': 1,
  'escuro-moderno': 1,
  'roxo-corporativo': 1,
  'laranja-criativo': 1,
  'cinza-minimalista': 1,
  'vermelho-energia': 1,
  'turquesa-refrescante': 1
});
let i = 0;
setInterval(() => {
  changeTheme(themes[i % themes.length]);
  i++;
}, 3000);
```

## 🎯 Recomendação Final

**Para GS Contabilidade, recomendamos:**

1. **Theme Principal**: `azul-moderno` ou `azul-elegante`
   - Transmite profissionalismo e confiança
   - Cor tradicional da contabilidade

2. **Theme Alternativo**: `dourado-premium`
   - Para clientes premium
   - Luxo e exclusividade

3. **Theme Diferencial**: `verde-profissional`
   - Prosperidade e crescimento
   - Moderno e confiável

---

**💡 Dica Pro**: Deixe o seletor de theme ativo durante o desenvolvimento (Ctrl + Alt + T) e escolha o que mais combina com sua marca!

**🎨 Lembre-se**: O theme escolhido deve refletir a identidade da sua marca e o público que você atende.
