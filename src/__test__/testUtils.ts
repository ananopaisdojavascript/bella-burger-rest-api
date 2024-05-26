export const newUser = {
  "name": "Márcio Nelson Pinto",
  "email": "marcio.nelson.pinto@unifox.com.br",
  "confirm_email": "marcio.nelson.pinto@unifox.com.br",
  "password": "k3XnUsGTrC",
  "confirm_password": "k3XnUsGTrC",
  "salon": false,
  "kitchen": true
}

export const usersArr = [
	{
		"id": 1,
		"name": "Isabel Luiza Farias",
		"email": "isabel-farias89@reisereis.com.br",
		"confirm_email": "isabel-farias89@reisereis.com.br",
		"password": "$2b$10$PTeeXuErkq5lCAso/Qz9VuIMp9OU9FkiOapMa1OpYQA7UVX4g1bGS",
		"confirm_password": "$2b$10$PTeeXuErkq5lCAso/Qz9VuIMp9OU9FkiOapMa1OpYQA7UVX4g1bGS",
		"salon": false,
		"kitchen": true
	},
	{
		"id": 2,
		"name": "Tatiane Beatriz Nunes",
		"email": "tatiane_beatriz_nunes@gerdal.com.br",
		"confirm_email": "tatiane_beatriz_nunes@gerdal.com.br",
		"password": "$2b$10$n4QicTbS5b9taNZDea3Q4eRDjI2KdG9XwzvET3quc74FAqzUwhIeS",
		"confirm_password": "$2b$10$n4QicTbS5b9taNZDea3Q4eRDjI2KdG9XwzvET3quc74FAqzUwhIeS",
		"salon": false,
		"kitchen": true
	},
	{
		"id": 3,
		"name": "Noah João Eduardo Almeida",
		"email": "noah-almeida92@gerdal.com.br",
		"confirm_email": "noah-almeida92@gerdal.com.br",
		"password": "$2b$10$KPYrnhHn71YGFvGoXZtrnOPtMWqs6L6Bvjf6Xrd/ppuBz/z9pdH7.",
		"confirm_password": "$2b$10$KPYrnhHn71YGFvGoXZtrnOPtMWqs6L6Bvjf6Xrd/ppuBz/z9pdH7.",
		"salon": true,
		"kitchen": false
	},
	{
		"id": 4,
		"name": "Isadora Mirella Fernanda da Conceição",
		"email": "isadora_daconceicao@willianareiaepedra.com.br",
		"confirm_email": "isadora_daconceicao@willianareiaepedra.com.br",
		"password": "$2b$10$.MR7xwk4PXxGjg58rbNDDetLPHjmsIouFlgnkYQ/7AogQUy2O4sI2",
		"confirm_password": "$2b$10$.MR7xwk4PXxGjg58rbNDDetLPHjmsIouFlgnkYQ/7AogQUy2O4sI2",
		"salon": true,
		"kitchen": false
	}
]

export const user = {
  "id": 1,
  "name": "Isabel Luiza Farias",
  "email": "isabel-farias89@reisereis.com.br",
  "confirm_email": "isabel-farias89@reisereis.com.br",
  "password": "$2b$10$FtHqGwS1NtYpaA5bKFa2Gemxznmo0UFDlrrb1LqBNvjxyINRYNrH6",
  "confirm_password": "$2b$10$FtHqGwS1NtYpaA5bKFa2Gemxznmo0UFDlrrb1LqBNvjxyINRYNrH6",
  "salon": false,
  "kitchen": true
}

export const deleteUser = {
  "name": "Márcio Nelson Pinto",
  "email": "marcio.nelson.pinto@unifox.com.br",
  "confirm_email": "marcio.nelson.pinto@unifox.com.br",
  "password": "k3XnUsGTrC",
  "confirm_password": "k3XnUsGTrC",
  "salon": false,
  "kitchen": true
}

export const productsArr = [
  {
    "product_id": 1,
    "name": "Café Americano",
    "price": 5,
    "image_url": "https://res.cloudinary.com/ananopaisdojavascript/image/upload/v1716126384/burger-queen-image/american-coffee_p65gkk.jpg",
    "category": "Café da manhã"
  },
  {
    "product_id": 2,
    "name": "Café com Leite",
    "price": 7,
    "image_url": "https://res.cloudinary.com/ananopaisdojavascript/image/upload/v1716126384/burger-queen-image/coffee-with-milk_acssn5.jpg",
    "category": "Café da manhã"
  },
  {
    "product_id": 3,
    "name": "Sanduíche de Presunto com Queijo",
    "price": 10,
    "image_url": "https://res.cloudinary.com/ananopaisdojavascript/image/upload/v1716126386/burger-queen-image/sandwhich_tabqjj.jpg",
    "category": "Café da manhã"
  }
]

export const product = {
  "product_id": 3,
  "name": "Sanduíche de Presunto com Queijo",
  "price": 10,
  "image_url": "https://res.cloudinary.com/ananopaisdojavascript/image/upload/v1716126386/burger-queen-image/sandwhich_tabqjj.jpg",
  "category": "Café da manhã"
}

export const ordersArr = [
  {
    "order_id": 1,
    "client_name": "Pedro Henrique Miguel Iago Almeida",
    "server_name": "Helena Sebastiana Joana Brito",
    "table_number": 5,
    "quantity": 1,
    "product_id": 1
  }
]

export const order = {
  "order_id": 1,
  "client_name": "Pedro Henrique Miguel Iago Almeida",
  "server_name": "Helena Sebastiana Joana Brito",
  "table_number": 5,
  "quantity": 1,
  "product_id": 1
}

export const createOrder = {
  "client_name": "Gabriel Vicente Mendes",
  "server_name": "Stella Sophia Lara Ramos",
  "table_number": 3,
  "quantity": 1,
  "product_id": 9
}

export const updateOrder = {
  "client_name": "Gabriel Vicente Mendes",
  "server_name": "Stella Ramos",
  "table_number": 3,
  "quantity": 1,
  "product_id": 9
}

export const deleteOrder = {
  "client_name": "Gabriel Vicente Mendes",
  "server_name": "Stella Ramos",
  "table_number": 3,
  "quantity": 1,
  "product_id": 9
}