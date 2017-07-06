# CLI digital store 

## Introduction

This is a command line application developed to act as a digital store front. Upon execution, it will present the customer with a table of available products in the digital marketplace. The customer then select products based on their ID, specifies a quantity and is then presented with a total and in the process, the app updates the stores inventory to reflect the purchase. The following software is required to successfully execute the app:

* Unix command line
  * Any Linux distro (e.g. Fedora, Ubuntu, Mint)
  * mac OS
  * Git Bash, cygwin or Bash on Ubuntu on Windows (WSL) should work on Windows
* Nodejs
* mysql-server
* inquirer (npm)
* mysql (npm)

## Walkthrough

1. Clone the repo to your local computer. Change into the repo directory. Use the command `npm install` to install the required node packages, `inquirer` and `mysql`. Ensure all expected files are present with `ls` command.

<img src="/images/command1e.PNG" alt=sql-1>

2. Ensure that sql scripts will function as expected.
<img src="/images/command1k.PNG" alt=sql-2>

<img src="/images/command1j.PNG" alt=sql-3>

3. Enter the mysql command line interface using `mysql -u root -p`. Be sure to enter the password set up for root user of mysql.

<img src="/images/command1f.PNG" alt=sql-4>

4. Create the database "Bamazon" and populate a table with entries using these commands:

  * `SOURCE Bamazon.sql;` (creates database and table)
  
<img src="/images/command1g.PNG" alt=sql-5>

  * `SOURCE 10products.sql;` (populates table with 10 products)

<img src="/images/command1h.PNG" alt=sql-6>

5. Check that table exists using the command `SELECT * FROM products`

<img src="/images/command1i.PNG" alt=sql-7>

6. Exit mysql command line with `CTRL + D`.

7. Use nodejs to execute the `bamazonCustomer.js` file. The store directory will be presented as an array of objects. The relevant command is `node bamazonCustomer.js`.

<img src="/images/command1a.PNG" alt=sql-8>

8. Continue through the prompts.


<img src="/images/command1b.PNG" alt=sql-9>
<img src="/images/command1c.PNG" alt=sql-10>
<img src="/images/command1d.PNG" alt=sql-11>

9. Note that the program will not proceed if an invalid ID is entered or there is insufficient stock.


<img src="/images/command1l.PNG" alt=sql-12>
<img src="/images/command1m.PNG" alt=sql-13>
