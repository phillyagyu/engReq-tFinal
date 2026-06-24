# Semana 2 - Backlog e documentação inicial (11/06)
## Conteúdo esperado
- Histórias de usuário
- Regras de negócio
- Critérios de aceitação 
- Backlog inicial

### Histórias de Usuário
#### Estrutura de Dados e Hierarquia
- US01 – Visualizar Problemas Públicos e Vínculos: Como cidadão interessado, quero visualizar os problemas públicos cadastrados e seus respectivos Compromissos Decenais
para que eu possa acompanhar as ações relacionadas aos direitos da criança e do adolescente com a garantia de que cada problema está devidamente categorizado. (Requisitos: RF01, Regra de Negócio Relacionada: RN01)
- US02 – Navegar pela Estrutura Hierárquica do Plano: Como público geral, quero poder acompanhar a concretização de tarefas, para ver se estão sendo cumpridas. (Requisitos: RF02, Regra de Negócio Relacionada: RN02)
- US12 – Consultar Responsáveis pelas Ações: Como usuário do sistema, quero visualizar o responsável principal e os colaboradores associados a cada ação cadastrada para que eu saiba exatamente qual órgão ou indivíduo responde centralmente por aquela entrega.(Requisitos: RF19, Regra de Negócio Relacionada: RN03)

#### Monitoramento, Cálculo e Estados
- US03 – Monitorar Tarefas e Indicadores: Como gestor de acompanhamento, quero visualizar o progresso e o status das tarefas e indicadores para que eu acompanhe a execução das ações planejadas.(Requisitos: RF03, Regra de Negócio Relacionada: RN04)
- US09 – Visualizar Gráficos de Evolução dos Indicadores: Como usuário do sistema quero visualizar gráficos de linha ou barras com a evolução histórica dos indicadores de desempenho para que eu compreenda visualmente se os resultados estão melhorando ou piorando. (Requisitos: RF16)
- US10 – Filtrar Gráficos por Ano: Como usuário do sistema quero selecionar um ano específico para recalcular e renderizar os gráficos dos indicadores para que eu possa isolar e comparar o desempenho da gestão entre diferentes períodos anuais.(Requisitos: RF17, Regra de Negócio Relacionada: RN05)
- US11 – Identificação Visual por Tipo de Indicador: Como usuário do sistema quero que os indicadores possuam cores, tags ou ícones distintos baseados em sua tipologia para que eu identifique rapidamente se o dado que estou olhando é de processo, de resultado ou de impacto. (Requisitos: RF18, Regra de Negócio Relacionada: RN06)

#### Controle de Acesso e Permissão
- US14 – Utilizar Diferentes Perfis de Usuário: Como administrador do sistema quero que o sistema valide os níveis de permissão adequados para Administradores (SEDEF), Usuários Operacionais (Secretarias/Conselhos) e Visitantes (Público Geral) para que cada perfil acesse estritamente o escopo de funcionalidades de seu papel. (Requisitos: RF20, Regra de Negócio Relacionada: RN07)
- US15 – Gerenciar Permissões de Usuários: Como administrador da SEDEF quero elevar, reduzir ou revogar permissões de acesso dos usuários por meio de um painel autônomo para que eu possa controlar de forma centralizada quem pode editar as informações do sistema. (Requisitos: RF09 e RF15, Regra de Negócio Relacionada: RN08)
- US13 – Realizar Autenticação (Login): Como usuário operador do sistema (Secretária / SEDEF) 1uero realizar login seguro utilizando minhas credenciais de acesso para que minhas ações de escrita e edição sejam validadas e permitidas pela plataforma. (Requisitos: RF11, Regra de Negócio Relacionada: RN09)

