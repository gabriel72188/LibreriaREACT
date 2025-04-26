--Por si hace falta
CREATE TABLE autores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    nacionalidad VARCHAR(50),
    fecha_nacimiento DATE
);

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE libros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    id_autor INT NOT NULL,
    id_categoria INT NOT NULL,
    precio DECIMAL(6,2) NOT NULL,
    url_imagen VARCHAR(255),
    FOREIGN KEY (id_autor) REFERENCES autores(id) ON DELETE CASCADE,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id) ON DELETE CASCADE
);

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    direccion VARCHAR(255),
    telefono VARCHAR(20),
    rol ENUM('admin', 'usuario') DEFAULT 'usuario'
);




INSERT INTO autores (nombre, nacionalidad, fecha_nacimiento) VALUES
('Gabriel García Márquez', 'Colombiana', '1927-03-06'),
('J.K. Rowling', 'Británica', '1965-07-31'),
('George Orwell', 'Británica', '1903-06-25'),
('Isabel Allende', 'Chilena', '1942-08-02'),
('Stephen King', 'Estadounidense', '1947-09-21'),
('Haruki Murakami', 'Japonesa', '1949-01-12'),
('Miguel de Cervantes', 'Española', '1547-09-29'),
('Jane Austen', 'Británica', '1775-12-16'),
('J.R.R. Tolkien', 'Británica', '1892-01-03'),
('Franz Kafka', 'Austrohúngara', '1883-07-03');

INSERT INTO categorias (nombre) VALUES
('Novela'),
('Ciencia Ficción'),
('Terror'),
('Fantasía'),
('Historia');

INSERT INTO libros (titulo, id_autor, id_categoria, precio, url_imagen) VALUES
('Cien años de soledad', 1, 1, 9.99, 'img/cien.jpg'),
('Harry Potter y la piedra filosofal', 2, 4, 8.50, 'img/harry.jpg'),
('1984', 3, 2, 5.99, 'img/1984.jpg'),
('La casa de los espíritus', 4, 1, 15.39, 'img/casa.jpg'),
('El resplandor', 5, 3, 10.99, 'img/resplandor.jpg'),
('Kafka en la orilla', 6, 1, 11.50, 'img/kafkaorilla.jpg'),
('Don Quijote de la Mancha', 7, 5, 14.99, 'img/donquijote.jpg'),
('Orgullo y prejuicio', 8, 1, 9.99, 'img/orgullo.jpg'),
('El señor de los anillos', 9, 4, 20.00, 'img/senor.jpg'),
('La metamorfosis', 10, 2, 7.75, 'img/metamorfosis.jpg');

INSERT INTO usuarios (nombre, email, password, direccion, telefono, rol) VALUES
('admin', 'admin@example.com', 'admin', 'Calle A 123', '123456789', 'admin'),
('usuario', 'usuario@example.com', 'usuario', 'Calle B 456', '987654321', 'usuario'),
('Carlos García', 'carlos@example.com', 'qwerty', 'Calle C 789', '456123789', 'usuario'),
('María López', 'maria@example.com', 'pass1234', 'Av. Siempre Viva 742', '654321987', 'usuario'),
('Pedro Sánchez', 'pedro@example.com', 'abc123', 'Calle Luna 15', '678123456', 'usuario'),
('Lucía Pérez', 'lucia@example.com', 'mypassword', 'Calle Sol 22', '622334455', 'usuario'),
('Administrador2', 'admin2@example.com', 'adminadmin', 'Oficina Central 100', '600700800', 'admin'),
('Sofía Martínez', 'sofia@example.com', 'sofia2025', 'Calle Río 88', '611222333', 'usuario'),
('Luis Fernández', 'luis@example.com', 'luispass', 'Calle Mar 44', '699888777', 'usuario'),
('El ingenioso hidalgo Don Quijote de la Mancha', 7, 5, 14.99, 'img/donquijoteingenioso.jpg'),
('Crónica de una muerte anunciada', 1, 1, 7.99, 'img/cronica.jpg'),
('Ana Torres', 'ana@example.com', 'anatorres', 'Paseo del Prado 10', '688999111', 'usuario');