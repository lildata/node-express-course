const express = require("express");
const app = express();

app.listen(8000, function() {
  console.log("Server is running");
});

const mockUserData = [{ name: "Mark" }, { name: "Jill" }];

app.get("/users", function(req, res) {
  res.json({
    success: true,
    message: "Here are the users",
    users: mockUserData,
  });
});

app.get("/users/:id", function(req, res) {
  console.log("ID: " + req.params.id);
  res.json({
    success: true,
    message: "Here is one user",
    users: req.params.id,
  });
});

app.post("/login", function(req, res) {
  const user = req.body.user;
  const pass = req.body.pass;

  const storedUser = "bob";
  const storedPass = "secret";

  if (user === storedUser && pass === storedPass) {
    res.json({
      sucess: true,
      message: "its a match",
      token: "THE token",
    });
  } else {
    res.json({
      success: false,
      message: "user/pass dont match...",
    });
  }
});