#### Segurança, Auditoria e Logs
- US19 – Registrar Auditoria das Alterações (Logs): Como administrador do sistema quero que o sistema grave de forma imutável o rastro de auditoria de qualquer inserção, edição ou exclusão (quem fez, quando fez, valor antigo e valor novo) para que possíveis erros de alimentação ou sabotagens possam ser rastreados e auditados. (Requisitos: RF13, Regra de Negócio Relacionada: RN10)
- US07 – Consultar Histórico de Atualizações de uma Tarefa: Como gestor ou cidadão interessado quero visualizar uma linha do tempo cronológica com o histórico de evolução e notas de progresso inseridas em uma tarefa para que eu possa auditar os passos dados até a sua conclusão sem que dados antigos sejam apagados. (Requisitos: RF08, Regra de Negócio Relacionada: RN11)
- US06 – Visualizar Timestamp da Última Atualização: Como usuário do sistema quero visualizar a data e a hora exata da última modificação dos dados na tela que estou consultando para que eu tenha certeza do nível de frescor e atualidade daquela informação. (Requisitos: RF07, Regra de Negócio Relacionada: RN12)
- US21 – Proteger Sessões com Tokens Seguros: Como usuário autenticado quero que minhas requisições trafeguem utilizando um token de autenticação JWT assinado para que atacantes externos não interceptem minhas credenciais ou forjem ações em meu nome. (Requisitos: RF14, RF23 e RNF08, Regra de Negócio Relacionada: RN13)

#### Entrada e Saída de Dados (Filtros, Carga e Exportação)
Regras para manipulação de arquivos e dados em massa.
- US18 – Importar Dados em Massa por Planilhas: Como usuário autorizado das Secretarias quero carregar uma planilha Excel ou CSV contendo uma estrutura de dados e ter o sistema validando a integridade das linhas antes de salvar para que eu consiga cadastrar grandes volumes de tarefas simultaneamente de forma rápida e segura. (Derivado de: RF21 e RN14).
- US16 – Cadastrar e Alterar Informações via Interface: Como usuário autorizado (Secretária / SEDEF) quero cadastrar ou editar problemas, compromissos, objetivos, linhas de ação, tarefas e indicadores diretamente por formulários na interface gráfica para que eu faça ajustes pontuais e rápidos nos registros sob minha responsabilidade. (Derivado de: RF12 e RF22).
- US04 – Pesquisar Informações do Plano: Como usuário do sistema quero realizar buscas textuais por palavras-chave, responsáveis, compromissos e eixos do plano para que eu localize rapidamente o item que desejo auditar ou acompanhar. (Derivado de: RNF04).
- US05 – Filtrar Dados Painel: Como usuário do sistema quero refinar as tabelas e listagens aplicando múltiplos filtros simultâneos (Status, Ano, Órgão) para que eu isole apenas o subconjunto de dados do meu interesse direto. (Derivado de: RNF04).
- US08 – Exportar Dados Filtrados: Como usuário do sistema quero exportar a visualização corrente do meu painel nos formatos Excel, CSV ou PDF para que o arquivo gerado venha exatamente com os mesmos filtros aplicados em tela e eu possa usá-lo em relatórios externos. (Derivado de: RNF06 e RN15).

#### Acessibilidade e Experiência do Usuário
- US20 – Utilizar Recursos de Acessibilidade (Alto Contraste e Texto Grande): Como usuário com deficiência visual ou dificuldades de leitura quero acionar o modo de alto contraste e redimensionamento de texto na interface do sistema para que eu consiga ler as informações com clareza e de forma confortável. (Derivado de: RF10 e RNF01).

### Regras de Negócio
#### Estrutura de Dados e Hierarquia
Essas regras garantem a consistência e a integridade da árvore de informações do sistema.
- RN01 – Vinculação Obrigatória de Problemas: Todo problema público cadastrado no sistema deve, obrigatoriamente, estar associado a exatamente um dos 23 Compromissos Decenais da criança e do adolescente (Derivado de: RF01).
- RN02 – Rigidez Hierárquica: O sistema deve impor e validar a árvore de dependências de quatro níveis. Não pode existir uma Tarefa sem uma Linha de Ação pai, que por sua vez necessita de um Objetivo pai (Derivado de: RF02).
- RN03 – Atribuição de Responsabilidades: Toda Ação cadastrada deve conter obrigatoriamente a definição de um (e apenas um) Responsável Principal, permitindo zero ou mais Colaboradores (Derivado de: RF19).

