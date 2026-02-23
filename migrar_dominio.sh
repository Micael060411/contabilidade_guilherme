#!/bin/bash

# Script para migrar o domínio de gs.contabilidade.mamconnect.com.br para contabilidadegsoficial.com
# Data: 06/02/2026

set -e

echo "=========================================="
echo "Migração de Domínio - Contabilidade GS"
echo "=========================================="
echo ""
echo "De: gs.contabilidade.mamconnect.com.br"
echo "Para: contabilidadegsoficial.com"
echo ""

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 1. Desabilitar configuração antiga
echo -e "${YELLOW}[1/7] Desabilitando configuração antiga...${NC}"
if [ -f /etc/apache2/sites-enabled/gs.contabilidade.mamconnect.com.br.conf ]; then
    sudo a2dissite gs.contabilidade.mamconnect.com.br.conf
    echo -e "${GREEN}✓ Configuração antiga desabilitada${NC}"
else
    echo -e "${YELLOW}! Configuração antiga não encontrada (já pode estar desabilitada)${NC}"
fi

# 2. Copiar nova configuração
echo -e "${YELLOW}[2/7] Copiando nova configuração do Apache...${NC}"
sudo cp /home/mikael/contabilidadegsoficial.com.conf /etc/apache2/sites-available/contabilidadegsoficial.com.conf
echo -e "${GREEN}✓ Arquivo copiado para /etc/apache2/sites-available/${NC}"

# 3. Habilitar nova configuração
echo -e "${YELLOW}[3/7] Habilitando nova configuração...${NC}"
sudo a2ensite contabilidadegsoficial.com.conf
echo -e "${GREEN}✓ Site habilitado${NC}"

# 4. Verificar módulos necessários
echo -e "${YELLOW}[4/7] Verificando módulos do Apache...${NC}"
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod headers
echo -e "${GREEN}✓ Módulos habilitados${NC}"

# 5. Testar configuração
echo -e "${YELLOW}[5/7] Testando configuração do Apache...${NC}"
sudo apache2ctl configtest
echo -e "${GREEN}✓ Configuração válida${NC}"

# 6. Recarregar Apache
echo -e "${YELLOW}[6/7] Recarregando Apache...${NC}"
sudo systemctl reload apache2
echo -e "${GREEN}✓ Apache recarregado${NC}"

# 7. Instruções para SSL
echo ""
echo -e "${YELLOW}[7/7] Configuração do SSL com Certbot${NC}"
echo ""
echo -e "${RED}IMPORTANTE: Antes de executar o certbot, certifique-se que:${NC}"
echo "  1. O DNS está configurado para contabilidadegsoficial.com apontar para este servidor"
echo "  2. A porta 80 está aberta no firewall"
echo ""
echo -e "${YELLOW}Para obter o certificado SSL, execute:${NC}"
echo ""
echo "  sudo certbot --apache -d contabilidadegsoficial.com -d www.contabilidadegsoficial.com"
echo ""
echo -e "${GREEN}=========================================="
echo "Migração concluída!"
echo "==========================================${NC}"
echo ""
echo "Próximos passos:"
echo "  1. Configure o DNS para apontar para este servidor"
echo "  2. Execute o comando certbot acima para obter SSL"
echo "  3. Teste o acesso em http://contabilidadegsoficial.com"
echo ""

