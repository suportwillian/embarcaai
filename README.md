# embarcaai

## Instalação
### 1: Instalar Node js(https://nodejs.org/en/download);
### 2: Instalar Visual Code (https://code.visualstudio.com/download);
### 3: Instalar Git Hub Desktop (https://central.github.com/deployments/desktop/desktop/latest/win32);

## Configuração
### 1: Abrir Git Hub Desktop e clicar no menu File/Clone repository;
### 2: Clicar na aba URL e colar a url: https://github.com/suportwillian/embarcaai.git no campo URL;
### 3: Clicar no botão Clone;
### 4: Abrir o Visual Code;
### 5: No Visual Code clicar no menu File/Open Folder;
### 6: Acessar o disco C:\ e selecionar a pasta do projeto embarcaai, clicar no botão Selecionar pasta;
### 7: Clicar no menu Terminal/New Terminal;
### 8: Colar no terminal o comando npm install cypress --save-dev e pressionar Enter;
### 9: Após instalar o cypress colar no terminal o comando npx cypress open e pressionar Enter;
### 10: Na janela Cypress clicar na opção E2E Testing, selecionar o navegador Chrome e clicar no botão Start E2E Testing in Chrome;
### 11: Em Specs/E2E specs clicar sobre o arquivo de teste buy.cy.js, pronto o testes será executado;


## Observações

### Para executar novamente o teste, necessário acessar o arquivo cypress\support\variable.js do projeto, altrar o valor da variavel emailSecundary para um e-mail diferente do atual 'testeqa0x@embarca.ci'. A alteração é necessária devido não poder cadastrar um novo usuário com um e-mail já cadastrado.