#### Monitoramento, Cálculo e Estados
Regras que gerenciam a lógica de progresso e as atualizações.
- RN04 – Estados Permitidos para Tarefas/Indicadores: O ciclo de vida de monitoramento de uma tarefa ou indicador deve aceitar estritamente um dos três status: Não Iniciada, Em Andamento ou Concluída (Derivado de: RF03).
- RN05 – Cálculo e Gráficos por Ano: A filtragem e a renderização dos gráficos de progresso dos indicadores devem ser separadas por ano (Derivado de: RF17).
- RN06 – Identidade Visual: O sistema deve aplicar uma identidade visual distinta (como cores, ícones ou tags) baseada no dado "Tipo do Indicador" para fins de diferenciação na interface (Derivado de: RF18).

#### Controle de Acesso e Permissão
Regras que restringem quem pode ler, escrever ou alterar o estado do sistema.
- RN07 – Camadas Mínimas de Acesso: O sistema deve validar o escopo de atuação de pelo menos três perfis distintos de usuários: SEDEF / Administrador, responsável por gerenciar permissões e dados estruturais.
Conselho Estadual / Secretarias: Usuários operacionais responsáveis por alimentar dados e atualizar tarefas.
Público Geral: Acesso restrito de leitura (Visualização pública, sem necessidade de privilégios de edição).
(Derivado de: RF20).
- RN08 – Autonomia do Painel de Administrador: Apenas usuários com o perfil explicitamente autorizado (Ex: SEDEF) podem elevar, reduzir ou revogar permissões de outros usuários do sistema (Derivado de: RF09 e RF15, duplicados).
- RN09 – Proteção contra Alterações Anônimas: Qualquer inserção ou alteração de dados via interface gráfica ou via carga de planilhas exige autenticação e nível de permissão adequado (Derivado de: RF11, RF12, RF21 e RF22).

#### Segurança, Auditoria e Logs
Restrições de segurança e conformidade de dados.
- RN10 – Logs e Registros: Qualquer ação que altere o estado do sistema (criação, edição, exclusão ou mudança de status) deve gerar um registro de log imutável contendo: ID do Usuário, Data/Hora da ação, e o dado antes e depois da alteração (Derivado de: RF13).
- RN11 – Histórico de Evolução: O sistema deve registrar cronologicamente cada atualização de progresso de uma tarefa, criando um histórico visualizável para o usuário, sem sobrescrever o registro passado (Derivado de: RF08).
- RN12 – Timestamp: Toda tela de exibição de dados de monitoramento deve expor explicitamente a data e o horário da última modificação salva no banco de dados para aquele conjunto de informações (Derivado de: RF07).
- RN13 – Autenticação: Todas as requisições para endpoints protegidos da API devem exigir e validar um Token JWT válido e não expirado (Derivado de: RF23).

#### Entrada e Saída de Dados (Filtros, Carga e Exportação)
Regras para manipulação de arquivos e dados em massa.
- RN14 – Consistência de Planilhas: O carregamento de dados em massa por planilhas (Excel/CSV) deve passar por uma esteira de validação antes do armazenamento. Se houver falha de tipo ou hierarquia em uma linha, a operação deve ser abortada para garantir a integridade dos dados (Derivado de: RF21 e RNF04).
- RN15 – Escopo de Exportação: Os arquivos gerados em Excel, CSV ou PDF devem conter exatamente o mesmo subconjunto de dados resultante dos filtros aplicados pelo usuário na tela no momento do clique (Derivado de: RF05 e RF06).
- RN16 – Retenção Mínima: O banco de dados do sistema deve ser modelado e dimensionado para reter e permitir a consulta de dados históricos de monitoramento por um período mínimo de 10 anos, sem degradação de performance (Derivado de: RNF03 e RNF07).

