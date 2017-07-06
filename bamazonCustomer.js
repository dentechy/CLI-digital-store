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
          validate: function(value) {
            var x = parseInt(value);
            global.X = x
            for (i = 0; i < res.length; i++) {

              if (x === parseInt(res[i].item_id)) {
                console.log("\n" + "You selected " + res[i].product_name);
                return true;
              }
              else if (i == (res.length - 1)) {
              console.log("\n" + "The requested item does not exist!");
              return false;
              }
            }
          }
        },

        {
          type: "input",
          message: "How many units would you like to buy?",
          name: "stock_quantity",
          validate: function(val) {
            var y = parseInt(val);
            for (j = 0; j < res.length; j++) {
              if (X === parseInt(res[j].item_id)) {

                if (y > parseInt(res[j].stock_quantity)) {
                  console.log("\n" + "Not enough stock!");
                  return false;
                }
                else {
                  return true;
                }
            }
          }
        }
      }
    ])
  });
}



