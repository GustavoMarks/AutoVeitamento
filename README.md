# AutoVeitamento UFC
Aplicativo desktop desenvolvido pela Universidade Federal do Ceará para automizar os processos de **Gerenciamento e Geração de Relatórios de Aproveitamento de Estudos** das Coordenações de Instituições de Ensino

## Por quê?
Toda coordenação de curso faz aproveitamento de estudos com alguma regularidade, e na prática a maioria dos coordenadores de curso guardam aproveitamentos válidos em planilhas.
Na ausência de algo que permita automatizar esse processo, é preciso preencher relatórios de aproveitamento com todos os dados necessários, e isso pode ser trabalhoso. <br>
Nesse sentido, o AutoVeitamento surgiu com a possibilidade de fácil e conveniente reutilização de dados previamente inseridos, e gerar automaticamente relatórios de aproveitamento de estudos.

## Exemplo de uso:

Veja um vídeo com exemplo de uso do programa [clicando aqui](https://drive.google.com/file/d/1Nk1drlag82oeQzU69rh4vWxvFg4D8Gth/view?usp=sharing).

## Tecnologias utilizadas:
- [Node JS](https://nodejs.org/en/): motor javascript para máquina
- [React JS](https://pt-br.reactjs.org/): biblioteca para desenvolvimento web
- [Electron JS](https://www.electronjs.org/): framework para conversão web para desktop

## Instruções de Instalação para ambiente de desenvolviento:
Antes da instalação, vale lembrar que este programa possui alguns pré-requisitos para ser executado, sendo eles:
* NodeJs, na sua versão estável mais recente: www.nodejs.org/en/
* NPM, na sua versão estável mais recente (Obtido ao instalar o NodeJs)
* (opcional) Yarn, na sua versão mais estável: https://classic.yarnpkg.com/en/docs/install/
* LaTex, na versão de instalação que desejar (ex: MikTex https://miktex.org/)

### Observações importantes
1. É preferível a utilização do CLI yarn como gereciador de pacotes no lugar do npm devido ao seu melhor desempenho, porém ambas podem ser utilizadas nas instruções abaixo. Para evitar conflitos e redundância no projeto, os arquivos de configuração de pacotes gerados pelo npm (package-lock.json) serão ignorados no versionamento, apenas arquivos gerados pelo yarn (yarn.lock) serão mantidos.
2. O projeto necessita de um arquivo .env que comporta as variáveis ambientes utilizadas. Para segurança e escabilidade do projeto o arquivo .env não é mais versionado, porém ele deve ser criado a partir do arquivo .env.example. Configurações de ambiente podem ser feitas alterando as configuraçoes deste arquivo.

### Instruções
Então, após os requisitos serem instalados, basta seguir os passos adiantes:
1. Primeiramente, clone este repositório em qualquer lugar na sua máquina
2. Vá até a pasta onde esse repositório foi clonado e abra o terminal
3. Digite o comando `yarn install` (ou npm install) e aguarde a instalação de todos os pacotes, isso pode levar algum tempo
4. Digite o comando `yarn start:dev` (ou npm run start:dev) e aguarde a inicialização do programa na sua máquina

## Instruções para builds automatizados e ambientes de produção
1. É possível executar o build automatizado para o framework React JS, que criará uma versão otimizada do projeto na pasta "build" sem a execução do servidor de desenvolvimento do framework. Para isso, execute o comando `yarn build:react` (ou npm run build:react).
2. Após esse comando, é possível executar o Electron em desenvolvimento com a build gerada. Mode o a variável "NODE_ENV" no arquivo ".env" para o valor "production" e então execute o comando `yarn start` (ou npm start).
3. Por fim o comando `yarn build` (ou npm build) irá criar a build do framework React JS e com ela irá gerá um arquivo executável para desktop na pasta "dist" com o build completo do projeto.
4. Também é possível gerar um build electron não compactado com o comando `yarn build:electron` ou (npm run build:electron).

## Instruções para ambiente de testes unitários automatizados
Os testes no projeto são realizados pelo framework **React JS** que possui scripts de testes embutidos na sua configuração (tentar adicionar outro framework de testes irá ocasionar conflitos). Os scripts de testes do framework utilizam a biblioteca [Jest](https://jestjs.io/). Novos scripts poderão ser adicionados à pasta "src/\_\_tests__" seguindo a sintaxe documentada no Jest. Para rodar uma bateria de testes basta utilizar o comando `yarn test` (ou npm test) e seguir as instruções no terminal.

## Arquitetura do projeto
Este projeto utiliza a arquitetura moderna [Flux](https://facebook.github.io/flux/) criada pelo Facebook voltada para desenvolvimento de aplicações "client-side". A arquitetura se baseia em um _store_ que guarda dados da aplicação visíveis para a _view_, sendo o estado do store gerenciado por _dispatchers_ e que por sua vez são acionados por _actions_ que podem partir da _view_ ou por gatilhos da própria aplicação.

Para a implementação desta arquiteura, o projeto utiliza as bibliotecas [Redux](https://redux.js.org/), que implementa containers da arquiteura, e a biblioteca [React-Redux](https://www.npmjs.com/package/react-redux) que adapta a implementação Flux para o React JS.
