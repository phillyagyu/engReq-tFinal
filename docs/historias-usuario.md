# User Stories

## Epic 1 - Consulta e Transparência dos Dados

### US01 - Visualizar Problemas Públicos

**Como** cidadão interessado
**Quero** visualizar os problemas públicos cadastrados e seus respectivos Compromissos Decenais
**Para que** eu possa acompanhar as ações relacionadas aos direitos da criança e do adolescente.

**Requisitos:** RF01

---

### US02 - Navegar pela Estrutura Hierárquica

**Como** usuário do sistema
**Quero** visualizar a estrutura Objetivo → Linha de Ação → Tarefa
**Para que** eu compreenda como as ações estão organizadas.

**Requisitos:** RF02

---

### US03 - Monitorar Tarefas e Indicadores

**Como** gestor de acompanhamento
**Quero** visualizar o progresso e o status das tarefas e indicadores
**Para que** eu acompanhe a execução das ações planejadas.

**Requisitos:** RF03

---

### US04 - Pesquisar Informações

**Como** usuário do sistema
**Quero** realizar buscas por palavras-chave, responsáveis, compromissos e eixos do plano
**Para que** eu encontre rapidamente as informações desejadas.

**Requisitos:** RF04

---

### US05 - Filtrar Dados

**Como** usuário do sistema
**Quero** aplicar filtros sobre os dados apresentados
**Para que** eu possa analisar apenas as informações relevantes ao meu contexto.

**Requisitos:** RF05

---

### US06 - Visualizar Última Atualização

**Como** usuário do sistema
**Quero** visualizar a data e hora da última atualização dos dados
**Para que** eu saiba se as informações estão atualizadas.

**Requisitos:** RF07

---

### US07 - Consultar Histórico de Atualizações

**Como** gestor ou cidadão interessado
**Quero** visualizar o histórico de alterações realizadas em uma tarefa
**Para que** eu acompanhe sua evolução ao longo do tempo.

**Requisitos:** RF08

---

## Epic 2 - Relatórios e Indicadores

### US08 - Exportar Dados

**Como** usuário do sistema
**Quero** exportar os dados filtrados em Excel, CSV ou PDF
**Para que** eu possa utilizá-los em relatórios e análises externas.

**Requisitos:** RF06

---

### US09 - Visualizar Gráficos de Indicadores

**Como** usuário do sistema
**Quero** visualizar gráficos de progresso dos indicadores
**Para que** eu compreenda facilmente a evolução dos resultados.

**Requisitos:** RF16

---

### US10 - Filtrar Gráficos por Ano

**Como** usuário do sistema
**Quero** selecionar um ano específico para visualizar os gráficos dos indicadores
**Para que** eu possa comparar resultados entre diferentes períodos.

**Requisitos:** RF17

---

### US11 - Identificar Tipos de Indicadores

**Como** usuário do sistema
**Quero** que os indicadores possuam diferenciação visual por tipo
**Para que** eu identifique rapidamente sua categoria.

**Requisitos:** RF18

---

### US12 - Consultar Responsáveis pelas Ações

**Como** usuário do sistema
**Quero** visualizar o responsável principal e os colaboradores de cada ação
**Para que** eu saiba quem participa da sua execução.

**Requisitos:** RF19

---

## Epic 3 - Autenticação e Controle de Acesso

### US13 - Realizar Login

**Como** usuário autorizado
**Quero** realizar login no sistema
**Para que** eu possa acessar funcionalidades restritas.

**Requisitos:** RF11

---

### US14 - Utilizar Diferentes Perfis de Usuário

**Como** administrador do sistema
**Quero** definir diferentes níveis de acesso para os usuários
**Para que** cada perfil tenha acesso apenas às funcionalidades permitidas.

**Requisitos:** RF20

---

### US15 - Gerenciar Permissões

**Como** administrador da SEDEF
**Quero** alterar permissões dos usuários
**Para que** eu controle adequadamente o acesso ao sistema.

**Requisitos:** RF09, RF15

---

## Epic 4 - Gestão de Dados

### US16 - Cadastrar Informações

**Como** usuário autorizado
**Quero** cadastrar problemas, compromissos, objetivos, linhas de ação, tarefas e indicadores pela interface gráfica
**Para que** eu mantenha os dados atualizados.

**Requisitos:** RF12

---

### US17 - Alterar Informações

**Como** usuário autorizado
**Quero** editar informações existentes pelo sistema
**Para que** eu corrija ou atualize dados cadastrados.

**Requisitos:** RF22

---

### US18 - Importar Dados por Planilhas

**Como** usuário autorizado
**Quero** carregar dados por meio de planilhas Excel ou CSV
**Para que** eu agilize o cadastro de grandes volumes de informações.

**Requisitos:** RF21

---

### US19 - Registrar Auditoria das Alterações

**Como** administrador do sistema
**Quero** registrar todas as alterações realizadas pelos usuários
**Para que** seja possível auditar as modificações efetuadas.

**Requisitos:** RF13

---

## Epic 5 - Acessibilidade e Experiência do Usuário

### US20 - Utilizar Alto Contraste

**Como** usuário com deficiência visual ou dificuldade de leitura
**Quero** ativar um modo de alto contraste
**Para que** eu consiga utilizar o sistema com maior conforto e acessibilidade.

**Requisitos:** RF10, RNF01

---

## Epic 6 - Segurança

### US21 - Utilizar Autenticação Segura

**Como** usuário autenticado
**Quero** que minhas sessões sejam protegidas por autenticação baseada em JWT
**Para que** meus dados e permissões não sejam comprometidos.

**Requisitos:** RF14, RF23, RNF08

---

# Matriz de Rastreabilidade das User Stories

| User Story | Requisitos Relacionados |
| ---------- | ----------------------- |
| US01       | RF01                    |
| US02       | RF02                    |
| US03       | RF03                    |
| US04       | RF04                    |
| US05       | RF05                    |
| US06       | RF07                    |
| US07       | RF08                    |
| US08       | RF06                    |
| US09       | RF16                    |
| US10       | RF17                    |
| US11       | RF18                    |
| US12       | RF19                    |
| US13       | RF11                    |
| US14       | RF20                    |
| US15       | RF09, RF15              |
| US16       | RF12                    |
| US17       | RF22                    |
| US18       | RF21                    |
| US19       | RF13                    |
| US20       | RF10, RNF01             |
| US21       | RF14, RF23, RNF08       |
