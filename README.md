
Observações importantes para continuar a construção da sua branch:

1 - Dê "cd brasuca", "npm install" e "npm start" no terminal para ter o node_modules e executar o site. Dê "npm run backend" para executar o json-server.

2 - Analisem o código bem com calma e vejam como o site se comporta, caso não entendam algo do código é só me chamar, fico online no discord ou whatsapp.

3 - Falta para terminar: Login e cadastro (validação além do simples, pra isso é recomendado usar o react-hook-form e yup), página de contato e 3 requisições axios (post, put, delete). O POST é na página criar prato, o PUT é na página edit ao clicar no botão "edit" do cardápio, e delete no botão delete. A requisição GET já foi feita. Dividam entre si.

4 - Todas os npms necessários foram instalados, incluindo o react-icons: https://react-icons.github.io/react-icons/ (Recomendo usarem se necessário).

5 - Não se preocupe com o footer não estar colado embaixo, conforme o conteúdo for sendo inserido, ele vai colar automaticamente, assim como na Home.

6 - Apesar da utilização do bootstrap para facilitar, a utilização do css é inevitável. Portanto, algumas vezes teremos que sobrescrever o que já foi pré-configurado no bootstrap, e não tem problema fazer isso, desde que saibamos resolver os conflitos entre o css(.css) e bootstrap(.scss), inspecionando e analisando os elementos, usando o "!important" para priorizar e entendendo o que o css está verdadeiramente lendo. Print de exemplo: https://prnt.sc/z7ehRI4LtNJV.

7 - Cuidado para não sair da padronização no estilo do site, qualquer coisa reveja as cores, hover da página inicial, footer ou navbar já feita.

8 - O foco principal será na funcionalidade do site nos bancos de dados e os métodos HTTP (Get, post, put e delete). Vejam e revejam vídeos e documentos para conseguir deixar a sua parte bem funcional.

9 - Vejam também a playlist de React do Hora de codar ou Gabriel Dias (Consumindo Api com ReactJS) para conseguir assimilar o ReactJS e conteúdo de API (se precisar copiem e colem mesmo, foi o que eu fiz bastante).

10 - Caso tenham dificuldade e não consiga resolver de jeito nenhum, pode pedir ajuda!

sequencia dos principais comandos no GIT (vejam vídeos)

git init
git add *
caso queira monitorar os arquivos: git status
git commit -m "first commit"
git branch -M "nome da sua branch" (ou caso só queria alternar e não criar: git checkout [sua branch]).
git remote add origin https://github.com/pekim2/projeto-grupo-react.git
git push -u origin nome da sua branch