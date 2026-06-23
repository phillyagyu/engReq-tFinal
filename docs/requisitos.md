## Requisitos Funcionais

- RF01 - O sistema deve permitir que o usuário visualize os 23 problemas públicos, cada um vinculado a um Compromisso Decenal da criança e adolescente.
- RF02 - O sistema deve permitir a visualização hierárquica de:  Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa.
- RF03 - O sistema deve permitir o monitoramento contínuo das tarefas/indicadores (ex. percentual concluído, status não iniciada, em andamento, concluída)
- RF04 - O sistema deve permitir que o usuário faça buscas no sistema para a exibição das informações correspondentes. (palavra-chave, Responsável, eixos do Plano Decenal, Compromisso)
- RF05 - O sistema deve permitir que o usuário aplique filtros (ex. compromisso, indicador, período de tempo, responsável) para a exibição das informações do sistema.
- RF06 - O sistema deve disponibilizar funcionalidade de exportação (Excel, CSV, PDF) dos dados de monitoramento de um conjunto filtrado.
- RF07 - O sistema deve mostrar quando foi feita a última atualização dos dados
- RF08 - O sistema deve manter um histórico de todas as atualizações feitas em uma tarefa, permitindo ver a evolução.
- RF09 - O sistema deve possuir um painel de administrador, para elevar ou reduzir permissões de usuários e outras funcionalidades por usuários autorizados.
- RF10 - O sistema deve fornecer um modo de alto contraste para os usuários.
- RF11 - O sistema deve permitir autenticação de usuários com login e senha.
- RF12 - O sistema deve permitir que usuários autenticados insiram problemas, compromissos, objetivos, etc via interface gráfica.
- RF13 - O sistema deve registrar e armazenar ações dos usuários que podem alterar o estado do sistema.
- RF14 - O sistema deve criptografar e garantir a integridade dos dados inseridos.
- RF15 - O sistema deve indicar qual a alteração mais recente em seus dados.
- RF16 - O sistema deve exibir gráficos de progresso para cada indicador.
- RF17 - O sistema deve permitir que o usuário filtre gráficos de indicadores por ano.
- RF18 - O sistema deve diferenciar visualmente indicadores por seu respectivo tipo.
- RF19 - O sistema deve exibir o Responsável Principal e os Colaboradores para cada Ação.
- RF20 - O sistema deve permitir a existência de diferentes usuários (no mínimo três camadas: SEDEF, Conselho Estadual/Secretárias, público geral), mais administradores.
- RF21 - O sistema deve permitir que usuários autenticados carreguem dados por meio de planilhas (csv) sem ferramenta externa.
- RF22 - O sistema deve permitir que usuários autenticados alterem dados por meio da interface do sistema.
- RF23 - O sistema deve permitir que o usuário altere o tamanho do texto (mímimo dois tamanhos diferentes)sem ferramenta externa.

## Requisitos Não Funcionais

- RNF01 - A interface deve ser acessível conforme os princípios do Design Universal, incluindo contraste adequado, configuração de tamanho da fonte e suporte a leitores de tela.
- RNF02 - O sistema deve ser responsivo (adequado para desktop, tablet e dispositivos móveis).
- RNF03 - O sistema deve ter capacidade de armazenamento para guardar dados de pelo menos 10 anos.
- RNF04 - O sistema deve garantir a integridade dos dados exportados (Excel/PDF/CSV), sem perda de informações ou formatações incorretas.
- RNF05 - O sistema deve ser bem documentado.
- RNF06 - O design e a experiência devem ser minimamente semelhantes à interface do Conselho Estadual da Criança e do Adolescente.
- RNF07 - O sistema deve ser altamente escalável.
- RNF08 - O sistema deve encerrar a sessão do usuário automáticamente após 30 minutos de inatividade
- RNF09 - O sistema deve utilizar Tokens JWT para aumentar a segurança.
# Requisitos do Sistema

## Requisitos Funcionais

