CREATE DATABASE app_db_dev;

USE app_db_dev;

CREATE TABLE Clientes (
    ID_Cliente INT AUTO_INCREMENT PRIMARY KEY,
    Nome_Cliente VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE
);

-- Tabela Contas
CREATE TABLE Contas (
    ID_Conta INT AUTO_INCREMENT PRIMARY KEY,
    ID_Cliente INT,
    Saldo DECIMAL(10,2) DEFAULT 0,
    FOREIGN KEY (ID_Cliente) REFERENCES Clientes(ID_Cliente)
);

-- Tabela Transações
CREATE TABLE Transacoes (
    ID_Transacao INT AUTO_INCREMENT PRIMARY KEY,
    ID_Conta INT,
    Tipo_Conta ENUM('Corrente', 'Poupança', 'Salário', 'Mista', 'Digital', 'Universitária', 'Conjunta', 'Solidária') NOT NULL,
    Tipo_Transacao VARCHAR(255) NOT NULL,
    Valor DECIMAL(10,2) NOT NULL,
    Data_Transacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ID_Conta) REFERENCES Contas(ID_Conta)
);

-- Tabela Notificações
CREATE TABLE Notificacoes (
    ID_Notificacao INT AUTO_INCREMENT PRIMARY KEY,
    ID_Cliente INT,
    Mensagem TEXT NOT NULL,
    Data_Notificacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ID_Cliente) REFERENCES Clientes(ID_Cliente)
);

-- Tabela Administradores
CREATE TABLE Administradores (
    ID_Administrador INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Idade INT NOT NULL,
    Senha VARCHAR(255) NOT NULL
);