###  Backlog Inicial e Critérios de Aceitação

Nesta seção, as User Stories são desdobradas em critérios de aceitação objetivos, mapeando as Regras de Negócio (RN) para garantir a conformidade e os cenários de teste corretos. Também foi estruturado na aba Projects do GitHub.

#### Segmento 1: Estrutura de Dados e Hierarquia

##### US01 – Visualizar Problemas Públicos e Vínculos
* **Critérios de Aceitação:**
  - [ ] A interface pública deve exibir a listagem completa de problemas públicos cadastrados.
  - [ ] Ao salvar ou exibir um problema público, o sistema deve validar e exibir obrigatoriamente a sua vinculação a exatamente um dos 23 Compromissos Decenais da criança e do adolescente (Conformidade com **RN01**).
  - [ ] Se o problema não estiver associado a um compromisso, o sistema deve impedir o salvamento e retornar um alerta em tela.

##### US02 – Navegar pela Estrutura Hierárquica do Plano
* **Critérios de Aceitação:**
  - [ ] O usuário deve conseguir expandir e colapsar os níveis visualmente no formato de árvore ou navegação aninhada.
  - [ ] O sistema deve impedir e rejeitar a criação de qualquer Tarefa que não possua uma Linha de Ação pai (Conformidade com **RN02**).
  - [ ] O sistema deve impedir e rejeitar a criação de qualquer Linha de Ação que não possua um Objetivo pai (Conformidade com **RN02**).

##### US12 – Consultar Responsáveis pelas Ações
* **Critérios de Aceitação:**
  - [ ] Cada ação detalhada em tela deve expor claramente quem é o seu Responsável Principal (obrigatório e único) (Conformidade com **RN03**).
  - [ ] A interface deve permitir listar uma quantidade variável (zero ou mais) de Colaboradores secundários na mesma ação (Conformidade com **RN03**).

---

#### Segmento 2: Monitoramento, Cálculo e Estados

##### US03 – Monitorar Tarefas e Indicadores
* **Critérios de Aceitação:**
  - [ ] O painel de monitoramento deve exibir o status atual de cada tarefa ou indicador utilizando tags visuais explícitas.
  - [ ] O sistema deve permitir estritamente a atribuição e transição entre três estados: `Não Iniciada`, `Em Andamento` ou `Concluída` (Conformidade com **RN04**).

##### US10 – Filtrar Gráficos por Ano
* **Critérios de Aceitação:**
  - [ ] A tela de indicadores deve disponibilizar um componente de seleção de ano (ex: dropdown/select).
  - [ ] Ao alterar o ano selecionado, todos os gráficos de progresso do painel devem ser recalculados e renderizados isoladamente com os dados daquele período específico (Conformidade com **RN05**).

##### US11 – Identificação Visual por Tipo de Indicador
* **Critérios de Aceitação:**
  - [ ] O sistema deve injetar componentes visuais distintos (como cores, ícones ou marcadores específicos) baseados no parâmetro "Tipo do Indicador" (Conformidade com **RN06**).

---

#### Segmento 3: Controle de Acesso e Permissão

##### US14 – Utilizar Diferentes Perfis de Usuário
* **Critérios de Aceitação:**
  - [ ] O sistema deve validar em tempo de execução o perfil do usuário logado e restringir o acesso às funcionalidades.
  - [ ] O perfil `SEDEF / Administrador` deve ter acesso completo de escrita, gerenciamento e visualização estrutural (Conformidade com **RN07**).
  - [ ] O perfil `Conselho Estadual / Secretarias` deve possuir acesso restrito à alimentação de dados operacionais e atualização de tarefas (Conformidade com **RN07**).
  - [ ] O `Público Geral` deve acessar o sistema em modo estrito de leitura, sem telas ou botões de edição visíveis (Conformidade com **RN07**).

