# This repository has been cloned from my own assignment repository in CS2031-DBP
# PC2 - Frontend

### Enunciado

La empresa DBP-Market es un nuevo startup de ecommerce que se centra en la venta de distintos ingredientes y productos alimenticios al mejor precio del mercado para salvar el bolsillo de los Utecsinos. Con el objetivo de mejorar la experiencia de sus clientes y facilitar la gestión de productos y usuarios, DBP-Market está buscando un desarrollador Frontend talentoso para crear una interfaz de usuario utilizando React. Esta interfaz debe interactuar con la API REST de la empresa para permitir la autenticación de usuarios, el registro de nuevos usuarios y la administración completa de productos.

Los productos de la base de datos incluyen los siguientes detalles: 
- nombre del producto
- descripción
- precio
- cantidad 
- url de la imagen del producto.

Y los usuarios de la base de datos incluyen:

- nombre completo
- email 
- contraseña 
- username


Los endpoints de la API REST son los siguientes:

### Autenticación y Registro (2 pts)

| Método  |  Descripción  |
|---|---|
|	**POST**   |   Login: /api/auth/login  |
|	**POST**   |   Registro: /api/auth/register |

### Administración de Productos (10 pts)

| Método  |  Descripción  |
|---|---|
| POST |      Crear Producto: /api/products/  |
| GET   |     Obtener Productos (paginación): /api/products?skip={skip }&limit={limit} |
| GET   |    Obtener Producto por ID: /api/products/{product_id} |
| PUT   |     Actualizar Producto: /api/products/{product_id} |
| DELETE| Eliminar Producto: /api/products/{product_id} |

Nota: Para ver ejemplos de consulta en json, visitar la documentación de la API en el siguiente link: `http://{BACKEND_URL}:8000/docs`

## Inicializar tu proyecto Vite

Para inicializar tu proyecto con Vite puedes usar los pasos vistos en clase o ver los mismos en la documentación de Vite [**aquí**](https://vitejs.dev/guide/).

## Documentación permitida 

- [**Axios**](https://axios-http.com/docs/intro)
- [**React**](https://react.dev/reference/react)
- [**React Router**](https://reactrouter.com/web/guides/quick-start)


Las librerías de componentes estan permitidas, acontinuación se listan algunas, sin embargo si deseas usar alguna que no esté listada avisa a tu profesor para comprobar cual es la pagina oficial de esta librería y así no considerarlo como plagio.

- [**Material UI**](https://mui.com/material-ui/getting-started/)
- [**Ant Design**](https://ant.design/)
- [**React Bootstrap**](https://react-bootstrap.netlify.app/docs/components/accordion)

De igual manera las librerias de estilos css estan permitidas, si tienes conocimiento de alguna no mencionada avisa a tu profesor.

- [**Bootstrap**](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [**Tailwind CSS**](https://tailwindcss.com/docs)
- [**Bulma**](https://bulma.io/documentation/)
