# Projeto Full Cycle - Docker Node Js com Nginx de proxy reverso

Este projeto faz parte do curso da Full Cycle para aprender sobre Docker. O objetivo deste projeto é criar um projeto simples utilizando Node Js e nginx como proxy reverso além de armazenar uma informação em banco de dados Mysql. Ao acessar a página inicial do projeto, é inserido um registro no banco de dados exibindo a  mensagem "Full Cycle Rocks!!" juntamente com uma listagem no banco de dados.

## Instruções para execução do projeto

1. Clone o projeto do GitHub usando o seguinte comando no terminal:
   ```bash
   git clone https://github.com/paulomagno/docker-nodejs-fullcycle.git

2. após clonar o projeto navegue ao diretório raiz da aplicação e execute o comando a seguir.  
    ```bash
    docker compose up -d

3. Acesse o projeto através do seguinte endereço.  
    ```bash
    http://localhost:8080   