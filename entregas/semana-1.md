# Semana 1 - Escopo e revisão inicial (29/05)
## Conteúdo esperado
- Escopo 
- Atores
- Revisão dos requisitos
- Identificação de inconsistências

### Escopo
- O objetivo do sistema é apoiar o monitoramento dos compromissos decenais da criança e do adolescente.
- O sistema registra, e permite a visualização hierárquica de Problema Público → Compromisso → Objetivo → Linha de Ação → Tarefa. 
- É possível busca de palavers-chave ou campos, bem como filtros.
É possível visualizar o progresso de tarefas/indicadores: barra de %, status (não iniciada, em andamento, ...).
- O sistema dispõe de base de dados, onde pode-se inserir e exportar dados, sem ferramenta externa. 
- O sistema registra alterações feitas em seus dados.
- Há cadastro de usuários e login. 
- Há 3 camadas de usuários, com permissões diferentes. Da mais baixa para a mais alta: público geral pode visualizar o sistema, secretária pode administrar sistema e dados (e funcionalidades anteriores), SEDEF pode criar usuários (e todas as funcionalidades anteriores). Para a camada mais alta, há painel de administrador.
- O sistema também conta com recursos de acessibilidade em sua interface: alteração de esquema de cores, e tamanho de texto.

### Atores
- Administrador
- SEDEF
- Conselho Estadual/Secretárias
- Público geral

### Revisão dos Requisitos
Requisitos abrangem bem aspectos fundamentais do sistema 
- Visualização - RF01, RF02 e RF19
- Filtros - RF04 e RF05 
- Exportação - RF06 
- Monitoramento - RF03, RF07, RF08, RF16, RF17 e RF18 
- Segurança - RF11 
- Administração - RF09, RF15 e RF20 
- Histórico e Rastreabilidade - RF12, RF13, RF21 e RF22

### Identificação de inconsistências
Mas também há alguns requisitos vagos e/ou conflitantes
- RF14: Quais medidas de segurança podem ser aplicadas?
- RF22: Que tipos de dados podem ser alterados?
- RF23: Detalhe técnico e não funcional
- RNF05: Qual parâmetro para uma boa documentação?
- RFN07: O que é um número arbitrário, grande, de dados?
- RF09 e RF15: descrevem a mesma funcionalidade.
- RF12, RF21 e RF22: Alguns requisitos que não citam os atores, gerando dúvidas sobre quais permissões devem ser dadas a quem.