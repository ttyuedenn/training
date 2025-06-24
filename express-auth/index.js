const express = require("express");
const productRoutes = require("./routes/product.route");
const orderRoutes = require("./routes/order.route");
const PORT =3000;

const app = express();
app.use(express.json());

app.get("/health", (req, res) =>{
    res.send ("Server is healthy");
}), 
app.use("/products", productRoutes)
app.use("/order", orderRoutes)

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
});