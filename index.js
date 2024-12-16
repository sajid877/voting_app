// const sql = require("mssql");

// var config = {
//     server: "DESKTOP-GHLCNLI\\SQLEXPRESS",
//     database: "voting_app",
//     user: "sa",
//     password: "123",
//     driver: "msnodesqlv8",
//     options: {
//         encrypt: false,
//         trustedConnection: true,
//         connectTimeout: 30000,
//         enableArithAbort: true,
//     },
//     port: 1433,
// };

// // Assuming you want to insert values dynamically, these values need to be passed or set
// const firstName = "John";
// const lastName = "Doe";
// const username = "johndoe123";
// const email = "john.doe@example.com";
// const phone = "1234567890";
// const nic = "12345-6789012-3";
// const password = "securepassword";

// // Connect to SQL Server
// sql.connect(config, function(err) {
//     if (err) {
//         console.log("Error connecting to SQL Server:", err);
//         return;
//     }

//     // Create a request and add parameters
//     var request = new sql.Request();
//     request.input("firstName", sql.VarChar, firstName)
//         .input("lastName", sql.VarChar, lastName)
//         .input("username", sql.VarChar, username)
//         .input("email", sql.VarChar, email)
//         .input("phone", sql.VarChar, phone)
//         .input("nic", sql.VarChar, nic)
//         .input("password", sql.VarChar, password)
//         // Execute the query to insert data into the "Voters" table
//         .query(
//             `INSERT INTO Voters (firstName, lastName, username, email, phone, nic, password) 
//              VALUES (@firstName, @lastName, @username, @email, @phone, @nic, @password)`
//         )
//         .then(result => {
//             console.log("Data inserted successfully:", result);
//         })
//         .catch(error => {
//             console.error("Error executing query:", error);
//         });
// });
