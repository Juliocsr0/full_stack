-- Cria o banco de dados onde vamos trabalhar
create database sistema_produtos;

use sistema_produtos;

-- Cria a tabela 'produtos' com algumas colunas básicas
create table produtos (
	id int auto_increment primary key, -- ID ÚNICO
    nome varchar(100) not null, -- Nome produto
    email varchar(120) not null, -- E-mail (exemplo genérico)
    telefone varchar(20), -- Telefone
    cpf varchar(14), -- CPF
    logradouro varchar(150) -- Endereço simples
);

-- Insere dois registros
insert into produtos (nome, email, telefone, cpf, logradouro) values
	('Gustavo Rodrigues', 'gustavrodri@gmail.com', '119784-657', '856.978.382-09', 'Rua SLQ'),
    ('Julia Rauen', 'juliarauen@gmail.com', '119874-537', '747.586.937-56', 'Rua Salamandra');

select * from produtos where id = 2;