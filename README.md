## Identum
**Antes de fazeres qualquer coisa**, vê o os PDFS das primeras aulas
e **vê se tens tudo instalado** como deve ser.

Depois, crias uma pasta onde queres colocar o trabalho e depois
fazes clone do repositório.

O que faço geralmente é abrir a linha de comandos e criar uma
pasta chamada **workspace** e dentro dessa crio uma pasta do
projeto em si.

```bash
$ mkdir workspace/(o que quiseres)
```

**No meu caso**:

```bash
$ mkdir workspace/identum
```




## Clone
Depois disso tudo, tens de **clonar o repositório do Git** para teres
os ficheiros em que estamos a trabalhar. **Dentro da pasta** que criaste
para o projeto fazes...

```bash
$ git clone git@github.com:lopesnuno/IHM.git
```


... e em principio não deves ter problemas. Depois disso é só fazer
`npm install` no terminal, **dentro do VSCode** e está feito.

**Se tiveres problemas com autenticação/tokens**, vê aí como se faz,
basta seguir passo a passo.

 - [Autenticação/Tokens](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
 - [Adicionar o token ao Github](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)


## Workflow
Dentro do Trello vamos ter várias tarefas que vamos definir.
Cada uma que escolheres **deves colcar "Em andamento"** e assim que
o acabares e achares que está bom, passas para **review**.

Ao escolheres uma tarefa, criar um branch com um nome intuitivo,
separado por "-". ex:

```bash
$ git checkout -b 'login-page'
```

Assim evita-se estragar a app que ainda está funcional e se
a feature já não valer a pena ou desistir-mos dela, é como se nunca
tivesses existido.

Assim que acabares e achares que estás
bom para juntar à aplicação final **(e aqui vou explicar como se faz no VSCode, 
por causa disto acho que vou acabar por usar o webstorm)**, voltas
à linha de comandos, dás **commit do branch** para o Github, abres 
o Github no repositório, clicas em **Pull requests** e vai aparecer
um botão a verde para fazeres um PR.

Quando aceitarmos que está ótimo e juntar-mos à main => aplicação final,
escolhes outra tarefa e é mais do mesmo.

```bash
$ git checkout main
$ git pull
$ git checkout -b 'nome da tarefa'
```
