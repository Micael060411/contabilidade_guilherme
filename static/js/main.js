/**
 * GS Contabilidade - JavaScript Principal
 * Funcionalidades interativas do site
 */

(function() {
    'use strict';

    // ==================== VARIÁVEIS GLOBAIS ====================
    const header = document.getElementById('header');
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');

    // ==================== HERO MODERN CAROUSEL ====================
    const slides = document.querySelectorAll('.hero-modern__slide');
    const indicators = document.querySelectorAll('.hero-modern__indicator');
    const prevBtn = document.querySelector('.hero-modern__nav--prev');
    const nextBtn = document.querySelector('.hero-modern__nav--next');
    
    if (slides.length > 0) {
        let currentSlide = 0;
        let autoplayTimer;
        const slideInterval = 7000; // Aumentado de 5000 para 7000ms
        const carousel = document.querySelector('.hero-modern__carousel');
        let slideDirection = 'next'; // 'next' ou 'prev'

        function setCarouselMaxHeight() {
            if (carousel && slides.length > 0) {
                let maxHeight = 0;
                
                // Temporariamente torna todos os slides visíveis
                slides.forEach((slide) => {
                    slide.style.position = 'static';
                    slide.style.transform = 'none';
                    slide.style.opacity = '1';
                    slide.style.visibility = 'visible';
                    slide.style.display = 'flex';
                });
                
                // Força reflow completo
                carousel.offsetHeight;
                
                // Aguarda um frame para garantir renderização
                setTimeout(() => {
                    slides.forEach((slide) => {
                        const rect = slide.getBoundingClientRect();
                        const height = Math.ceil(rect.height);
                        if (height > maxHeight) {
                            maxHeight = height;
                        }
                    });
                    
                    // Restaura o estado dos slides
                    slides.forEach((slide, index) => {
                        slide.style.position = '';
                        slide.style.transform = '';
                        slide.style.opacity = '';
                        slide.style.visibility = '';
                        slide.style.display = '';
                        
                        if (index !== currentSlide) {
                            slide.classList.remove('hero-modern__slide--active');
                        }
                    });
                    
                    // Aplica a altura máxima
                    if (maxHeight > 0) {
                        carousel.style.minHeight = maxHeight + 'px';
                        carousel.style.height = maxHeight + 'px';
                        
                        // Força todos os slides a terem a mesma altura
                        slides.forEach(slide => {
                            slide.style.minHeight = maxHeight + 'px';
                        });
                    }
                }, 50);
            }
        }

        function goToSlide(n, direction = 'next') {
            slideDirection = direction;
            
            // Remove classes de direção do slide anterior
            slides.forEach(slide => {
                slide.classList.remove('hero-modern__slide--active');
                slide.classList.remove('hero-modern__slide--prev');
            });
            
            indicators.forEach(ind => {
                ind.classList.remove('hero-modern__indicator--active');
                const line = ind.querySelector('.hero-modern__indicator-line');
                if (line) line.style.animation = 'none';
            });

            // Ajusta índice
            if (n >= slides.length) currentSlide = 0;
            else if (n < 0) currentSlide = slides.length - 1;
            else currentSlide = n;

            // Ativa novo slide
            slides[currentSlide].classList.add('hero-modern__slide--active');
            indicators[currentSlide].classList.add('hero-modern__indicator--active');
            
            // Reinicia animação da barra
            const activeLine = indicators[currentSlide].querySelector('.hero-modern__indicator-line');
            if (activeLine) {
                setTimeout(() => {
                    activeLine.style.animation = `progressBar ${slideInterval}ms linear`;
                }, 50);
            }
        }

        function nextSlide() {
            goToSlide(currentSlide + 1, 'next');
        }

        function prevSlide() {
            goToSlide(currentSlide - 1, 'prev');
        }

        function scheduleNextAutoplay() {
            stopAutoplay();
            autoplayTimer = setTimeout(() => {
                nextSlide();
                scheduleNextAutoplay();
            }, slideInterval);
        }

        function startAutoplay() {
            scheduleNextAutoplay();
        }

        function stopAutoplay() {
            if (autoplayTimer) {
                clearTimeout(autoplayTimer);
                autoplayTimer = null;
            }
        }

        function resetAutoplay() {
            scheduleNextAutoplay();
        }

        // Event listeners
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoplay();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoplay();
            });
        }

        // Indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                goToSlide(index);
                resetAutoplay();
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
                resetAutoplay();
            }
            if (e.key === 'ArrowRight') {
                nextSlide();
                resetAutoplay();
            }
        });

        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        
        if (carousel) {
            carousel.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            });

            carousel.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });

            function handleSwipe() {
                if (touchEndX < touchStartX - 50) {
                    nextSlide();
                    resetAutoplay();
                }
                if (touchEndX > touchStartX + 50) {
                    prevSlide();
                    resetAutoplay();
                }
            }

            // Pause on hover
            carousel.addEventListener('mouseenter', stopAutoplay);
            carousel.addEventListener('mouseleave', startAutoplay);
        }

        // Start autoplay
        startAutoplay();
        
        // Initialize first slide animation
        const firstLine = indicators[0].querySelector('.hero-modern__indicator-line');
        if (firstLine) {
            firstLine.style.animation = `progressBar ${slideInterval}ms linear`;
        }

        // Define altura máxima inicial
        setTimeout(() => {
            setCarouselMaxHeight();
        }, 100);

        // Recalcula altura ao redimensionar a janela com debounce
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                setCarouselMaxHeight();
                resetAutoplay();
            }, 250);
        });

        // Pausa quando aba perde foco e retoma ao voltar
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                stopAutoplay();
            } else {
                resetAutoplay();
            }
        });

        window.addEventListener('blur', stopAutoplay);
        window.addEventListener('focus', resetAutoplay);
    }

    // ==================== MOBILE MENU ====================
    
    // Abrir menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    // Fechar menu
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    // Fechar menu ao clicar nos links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('show-menu') && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target)) {
            navMenu.classList.remove('show-menu');
        }
    });

    // ==================== SCROLL HEADER ====================
    function scrollHeader() {
        if (this.scrollY >= 50) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    }
    
    window.addEventListener('scroll', scrollHeader);

    // ==================== SMOOTH SCROLL ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignora links vazios
            if (href === '#' || href === '#!') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==================== SCROLL REVEAL ANIMATIONS ====================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elementos para animar
    const animateElements = document.querySelectorAll(`
        .service-card,
        .testimonial-card,
        .value-card,
        .differential-card,
        .team-member,
        .service-detail,
        .mission__item,
        .stat-card
    `);

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ==================== FORMULÁRIO DE CONTATO ====================
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    function handleFormSubmit(e) {
        // Validação adicional pode ser feita aqui
        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const mensagem = document.getElementById('mensagem');

        if (!nome.value.trim()) {
            e.preventDefault();
            showAlert('Por favor, preencha seu nome.', 'error');
            nome.focus();
            return;
        }

        if (!email.value.trim() || !isValidEmail(email.value)) {
            e.preventDefault();
            showAlert('Por favor, insira um e-mail válido.', 'error');
            email.focus();
            return;
        }

        if (!mensagem.value.trim()) {
            e.preventDefault();
            showAlert('Por favor, escreva uma mensagem.', 'error');
            mensagem.focus();
            return;
        }

        // Se chegou aqui, o formulário é válido
        // Deixa o submit padrão acontecer ou usa AJAX
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showAlert(message, type = 'info') {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert--${type}`;
        alertDiv.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            ${message}
        `;

        const container = document.querySelector('.container');
        if (container) {
            container.insertBefore(alertDiv, container.firstChild);

            // Remove após 5 segundos
            setTimeout(() => {
                alertDiv.style.opacity = '0';
                setTimeout(() => alertDiv.remove(), 300);
            }, 5000);
        }
    }

    // ==================== TELEFONE MASK ====================
    const telefoneInput = document.getElementById('telefone');
    
    if (telefoneInput) {
        telefoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length <= 11) {
                if (value.length <= 2) {
                    value = value.replace(/^(\d{0,2})/, '($1');
                } else if (value.length <= 6) {
                    value = value.replace(/^(\d{2})(\d{0,4})/, '($1) $2');
                } else if (value.length <= 10) {
                    value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
                } else {
                    value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
                }
            }
            
            e.target.value = value;
        });
    }

    // ==================== SCROLL TO TOP BUTTON ====================
    const scrollTopBtn = createScrollTopButton();
    
    function createScrollTopButton() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        btn.className = 'scroll-top-btn';
        btn.setAttribute('aria-label', 'Voltar ao topo');
        
        btn.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 30px;
            width: 50px;
            height: 50px;
            background-color: var(--gray-800);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 99;
            transition: all 0.3s ease;
        `;
        
        btn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btn.style.display = 'flex';
            } else {
                btn.style.display = 'none';
            }
        });
        
        document.body.appendChild(btn);
        return btn;
    }

    // ==================== LAZY LOADING IMAGES ====================
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));

    // ==================== ACTIVE LINK HIGHLIGHT ====================
    function highlightActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if (navLink) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightActiveLink);

    // ==================== PRELOADER (OPCIONAL) ====================
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        }
    });

    // ==================== PRINT ====================
    window.addEventListener('beforeprint', () => {
        navMenu.classList.remove('show-menu');
    });

    // ==================== ESTATÍSTICAS ANIMADAS ====================
    const statNumbers = document.querySelectorAll('.hero__stat-number, .stat-card__number');
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    function animateNumber(element) {
        const text = element.textContent;
        const hasPlus = text.startsWith('+');
        const hasPercent = text.endsWith('%');
        const number = parseInt(text.replace(/\D/g, ''));
        
        if (isNaN(number)) return;

        const duration = 2000;
        const steps = 60;
        const stepValue = number / steps;
        const stepDuration = duration / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += stepValue;
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }
            
            let displayValue = Math.floor(current).toString();
            if (hasPlus) displayValue = '+' + displayValue;
            if (hasPercent) displayValue += '%';
            
            element.textContent = displayValue;
        }, stepDuration);
    }

    // ==================== CONSOLE MESSAGE ====================
    console.log('%c GS Contabilidade ', 'background: #2563eb; color: white; font-size: 20px; padding: 10px;');
    console.log('%c Desenvolvido com ❤️ usando Flask e JavaScript moderno ', 'font-size: 12px; color: #6b7280;');

})();
