# Semana 3 - Protótipo evolutivo v1 (18/06)
## Conteúdo esperado
- Protótipo navegável inicial 
- Matriz de rastreabilidade parcial

### Protótipo Navegável Inicial

O protótipo inicial foi desenvolvido utilizando tecnologias web estáticas (HTML, CSS e JavaScript) para simular o comportamento e o fluxo de navegação do sistema, validando a experiência do usuário e os requisitos de acessibilidade.

* **Diretório dos Arquivos Fontes:** `prototipo/telas/`
* **Descrição das Interações:** Contida no arquivo `prototipo/descricao-prototipo.md`
* **Link para Acesso Externo:** Contido no arquivo `prototipo/link-prototipo.md`

#### Como executar o protótipo localmente:
1. Navegue até a pasta `prototipo/telas/`.
2. Abra o arquivo principal de entrada `sistema.html` ou `login.html` diretamente em qualquer navegador web de sua preferência.

---

### Matriz de Rastreabilidade Parcial (V1)

A matriz abaixo unifica a Engenharia de Requisitos à estrutura visual construída para o protótipo, integrando as regras de consistência que o sistema deve herdar.

| US | User Story | Requisito Relacionado | Regra de Negócio (RN) | Tela(s) Relacionada(s) no Protótipo |
| :---: | :--- | :--- | :--- | :--- |
| **US01** | Visualizar Problemas Públicos | RF01 | RN01 – Vinculação Obrigatória | 4 - Lista de Problemas Públicos<br>4.1 - Lista de Problemas Públicos - detalhado |
| **US02** | Navegar pela Estrutura Hierárquica | RF02 | RN02 – Rigidez Hierárquica | 8 - Detalhamento de Objetivos e Tarefas<br>8.1 - Detalhamento de Objetivos e Tarefas<br>8.2 - Detalhamento de Objetivos e Tarefas |
| **US03** | Monitorar Tarefas e Indicadores | RF03 | RN04 – Estados Permitidos | 1 - Início<br>3 - Indicadores |
| **US04** | Pesquisar Informações | RF04 | - | 6 - Busca<br>6.1 - Busca - Resultados |
| **US05** | Filtrar Dados | RF05 | RN15 – Escopo de Exportação | 5 - Filtros |
| **US06** | Visualizar Última Atualização | RF07 | RN12 – Timestamp em Tela | 1 - Início<br>3 - Indicadores<br>9 - Histórico de Atualizações |
| **US07** | Consultar Histórico de Atualizações | RF08 | RN11 – Histórico de Evolução | 9 - Histórico de Atualizações |
| **US08** | Exportar Dados | RF06 | RN15 – Escopo de Exportação | 10 - Exportação de dados |
| **US09** | Visualizar Gráficos de Indicadores | RF16 | RN06 – Identidade Visual | 3 - Indicadores |
| **US10** | Filtrar Gráficos por Ano | RF17 | RN05 – Gráficos por Ano | 3 - Indicadores<br>5 - Filtros |
| **US11** | Identificar Tipos de Indicadores | RF18 | RN06 – Identidade Visual | 3 - Indicadores |
| **US12** | Consultar Responsáveis pelas Ações | RF19 | RN03 – Atribuição Única | 8.1 - Detalhamento de Objetivos e Tarefas<br>8.2 - Detalhamento de Objetivos e Tarefas |
| **US13** | Realizar Login | RF11 | RN09 – Acesso Autenticado | 2 - Login<br>2.1 - Login page<br>2.2 - Sign up page<br>2.3 - Forgot Password |
| **US14** | Utilizar Different Perfis de Usuário | RF20 | RN07 – Camadas de Acesso | 7 - User Options<br>7.1 - Painel Administrativo<br>7.2 - Painel Administrativo e gerenciamento de users |
| **US15** | Gerenciar Permissões | RF09, RF15 | RN08 – Autonomia do Painel | 7.1 - Painel Administrativo<br>7.2 - Painel Administrativo e gerenciamento de users<br>7.3 - Painel Administrativo - config |
| **US16** | Cadastrar Informações | RF12 | RN09 – Acesso Autenticado | 7.2 - Painel Administrativo e gerenciamento de users |
| **US17** | Alterar Informações | RF22 | RN09 / RN10 (Logs) | 7.2 - Painel Administrativo e gerenciamento de users<br>7.3 - Painel Administrativo - config |
| **US18** | Importar Dados por Planilhas | RF21 | RN14 – Consistência Planilhas | 7.2 - Painel Administrativo e gerenciamento de users |
| **US19** | Registrar Auditoria das Alterações | RF13 | RN10 – Logs e Registros | 9 - Histórico de Atualizações |
| **US20** | Utilizar Alto Contraste | RF10, RNF01 | - | Recursos de Acessibilidade<br>Recursos de Acessibilidade - Alto contraste<br>Recursos de Acessibilidade - font size |
| **US21** | Utilizar Autenticação Segura | RF14, RF23, RNF08 | RN13 – Token JWT | 2 - Login<br>2.1 - Login page |

---

| Identificador e Nome da Tela no Protótipo | User Stories Suportadas | Cobertura de Requisitos |
| :--- | :--- | :--- |
| **1 - Início** | US03, US06 | RF03, RF07 |
| **2 - Login** | US13, US21 | RF11, RF14, RF23, RNF08 |
| **2.1 - Login page** | US13, US21 | RF11, RF14, RF23, RNF08 |
| **2.2 - Sign up page** | US13 | RF11 |
| **2.3 - Forgot Password** | US13 | RF11 |
| **3 - Indicadores** | US03, US09, US10, US11 | RF03, RF16, RF17, RF18 |
| **4 - Lista de Problemas Públicos** | US01 | RF01 |
| **4.1 - Lista de Problemas Públicos - detalhado** | US01 | RF01 |
| **5 - Filtros** | US05, US10 | RF05, RF17 |
| **6 - Busca** | US04 | RF04 |
| **6.1 - Busca - Resultados** | US04 | RF04 |
| **7 - User Options** | US14 | RF20 |
| **7.1 - Painel Administrativo** | US14, US15 | RF09, RF15, RF20 |
| **7.2 - Painel Administrativo e gerenciamento de users** | US14, US15, US16, US17, US18 | RF09, RF12, RF15, RF20, RF21, RF22 |
| **7.3 - Painel Administrativo - config** | US15, US17 | RF09, RF15, RF22 |
| **8 - Detalhamento de Objetivos e Tarefas** | US02 | RF02 |
| **8.1 - Detalhamento de Objetivos e Tarefas** | US02, US12 | RF02, RF19 |
| **8.2 - Detalhamento de Objetivos e Tarefas** | US02, US12 | RF02, RF19 |
| **9 - Histórico de Atualizações** | US06, US07, US19 | RF07, RF08, RF13 |
| **10 - Exportação de dados** | US08 | RF06 |
| **Recursos de Acessibilidade** | US20 | RF10, RNF01 |
| **Recursos de Acessibilidade - Alto contraste** | US20 | RF10, RNF01 |
| **Recursos de Acessibilidade - font size** | US20 | RF10, RNF01 |