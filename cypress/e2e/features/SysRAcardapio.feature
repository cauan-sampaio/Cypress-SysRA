Feature: SysRA cardápio

    Scenario: Logar no SysRA e cadastrar cardápio
        Given Dado que o usuário loge no SysRA
        And O usuário clickar em Administração
        And O usuário clickar em cardápio
        When O usuário chegar em calendário
        And O usuário escolher uma data
        Then O usuário estará na área de cadastro de cardápio
         
        Given Dado que o usuário esteja na área de cadastro de cardápio
        And O usuário cadastrar as refeições que ele quer
        When O usuário cadastrar a quantidade do peso da refeição
        Then  o usuário irá cadastrar o cardápio com sucesso