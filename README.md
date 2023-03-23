# Sistema do FRONT

O projeto em questão é um front-end para cadastro e login de usuários em uma aplicação web, desenvolvido com a biblioteca ReactJS. A interface do usuário é responsiva e se adapta a diferentes tamanhos de tela. A estrutura do projeto é modularizada, permitindo a fácil manutenção e escalabilidade.

A autenticação é realizada com o uso da biblioteca react-router-dom, que permite a navegação na aplicação sem a necessidade de recarregar a página. O processo de autenticação envolve a validação dos dados inseridos pelo usuário, como nome de usuário e senha, por meio de validações de formulário.

Além disso, a aplicação também utiliza a Context API do React para gerenciar o estado global da aplicação. Isso permite que as informações de autenticação sejam compartilhadas entre os diferentes componentes da aplicação, sem a necessidade de passá-las manualmente por meio de props.

As informações de autenticação são armazenadas no localStorage do navegador, para que o usuário permaneça conectado mesmo após fechar a página ou atualizar a aplicação. Isso é importante para proporcionar uma melhor experiência de usuário.

Outro aspecto importante do projeto é o uso de code-splitting, que permite que o código da aplicação seja dividido em diferentes arquivos para que possa ser carregado de forma mais eficiente. Isso significa que o usuário não precisa carregar todo o código da aplicação de uma vez, mas sim apenas o que é necessário para a página atual.

Por fim, a aparência da aplicação é definida com o uso de módulos de CSS, que permitem estilos específicos para cada componente da aplicação. Isso torna a aplicação mais fácil de manter e modificar, pois os estilos estão encapsulados em cada componente.

Pagína do back-end: https://github.com/Matheus-Loubach/Sistema_Login_Register-Back
