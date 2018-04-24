
//Load dependecies
var mysql = require("mysql");
var inquirer = require("inquirer");


//create connection to db
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "Bamazon"
})

function start(){
  //prints the items for sale and their details
  connection.query('SELECT * FROM products', function(err, res){
    if(err) throw err;
  
    console.log('_.~"~._.~"~._.~Welcome to BAMazon~._.~"~._.~"~._')
    console.log('----------------------------------------------------------------------------------------------------')
  
    for(var i = 0; i<res.length;i++){
      console.log("ID: " + res[i].id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity);
      console.log('--------------------------------------------------------------------------------------------------')
    }
  
    console.log(' ');
    inquirer.prompt([
      {
        type: "input",
        name: "id",
        message: "What is the ID of the product you would like to purchase?",
        validate: function(value){
          if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
            return true;
          } else{
            return false;
          }
        }
      },
      {
        type: "input",
        name: "qty",
        message: "How much would you like to purchase?",
        validate: function(value){
          if(isNaN(value)){
            return false;
          } else{
            return true;
          }
        }
      }
      ]).then(function(ans){
        var whatToBuy = (ans.id)-1;
        var howMuchToBuy = parseInt(ans.qty);
        var grandTotal = parseFloat(((res[whatToBuy].price)*howMuchToBuy).toFixed(2));
  
        //check if quantity is sufficient
        if(res[whatToBuy].stock_quantity >= howMuchToBuy){
          //after purchase, updates quantity in Products
          connection.query("UPDATE products SET ? WHERE ?", [
          {stock_quantity: (res[whatToBuy].stock_quantity - howMuchToBuy)},
          {ItemID: ans.id}
          ], function(err, result){
              if(err) throw err;
              console.log("Success! Your total is $" + grandTotal.toFixed(2) + ". Your item(s) will be shipped to you in 3-5 business days.");
          });
  
          connection.query("SELECT * FROM products", function(err, deptRes){
            if(err) throw err;
            var index;
            for(var i = 0; i < deptRes.length; i++){
              if(deptRes[i].department_name === res[whatToBuy].department_name){
                index = i;
              }
            }
            
            //updates totalSales in departments table
            connection.query("UPDATE products SET ? WHERE ?", [
            {TotalSales: deptRes[index].TotalSales + grandTotal},
            {department_name: res[whatToBuy].department_name}
            ], function(err, deptRes){
                if(err) throw err;
                //console.log("Updated Dept Sales.");
            });
          });
  
        } else{
          console.log("Sorry, there's not enough in stock!");
        }
  
        reprompt();
      })
  })
  }
  
  //Asks customer if they would like to purchase another item
  function reprompt(){
    inquirer.prompt([{
      type: "confirm",
      name: "reply",
      message: "Would you like to purchase another item?"
    }]).then(function(ans){
      if(ans.reply){
        start();
      } else{
        console.log("See you soon!");
      }
    });
  }
  
  start();





/* Code used to populate database
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ?";
    var values = [
      ['Towels', 'Health and Household', '16.99', '17'],
      ['Boots', 'Clothing, Shoes, and Jewlery', '72.99', '80'],
      ['Cat Food', 'Pet Supplies', '12.99', '25'],
      ['Cat Litter', 'Pet Supplies', '5.99', '120'],    
      ['Jeans', 'Clothing, Shoes and Jewelry', '16.99', '17'],
      ['Hand Soap', 'Health and Household', '2.99', '80'],
      ['Basketball', 'Sports and Outdoors', '20.99', '29'],
      ['Tent', 'Sports and Outdoors', '25.99', '2'],
      ['Shower Curtain', 'Health and Household', '30.99', '200'],
      ['Jumper Cabels', 'Automotive', '5.99', '17'],                        
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result);
    });
  });*/
