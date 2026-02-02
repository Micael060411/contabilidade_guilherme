/**
 * Theme Switcher - Gerenciador de Themes
 * Permite trocar o theme do site facilmente
 */

(function() {
    'use strict';

    // ==================== CONFIGURAÇÕES ====================
    const THEMES = {
        'azul-moderno': {
            name: 'Azul Moderno',
            logo: 'dourada',
            description: 'Theme padrão azul profissional'
        },
        'azul-elegante': {
            name: 'Azul Elegante',
            logo: 'dourada',
            description: 'Azul escuro sofisticado'
        },
        'dourado-premium': {
            name: 'Dourado Premium',
            logo: 'dourada',
            description: 'Luxo e elegância'
        },
        'verde-profissional': {
            name: 'Verde Profissional',
            logo: 'branca',
            description: 'Verde confiável'
        },
        'escuro-moderno': {
            name: 'Escuro Moderno',
            logo: 'branca',
            description: 'Dark mode elegante'
        },
        'roxo-corporativo': {
            name: 'Roxo Corporativo',
            logo: 'branca',
            description: 'Criativo e moderno'
        },
        'laranja-criativo': {
            name: 'Laranja Criativo',
            logo: 'branca',
            description: 'Energia e criatividade'
        },
        'cinza-minimalista': {
            name: 'Cinza Minimalista',
            logo: 'dourada',
            description: 'Minimalismo elegante'
        },
        'vermelho-energia': {
            name: 'Vermelho Energia',
            logo: 'branca',
            description: 'Vibrante e energético'
        },
        'turquesa-refrescante': {
            name: 'Turquesa Refrescante',
            logo: 'branca',
            description: 'Fresco e moderno'
        }
    };

    const DEFAULT_THEME = 'azul-moderno';
    const STORAGE_KEY = 'gs-contabilidade-theme';

    // ==================== GERENCIADOR DE THEME ====================
    class ThemeManager {
        constructor() {
            // Pegar o theme do servidor (data-theme no HTML)
            const serverTheme = document.documentElement.getAttribute('data-theme');
            const savedTheme = this.getSavedTheme();
            
            // Se não tem theme salvo, usar o do servidor
            if (!savedTheme && serverTheme) {
                this.currentTheme = serverTheme;
            } else {
                // Usar o salvo, mas se for diferente do servidor, atualizar
                this.currentTheme = savedTheme || serverTheme || DEFAULT_THEME;
            }
            
            this.init();
        }

        init() {
            this.applyTheme(this.currentTheme);
            this.createThemeSwitcher();
        }

        applyTheme(themeName) {
            if (!THEMES[themeName]) {
                console.warn(`Theme "${themeName}" não encontrado. Usando padrão.`);
                themeName = DEFAULT_THEME;
            }

            // Aplicar theme no HTML
            document.documentElement.setAttribute('data-theme', themeName);
            document.body.setAttribute('data-theme', themeName);

            // Atualizar logo
            this.updateLogo(THEMES[themeName].logo);

            // Salvar preferência
            this.saveTheme(themeName);
            this.currentTheme = themeName;

            // Disparar evento personalizado
            window.dispatchEvent(new CustomEvent('themeChanged', {
                detail: { theme: themeName }
            }));
        }

        updateLogo(logoColor) {
            const logos = document.querySelectorAll('.logo-image');
            logos.forEach(logo => {
                logo.src = `/static/images/logo-${logoColor}.png`;
                logo.alt = `GS Contabilidade - Logo ${logoColor}`;
            });
        }

        saveTheme(themeName) {
            localStorage.setItem(STORAGE_KEY, themeName);
        }

        getSavedTheme() {
            return localStorage.getItem(STORAGE_KEY);
        }

        createThemeSwitcher() {
            // Criar botão de troca de theme (visível apenas para admins/desenvolvedores)
            // Atalho: Ctrl + Alt + T
            console.log('🔑 Atalho de theme registrado: Ctrl + Alt + T');
            document.addEventListener('keydown', (e) => {
                if (e.ctrlKey && e.altKey && e.key === 'T') {
                    e.preventDefault();
                    console.log('🎨 Atalho Ctrl + Alt + T pressionado!');
                    this.showThemeSelector();
                }
            });

            // Adicionar no console para fácil acesso
            window.changeTheme = (themeName) => this.applyTheme(themeName);
            window.showThemes = () => this.listThemes();
            
            // Criar botão flutuante
            this.createFloatingButton();
        }

        createFloatingButton() {
            const btn = document.createElement('button');
            btn.className = 'theme-float-btn';
            btn.innerHTML = '🎨';
            btn.title = 'Trocar Theme (Ctrl + Alt + T)';
            btn.onclick = () => this.showThemeSelector();
            document.body.appendChild(btn);
            console.log('🎨 Botão flutuante de theme adicionado');
        }

        showThemeSelector() {
            const modal = this.createModal();
            document.body.appendChild(modal);
            
            // Fechar ao clicar fora
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        }

        createModal() {
            const modal = document.createElement('div');
            modal.className = 'theme-selector-modal';
            modal.innerHTML = `
                <div class="theme-selector">
                    <div class="theme-selector__header">
                        <h2>Escolha um Theme</h2>
                        <button class="theme-selector__close" onclick="this.closest('.theme-selector-modal').remove()">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="theme-selector__grid">
                        ${this.renderThemeOptions()}
                    </div>
                    <div class="theme-selector__footer">
                        <p>Pressione <kbd>Ctrl + Alt + T</kbd> para abrir este seletor</p>
                    </div>
                </div>
            `;

            // Adicionar estilos inline
            this.addModalStyles();

            return modal;
        }

        renderThemeOptions() {
            return Object.entries(THEMES).map(([key, theme]) => `
                <div class="theme-option ${key === this.currentTheme ? 'active' : ''}"
                     onclick="window.themeManager.applyTheme('${key}'); this.closest('.theme-selector-modal').remove();">
                    <div class="theme-option__preview" data-theme="${key}"></div>
                    <div class="theme-option__info">
                        <h3>${theme.name}</h3>
                        <p>${theme.description}</p>
                    </div>
                </div>
            `).join('');
        }

        addModalStyles() {
            if (document.getElementById('theme-selector-styles')) return;

            const styles = document.createElement('style');
            styles.id = 'theme-selector-styles';
            styles.textContent = `
                .theme-selector-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    animation: fadeIn 0.3s ease;
                }

                .theme-selector {
                    background: white;
                    border-radius: 20px;
                    max-width: 900px;
                    width: 90%;
                    max-height: 80vh;
                    overflow-y: auto;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                }

                .theme-selector__header {
                    padding: 2rem;
                    border-bottom: 1px solid #e5e7eb;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .theme-selector__header h2 {
                    margin: 0;
                    font-size: 1.5rem;
                }

                .theme-selector__close {
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #6b7280;
                    transition: color 0.2s;
                }

                .theme-selector__close:hover {
                    color: #1f2937;
                }

                .theme-selector__grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1rem;
                    padding: 2rem;
                }

                .theme-option {
                    cursor: pointer;
                    border: 2px solid #e5e7eb;
                    border-radius: 12px;
                    padding: 1rem;
                    transition: all 0.2s;
                }

                .theme-option:hover {
                    border-color: var(--primary-color);
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                }

                .theme-option.active {
                    border-color: var(--primary-color);
                    background: #f9fafb;
                }

                .theme-option__preview {
                    height: 80px;
                    border-radius: 8px;
                    margin-bottom: 1rem;
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                }

                .theme-option__info h3 {
                    font-size: 1rem;
                    margin: 0 0 0.25rem 0;
                }

                .theme-option__info p {
                    font-size: 0.875rem;
                    color: #6b7280;
                    margin: 0;
                }

                .theme-selector__footer {
                    padding: 1.5rem 2rem;
                    border-top: 1px solid #e5e7eb;
                    text-align: center;
                    color: #6b7280;
                    font-size: 0.875rem;
                }

                kbd {
                    background: #f3f4f6;
                    padding: 0.25rem 0.5rem;
                    border-radius: 4px;
                    font-family: monospace;
                    font-size: 0.875rem;
                    border: 1px solid #d1d5db;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @media (max-width: 768px) {
                    .theme-selector__grid {
                        grid-template-columns: 1fr;
                    }
                }

                /* Botão flutuante de theme */
                .theme-float-btn {
                    position: fixed;
                    bottom: 80px;
                    right: 20px;
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, #0066cc 0%, #00c896 100%);
                    border: none;
                    border-radius: 50%;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
                    transition: all 0.3s ease;
                    z-index: 999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .theme-float-btn:hover {
                    transform: scale(1.1);
                    box-shadow: 0 6px 20px rgba(0, 102, 204, 0.4);
                }

                .theme-float-btn:active {
                    transform: scale(0.95);
                }
            `;
            document.head.appendChild(styles);
        }

        listThemes() {
            console.log('%c Themes Disponíveis ', 'background: #0066cc; color: white; font-size: 16px; padding: 8px;');
            console.table(THEMES);
            console.log('%c Como usar: ', 'font-weight: bold; font-size: 14px;');
            console.log('1. No console: changeTheme("nome-do-theme")');
            console.log('2. Atalho: Ctrl + Alt + T');
            console.log('3. Exemplos:');
            Object.keys(THEMES).forEach(theme => {
                console.log(`   changeTheme("${theme}")`);
            });
        }
    }

    // ==================== INICIALIZAÇÃO ====================
    window.themeManager = new ThemeManager();

    // Log de boas-vindas
    console.log('%c 🎨 Theme System Loaded ', 'background: #0066cc; color: white; font-size: 14px; padding: 5px;');
    console.log('Digite showThemes() para ver todos os themes disponíveis');
    console.log('Digite changeTheme("nome-do-theme") para mudar o theme');
    console.log('Ou pressione Ctrl + Alt + T');

})();
