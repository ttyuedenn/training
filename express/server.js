const express = require("express");

const PORT =8000;

const app = express();

// app.get("/health", (req, res) => {
//     res.send("Server is Healthy()")
// });

let details = [
   {name: "Jigme", id:1},
   {name: "Tashi", id:2},
   {name: "Yuden", id:3},
   {name: "Jamyang", id:4},
   {name: "Norbu", id:5},
   {name: "Susma", id:6},
   {name: "Phurba", id:7}
];

app.get("/details", (req, res) => {
    res.json(details);
});

// app.get("/details/:id", (req, res) =>{
//   console.log(req.params);
//   const id = Number(req.params.id);
//   res.status(500).json(details.find((detail) => detail.id === id))
//   });

//show error if the limit is crossed.
app.get("/details/:id", (req, res) =>{
  console.log(req.params);
  const id = Number(req.params.id);
  const detail = details.find((detail) => detail.id === id);
  
  if (!detail){
    res.status(404).json({message: `a detail with the id of ${id} was not found`})
  } else {
    res.status(200).json(detail);
  }
  });

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});