##### US15 – Gerenciar Permissões de Usuários
* **Critérios de Aceitação:**
  - [ ] O painel autônomo de gerenciamento de permissões deve estar disponível exclusivamente para usuários autenticados como `SEDEF` (Conformidade com **RN08**).
  - [ ] Se um usuário sem o perfil autorizado tentar acessar o endpoint ou a tela de permissões, o sistema deve bloquear o acesso e retornar um erro HTTP 403 Forbidden.

##### US13 – Realizar Autenticação (Login)
* **Critérios de Aceitação:**
  - [ ] O formulário de login deve exigir e-mail/usuário e senha válidos.
  - [ ] Qualquer operação de alteração (inserção via tela ou por carga de arquivos) deve verificar se o usuário está autenticado antes de processar a gravação (Conformidade com **RN09**).

---

#### Segmento 4: Segurança, Auditoria e Logs

##### US19 – Registrar Auditoria das Alterações (Logs)
* **Critérios de Aceitação:**
  - [ ] Cada requisição de criação, edição, exclusão ou alteração de status deve disparar silenciosamente uma rotina de log de auditoria no backend.
  - [ ] O registro do log gravado em banco de dados deve ser imutável e conter obrigatoriamente: ID do Usuário, Data/Hora exata e o payload do dado no estado anterior e posterior à mudança (Conformidade com **RN10**).

##### US07 – Consultar Histórico de Atualizações de uma Tarefa
* **Critérios de Aceitação:**
  - [ ] A tela de detalhes de uma tarefa deve renderizar uma linha do tempo cronológica com o histórico de notas de progresso inseridas.
  - [ ] Uma nova atualização de status não pode sobrescrever ou deletar o registro histórico passado do banco de dados (Conformidade com **RN11**).

##### US06 – Visualizar Timestamp da Última Atualização
* **Critérios de Aceitação:**
  - [ ] Qualquer tela ou painel de exibição de dados de monitoramento deve exibir em destaque a data e o horário da última modificação gravada para aquele conjunto (Conformidade com **RN12**).

##### US21 – Proteger Sessões com Tokens Seguros
* **Critérios de Aceitação:**
  - [ ] Após o login bem-sucedido, o servidor deve emitir um Token JWT assinado.
  - [ ] Toda requisição para rotas privadas ou protegidas da API deve injetar o Token no cabeçalho `Authorization: Bearer <token>` e o servidor deve rejeitar tokens expirados ou malformados (Conformidade com **RN13**).

---

#### Segmento 5: Entrada e Saída de Dados (Filtros, Carga e Exportação)

##### US18 – Importar Dados em Massa por Planilhas
* **Critérios de Aceitação:**
  - [ ] O componente de upload deve aceitar arquivos nos formatos `.xlsx`, `.xls` ou `.csv`.
  - [ ] O sistema deve rodar uma rotina de validação prévia de tipo de dados e árvore de hierarquia de todas as linhas antes de salvar no banco de dados.
  - [ ] Se uma única linha da planilha contiver erros de tipagem ou quebra de regras, toda a operação de inserção deve ser abortada (rollback), sem salvar dados parciais (Conformidade com **RN14**).

##### US08 – Exportar Dados Filtrados
* **Critérios de Aceitação:**
  - [ ] O usuário deve conseguir clicar nos botões de exportação para Excel, CSV ou PDF a partir das telas de listagem.
  - [ ] O documento gerado para download deve conter exatamente o mesmo subconjunto e volume de registros filtrados na tela pelo usuário no exato momento da exportação (Conformidade com **RN15**).

---

#### Segmento 6: Acessibilidade e Experiência do Usuário

##### US20 – Utilizar Recursos de Acessibilidade
* **Critérios de Aceitação:**
  - [ ] A interface deve disponibilizar um botão global visível para ativação do modo de `Alto Contraste`.
  - [ ] Ao ativar o modo, a folha de estilos (CSS) deve ser alterada instantaneamente atendendo aos critérios de legibilidade para acessibilidade visual.
  - [ ] A interface deve permitir o redimensionamento do texto sem quebrar o layout das tabelas e painéis.