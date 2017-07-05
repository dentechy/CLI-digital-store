const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Dev22tech88*',
  database: 'Bamazon'
});

connection.connect(function(err) {
  if (err) throw err;

  openStore();
});

function openStore() {
  connection.query('SELECT * FROM products', function(err,res) {
    if (err) throw err;

    console.log(res);
    inquirer.prompt([

        {
          type: "input",
          message: "Enter the ID of the product you would like to buy",
          name: "item_id",
        },

        {
          type: "input",
          message: "How many units would you like to buy?",
          name: "stock_quantity"
        }
    ])
  });
}