| ID   | Descrição                                                                                                                                                     |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RF01 | O sistema deve permitir que o usuário visualize os 23 problemas públicos, cada um vinculado a um Compromisso Decenal da Criança e do Adolescente.             |
| RF02 | O sistema deve permitir a visualização hierárquica de Objetivo → Linhas de Ação → Tarefas.                                                                    |
| RF03 | O sistema deve permitir o monitoramento contínuo das tarefas e indicadores, incluindo percentual concluído e status (Não Iniciada, Em Andamento e Concluída). |
| RF04 | O sistema deve permitir que o usuário realize buscas utilizando palavra-chave, responsável, eixos do Plano Decenal e compromisso.                             |
| RF05 | O sistema deve permitir que o usuário aplique filtros como compromisso, indicador, período de tempo e responsável para exibição das informações.              |
| RF06 | O sistema deve disponibilizar funcionalidade de exportação dos dados monitorados em formatos Excel, CSV e PDF.                                                |
| RF07 | O sistema deve exibir a data e hora da última atualização dos dados.                                                                                          |
| RF08 | O sistema deve manter um histórico de todas as atualizações realizadas em uma tarefa, permitindo visualizar sua evolução.                                     |
| RF09 | O sistema deve possuir um painel administrativo para gerenciamento de permissões e demais funcionalidades administrativas.                                    |
| RF10 | O sistema deve fornecer um modo de alto contraste para os usuários.                                                                                           |
| RF11 | O sistema deve possuir autenticação por login de usuários.                                                                                                    |
| RF12 | O sistema deve permitir a inserção de problemas, compromissos, objetivos e demais informações por meio da interface gráfica.                                  |
| RF13 | O sistema deve registrar e armazenar ações dos usuários que possam alterar o estado do sistema.                                                               |
| RF14 | O sistema deve aplicar medidas de segurança aos dados inseridos.                                                                                              |
| RF15 | O sistema deve permitir que usuários autorizados elevem ou reduzam permissões por meio do painel administrativo.                                              |
| RF16 | O sistema deve exibir gráficos de progresso para cada indicador.                                                                                              |
| RF17 | O sistema deve permitir filtrar os gráficos dos indicadores por ano.                                                                                          |
| RF18 | O sistema deve diferenciar visualmente os indicadores de acordo com seu tipo.                                                                                 |
| RF19 | O sistema deve exibir o Responsável Principal e os Colaboradores de cada ação.                                                                                |
| RF20 | O sistema deve suportar diferentes perfis de usuário, incluindo no mínimo: SEDEF, Conselho Estadual/Secretarias e Público Geral.                              |
| RF21 | O sistema deve permitir o carregamento de dados por meio de planilhas.                                                                                        |
| RF22 | O sistema deve permitir a alteração de dados por meio da interface do sistema.                                                                                |
| RF23 | O sistema deve utilizar Tokens JWT para autenticação e segurança das requisições.                                                                             |

---

## Requisitos Não Funcionais

| ID    | Descrição                                                                                                                                                         |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RNF01 | A interface deve ser acessível conforme os princípios do Design Universal, incluindo contraste adequado, ajuste de tamanho da fonte e suporte a leitores de tela. |
| RNF02 | O sistema deve ser responsivo, funcionando adequadamente em desktops, tablets e dispositivos móveis.                                                              |
| RNF03 | O sistema deve possuir capacidade de armazenamento para manter dados históricos por pelo menos 10 anos.                                                           |
| RNF04 | O sistema deve garantir a integridade dos dados exportados nos formatos Excel, CSV e PDF, sem perda de informações ou formatação incorreta.                       |
| RNF05 | O sistema deve possuir documentação adequada para facilitar manutenção e evolução.                                                                                |
| RNF06 | O design e a experiência do usuário devem ser minimamente semelhantes à interface do Conselho Estadual da Criança e do Adolescente.                               |
| RNF07 | O sistema deve suportar a inserção e manipulação de grandes volumes de dados.                                                                                     |
| RNF08 | O sistema deve encerrar automaticamente a sessão do usuário após 30 minutos de inatividade.                                                                       |
