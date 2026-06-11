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