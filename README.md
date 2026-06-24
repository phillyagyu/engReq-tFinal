# Trabalho da disciplina CI1162 - Engenharia de Requisitos 2026/1 - UFPR

## Nome do Projeto: "Monitoramento do Plano Decenal da Criança e Adolescente"

## Integrantes do Grupo
- Eduarda de Aguiar Freitas - GRR20211799
- Phillip Yagyu Moribayashi - GRR20232384
- Thais Miyuki Nomada - GRR20234264

---

## Descrição Resumida do Sistema
Este sistema tem como objetivo permitir o monitoramento dos compromissos decenais da criança e do adolescente, possibilitando a visualização estruturada de problemas públicos, objetivos, ações e indicadores.

A plataforma oferece funcionalidades de acompanhamento de progresso, filtros, busca, controle de usuários e geração de relatórios, promovendo transparência e organização das informações.

---

## Link do Protótipo Navegável
Acesse o protótipo através do link:
https://www.figma.com/design/nXVL3FNA6EY5EMgtx74eds/Prototipo_Requisitos

---

## Organização das Pastas

```text
engReq-tFinal/
├── Designs semana 1 (01-06-26)/          # Designs da versão 1
├── Designs semana 2/                     # Designs da versão 2
│
├── docs/                                 # Documentação central de Engenharia de Requisitos
│   ├── casos-uso.md                      # Casos de uso
│   ├── historias-usuario.md              # História de usuário
│   ├── historico-versoes.md              # histórico de versões
│   ├── matriz-rastreabilidade.md         # Matriz de rastreabilidade (Requisitos vs. US/Casos de Uso)
│   ├── regras-negocio.md                 # Regras de negócio que regem o sistemas
│   ├── requisitos.md                     # Requisitos Funcionais (RF) e Não Funcionais (RNF)
│   └── visao-geral.md                    # Visão geral e escopo do projeto
│
├── entregas/                             # Relatórios de acompanhamento e entregas parciais
│   ├── semana-1.md                       # Relatório da primeira semana
│   ├── semana-2.md                       # Relatório da segunda semana
│   ├── semana-3.md                       # Relatório da terceira semana
│   └── entrega-final.md                  # Relatório final
│
├── prototipo/                            # Implementação e referências do protótipo navegável
│   ├── telas/                            # Código-fonte das telas estáticas do protótipo
│   │   ├── css/                          # Arquivos de estilização (.css)
│   │   ├── icons/                        # Ativos visuais e ícones utilizados
│   │   └── js/                           # Scripts de comportamento e interatividade (.js)
│   ├── descricao-prototipo.md            # Documentação descritiva das interações do protótipo
│   └── link-prototipo.md                 # Link para acessar o protótipo
│
├── LICENSE                               # Licença de uso do projeto
└── README.md                             # Documentação principal da aplicação
```

## Instruções para acessar a documentação

Para visualizar a documentação completa e o progresso do projeto, siga as instruções abaixo:

* **Documentação Técnica e Requisitos**: Todos os arquivos relacionados a Casos de Uso, Regras de Negócio, Histórias de Usuário, Regras de Negócio e Requisitos (RF/RNF) estão organizados cronologicamente dentro da pasta `docs/` e nas pastas de entregas semanais.
* **Matriz de Rastreabilidade**: O mapeamento consolidado que cruza os requisitos, as User Stories (US), as regras de negócio (RN) e as telas do protótipo está disponível no arquivo `matriz-rastreabilidade.md` dentro da pasta `docs/`.
* **Protótipo Interativo (Deploy)**: 
    * O protótipo navegável baseado em HTML/CSS/JS pode ser acessado diretamente pelo link do [GitHub Pages](https://phillyagyu.github.io/engReq-tFinal/) do repositório.
    * Para execução local, os arquivos de interface estão localizados na pasta `prototipo/telas/`. Recomenda-se abrir o arquivo `index.html` ou `login.html` dentro do diretório `prototipo/telas/`

---

## Resumo das principais versões entregues

O desenvolvimento do projeto `"Monitoramento do Plano Decenal da Criança e Adolescente"` está estruturado de forma incremental, com o histórico de referências e evoluções mapeado nas seguintes entregas:

* **Configuração de Ambiente e Estrutura Inicial**: Organização das pastas base do projeto (`docs/`, `entregas/`, `prototipo/`) e padronização do ambiente de desenvolvimento.
* **Estrutura inicial do projeto (Semana 1)**: Estruturação e identificação dos requisitos do projeto em `requisitos.md`, `semana-1.md`.
* **Mapeamento de Requisitos e Histórias de Usuário (Semana 2)**: Estruturação, categorização e refinamento das User Stories (US), associando-as diretamente às Regras de Negócio (RN) e requisitos de software através dos arquivos `historias-usuario.md`, `regras-negocio.md`, `semana-2.md`.
* **Protótipo e Rastreabilidade (Semana 3)**: Desenvolvimento das telas da interface do sistema ao decorrer do processo todo mas finalizado em `prototipo/telas/`. Consolidação da **Matriz de Rastreabilidade** em `matriz-rastreabilidade.md`, garantindo o vínculo e a conformidade entre o que foi documentado e o protótipo funcional.