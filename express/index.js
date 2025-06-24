const express = require("express");

const PORT =3000;

const app = express();

// app.get("/health", (req, res) => {
//     res.send("Server is Healthy()")
// });


app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
