# LojaQuadrinhos

Projeto desenvolvido com Angular CLI 10.0.1.

O projeto tem por objetivo criar uma loja virtual de venda de quadrinhos da MARVEL

Todo o conteúdo visual aqui apresentado é de propriedade da MARVEL.

## Configuração

Para configurar este projeto, utilize o comando `npm install`.

Para rodar um servidor de desenvolvimento, utilize o comando `ng serve`.

Para compilar o projeto, utilize o comando `ng build`. 

## Sobre

O projeto foi desenvolvido utilizando o Angular 10, sendo escrito em sua maioria em Typescript.

Foi utilizado a API da MARVEL(`https://gateway.marvel.com:443/v1/public/`) para obtenção dos quadrinhos para a loja.

## Solução adotada

O projeto é constituído em sua estrutura por 4 componentes:
    - AppComponent: componente principal;
    - ListaQuadrinhosComponent: responsável pela pesquisa e listagem dos quadrinhos vindos da API;
    - DetalhesQuadrinhosComponent: responsável por mostrar os detalhes do quadrinho selecionado no componente anterior e adicioná-lo ao carrinho de compras;
    - FinalizacaoCompraComponent: responsável pela lista dos quadrinhos adicionados, com somatório, adição de cupons de desconto e finalização da compra.

Possui também 3 serviços:
    - AbaService: responsável por controlar qual aba o usuário está;
    - ComicService: responsável por controlar as informações dos quadrinhos;
    - FinalizacaoCompraService: responsável pelos métodos de finalização da compra.

Os cupons de desconto disponíveis para teste estão localizados em loja-quadrinhos\src\app\assets\cupons.json.

Os quadrinhos raros são aleatorizados a partir do último dígito do seu id. Ao carregar a aplicação, é randomizado um número entre 0 e 9 e os quadrinhos que
tiverem seus ids terminando neste número, é classificado como raro. Optei com selecionar os raros ao carregar a aplicação para evitar que a cada pesquisa os
quadrinhos sejam aleatorizados novamente, fazendo com que um quadrinho que não era raro ficasse raro e vice-versa.