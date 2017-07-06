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

1. Clone the repo to your local computer. Change into the repo directory. Use the command `npm install` to install the required node packages, `inquirer` and `mysql`.

2. Ensure that sql scripts will function as expected.
<img src="/images/command1k.PNG" alt=sql-1>

<img src="/images/command1j.PNG" alt=sql-2>

3. Enter the mysql command line interface using `mysql -u root -p`. Be sure to enter the password set up for root user of mysql.

<img src="/images/command1f.PNG" alt=sql-1>

