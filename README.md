<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="https://github.com/Rocketseat/bootcamp-gostack-desafio-02/blob/master/.github/logo.png" width="300px" />
</h1>

<h3 align="center">
  Desafio 3: FastFeet, continuando...
</h3>

<h3 align="center">
  :warning: Etapa 2/4 do Desafio Final :warning:
</h3>

<p>Esse desafio faz parte do Desafio Final, que é uma aplicação completa (Back-end, Front-end e Mobile) que é avaliada para emissão do Certificado do Bootcamp GoStack!</p>

## :rocket: Sobre o desafio

A aplicação que iremos dar início ao desenvolvimento a partir de agora é um app para uma transportadora fictícia, o FastFeet.


### **Um pouco sobre as ferramentas**

- Express;
- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (Utilizando PostgreSQL);
- jsonwebtoken + bcryptjs;
- Yup;
- Multer;
- date-fns;
- nodemailer + nodemailer-express-handlebars;


### **Database**

Está API está utilizando PostgreSQL para fazer o relacionamento entre as encomendas, entregadores e destinatários. Temos também a de usuários admin da distribuidora e uma tabela para criação de logs de problemas que os entregadores podem encontrar em seu trabalho.


### **Inicializar API**

- yarn dev
- yarn dev:debug (verificar pasta .vscode para configurações)


### **Email**

Nesta aplicação é utilizado o envio de email para a comunicação com os entregadores. Quando uma encomenda tem seu estado alterado para “cancelado” o entregador vinculado a aquela entrega, recebe um email de notificação, o que também é feito quando uma nova entrega é atribuída a um entregador.


### **Autenticação**

A autenticação foi realizada com o uso de jsonwebtoken (JWT). Esse processo tem início quando um usuário admin do sistema abre uma seção por meio da rota Session, após a validação de seus dados cadastrais o mesmo recebe da API um token com seu id.

Agora este usuário só tem de vincular esse token a suas próximas requisição por meio do protocolo Bearer. Neste sistema todas a ações a partir da abertura da seção irá pedir uma validação por meio do token.


### **Validação dos dados**

Nesta aplicação todas as requisições passam por processo de verificação de seu dados. Este procedimento é realizado por meio de lib Yup e verificações condizentes com as regras de negócios, por exemplo existência unica de um email.


### **Rotas**

Abaixo estão descritas as rotas do sistema.

  #### - Users (/users)

  | Resource | Method | Params (JSON) | Headers |
| :---:      | :---:  |    :---:      |    :---: |
| /users    | POST   | {name, email, password} | {/} |
| /users    | PUT    | {name, email, password} | JWT |

  #### - Repicients (/repicients)

   | Resource | Method | Params (JSON) | Headers |
| :---:      | :---:  |    :---:      |    :---: |
| /repicients    | POST   | {name, street, neighborhood, number, complement, state, city, cep} | JWT |
| /repicients/:id    | PUT    | {name, street, neighborhood, number, complement, state, city, cep} | JWT |

  #### - Sessions (/sessions)

   | Resource | Method | Params (JSON) | Headers |
| :---:      | :---:  |    :---:      |    :---: |
| /sessions    | POST  | {email, password} | {/} |


  #### - Deliverymans (/deliverymans)

   | Resource | Method | Params (JSON) | Headers |
| :---:      | :---:  |    :---:      |    :---: |
| /deliverymans    | GET  | {/} | JWT |
| /deliverymans    | POST  | {email,name } | JWT |
| /deliverymans/:id    | PUT  | {email, name, avatar_id } | JWT |
| /deliverymans/:id    | DELETE  | {/} | JWT |

#### - Delivery (/deliveries)

   | Resource | Method | Params (JSON) | Headers |
| :---:      | :---:  |    :---:      |    :---: |
| /deliveries    | GET  | {/} | JWT |
| /deliveries    | POST  | {product, repicient_id, deliveryman_id} | JWT |
| /deliveries/:id    | PUT  | {product, repicient_id, deliveryman_id, start_date, end_date, canceled_at} | JWT |
| /deliveries/:id    | DELETE  | {/} | JWT |

#### - Deliveryman Actions (/deliveryman/id/*)

   | Resource | Method | Params (JSON) | Headers |
| :---:      | :---:  |    :---:      |    :---: |
| /deliveryman/:id/delivered    | GET  | {/} | {/} |
| /deliveryman/:id/deliveries    | GET  | {/} | {/} |
| /deliveryman/:iddm/deliveries/:iddl    | PUT  | {start_date, end_date, signature_id} | JWT |

#### - Delivery Problems (/deliveries/problems)

   | Resource | Method | Params (JSON) | Headers |
| :---:      | :---:  |    :---:      |    :---: |
| /deliveries/problems    | GET  | {/} | JWT |
| /deliveries/:id/problems    | GET  | {/} | JWT |
| /deliveries/:id/problems    | POST  | {description} | JWT |

#### - Cancellation Delivery (/problem/:id/cancel-delivery)

| Resource | Method | Params (JSON) | Headers |
| :---:      | :---:  |    :---:      |    :---: |
| /problem/:id/cancel-delivery    | DELETE  | {/} | JWT |

#### - File (/files)

| Resource | Method | Params (JSON) | Headers |
| :---:      | :---:  |    :---:      |    :---: |
| /files   | POST  | {file} | JWT |

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Proposto com ♥ by Rocketseat :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)
