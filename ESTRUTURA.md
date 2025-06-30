# 📁 Estrutura de Diretórios – FilhosDeAndarilhoDK

Este documento apresenta a estrutura de arquivos e pastas do projeto **FilhosDeAndarilhoDK**, com comentários explicativos para facilitar o entendimento e a manutenção do site.

---

```plaintext
FilhosDeAndarilhoDK/
├── index.html              # Página principal do site
├── favicon.ico             # Ícone do site
├── LICENSE.txt             # Licença do projeto
├── README.md               # Documentação geral
├── ESTRUTURA.md            # Estrutura de diretórios (este arquivo)
│
├── assets/                 # Recursos estáticos
│   ├── css/                   # Estilos separados por página/seção
│   │   ├── aventuras-content.css
│   │   ├── bodystructure.css
│   │   ├── carta.css
│   │   ├── header.css
│   │   ├── index-content-grid.css
│   │   ├── main.css
│   │   └── members.css
│   │
│   ├── img/                    # Imagens organizadas por função (apenas pastas listadas)
│   │   ├── backgrounds/
│   │   ├── content/
│   │   ├── icons/
│   │   └── logos/
│   │
│   └── js/                     # Scripts JavaScript principais
│       ├── articles.js
│       ├── mainCnt.js
│       ├── menu.js
│       └── vidList.js
│
├── data/
│   ├── artigos.json             # Lista de artigos exibidos no site
│   ├── carta-assinada.pdf       # Documento assinado em PDF
│   └── videos.json              # Dados dos vídeos
│
└── pages/
    ├── alistarse.html           # Página de alistamento
    ├── aventuras.html           # Página de aventuras
    ├── carta.html               # Página da carta
    ├── comunidade.html          # Sobre a comunidade (desativado/fora do site)
    ├── membros.html             # Página de membros
    ├── screenshots.html         # Galeria de imagens do site
    │
    ├── articles/                # Artigos e recursos próprios
    │   ├── article1.html        
    │   ├── articl...
    │   └── assets/
    │       ├── css/             # Css dos artigos (não listados)
    │       └── img/             # Imagens dos artigos (não listadas)
    │
    └── screenshots/
        └── screenshots.md
