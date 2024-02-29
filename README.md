# Separação de pedidos em lotes - Frontend

![GitHub repo size](https://img.shields.io/github/repo-size/fergkz/test-haytek-front-react?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/fergkz/test-haytek-front-react?style=for-the-badge)

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)
![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)
![](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![](https://img.shields.io/badge/GitKraken-179287?style=for-the-badge&logo=GitKraken&logoColor=white)
![](https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white)

Frontend em react para efetuar a separação de de pedidos em lotes, otimizando a utilização de caixas agrupadas por transportadora e cliente de acordo com o retorno da API.

[Descrição, regras de negócio e referências](https://github.com/haytek-project/test-haytek/blob/main/README.md)


## Instalação e execução do sistema

### Sistema Operacional

> [!NOTE] 
> A instalação e execução deve ser efetuada em um sistema operacional linux Ubuntu. Caso contrário, os comandos abaixo devem ser adequados para o seu sistema operacional.

- Ubuntu 18.04.6 - Ram 1GB - 1 core CPU

### Linguagens / Tecnologias

- React ^18.2.0
- Axios ^1.6.7
- Bootstrap ^5.3.3
- Typescript
- CSS / SASS / SCSS
- VSCode
- Git / Gitbash / GitKraken
- Github

### Preparação do Ambiente

Certifique-se de ter privilégios de superusuário ou utilize `sudo` para executar os comandos.

> [!NOTE]
> Se você não desejar instalar a aplicação, vá direto para "Rodando a Aplicação".

Baixe o projeto para o seu computador. Pode ser pelo git mesmo, mas indico baixar o ZIP e extrair daqui se você não for contribuir com a evolução do projeto e necessitar apenas avaliar.

#### Instalação React

- Instale o React na máquina seguindo o tutorial em [Como instalar o ReactJS no Ubuntu](https://pt.linux-console.net/?p=168)

### Rodando a Aplicação

Vá até a pasta que constam os arquivos

#### Se você deseja rodar o sistema como desenvolvedor

Execute o comando para atualizar as dependências

```
npm i
```

Execute o comando para iniciar o servidor

```
npm run dev
```

#### Se você deseja rodar apenas o executável, não é necessário instalar o golang

Vá até a pasta `last-build-version`

No linux, execute o comando

```
./LocalServer8080
```

No windows, abra o arquivo

```
LocalServer8080.exe
```

Acesse a urk do seu navegador

```
http://localhost:8080/
```

> [!NOTE]
> Como não temos ainda a instalação via Docker ou um servidor em comum, as telas necessitam que o serviço de backend/API estejam rodando obrigatoriamente na porta 8089