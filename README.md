# AutoVeitamento UFC
Aplicativo desktop desenvolvido pela Universidade Federal do Ceará para automizar os processos de **Gerenciamento e Geração de Relatórios de Aproveitamento de Estudos** das Coordenações de Instituições de Ensino

## Por quê?
Toda coordenação de curso faz aproveitamento de estudos com alguma regularidade, e na prática a maioria dos coordenadores de curso guardam aproveitamentos válidos em planilhas.
Na ausência de algo que permita automatizar esse processo, é preciso preencher relatórios de aproveitamento com todos os dados necessários, e isso pode ser trabalhoso. <br>
Nesse sentido, o AutoVeitamento surgiu com a possibilidade de fácil e conveniente reutilização de dados previamente inseridos, e gerar automaticamente relatórios de aproveitamento de estudos.

## Exemplo de uso:

Veja um vídeo com exemplo de uso do programa [clicando aqui](https://drive.google.com/file/d/1Nk1drlag82oeQzU69rh4vWxvFg4D8Gth/view?usp=sharing).

## Tecnologias utilizadas:
- [Node js](https://nodejs.org/en/)
- [React js](https://pt-br.reactjs.org/)
- [Electron js](https://www.electronjs.org/)

## Instruções de Instalação para ambiente de desenvolviento:

Antes da instalação, vale lembrar que este programa possui alguns pré-requisitos para ser executado, sendo eles:
* NodeJs, na sua versão estável mais recente: www.nodejs.org/en/
* NPM, na sua versão estável mais recente (Obtido ao instalar o NodeJs)
* LaTex, na versão de instalação que desejar (ex: MikTex https://miktex.org/)

Então, após os requisitos serem instalados, basta seguir os passos adiantes:

1. Primeiramente, clone este repositório em qualquer lugar na sua máquina
2. Vá até a pasta onde esse repositório foi clonado e abra o terminal
3. Digite o comando *yarn install* e aguarde a instalação de todos os pacotes, isso pode levar algum tempo
4. Digite o comando *yarn electron-dev* e aguarde a inicialização do programa

## Refatorações

Foi escolhido apenas o uso do _yarn_ como arquivo de configuração, pois manter os dois pacotes (yarn.lock e package-json.lock) 
pode gerar conflitos e redundância. Logo, os comando com _npm_ são opcionais (_npm i_ e _npm run electron-dev_). 

#### Por que usar o yarn?

O yarn.lock é criado com o CLI do yarn, o qual possui desempenho melhor. ele
