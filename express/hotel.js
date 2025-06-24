const express = require("express");
const app = express();
app.use(express.json());
const PORT = 5000;

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.path} ${JSON.stringify(req.body)}`)
  next();
};

const checkBody = (req, res, next) => {
  if (req.body){
    next();
  }
  res.status(400).send(`Body cannot be empty`);
};

app.use(logger);

let rooms = [
  { id: "101", table: true, tv: false, toilet: true },
  { id: "102", table: false, tv: true, toilet: true },
  { id: "103", table: false, tv: true, toilet: false },
  { id: "104", table: false, tv: true, toilet: false },
];

app.get("/", (req, res) => {
  res.send("Hello I am from Tashi Hotel");
});
app.get("/rooms", (req, res) => {
  res.send(rooms);
});

app.get("/rooms/:id", (req, res) => {
  const id = req.params.id;
  const room = rooms.find((item) => item.id === id);
  if (room) {
    res.json(room);
  } else {
    res.status(404).json({ message: `Room ${id} not found` });
  }
});
app.delete("/rooms/:id", (req, res) => {
  const id = req.params.id;
  const room = rooms.find((item) => item.id === id);

  if (room) {
    rooms = rooms.filter((item) => item.id !== id);
    res.json({ message: `Room ${id} deleted succesfully` });
  } else {
    res.status(404).json({ message: `Room ${id} not found` });
  }
});

app.put("/rooms/:id", checkBody, (req, res) => {
  const id = req.params.id;
  const newData = req.body;
  const room = rooms.find((item) => item.id === id);
  const keys = Object.keys(newData);
  const requiredKeys = ["table", "tv", "toilet"];
  const missingKeys = requiredKeys.filter((key) => !keys.includes(key));

  if (missingKeys.length > 0) {
    return res.status(400).json({
      message: `Please provide all information: ${missingKeys.join(",")}`,
    });
  }
  if (room) {
    console.log(JSON.stringify(rooms));

    rooms = rooms.map((item) => {
      if (item.id === id) {
        newData.id = id;
        return newData;
      }
      return item;
    });
    console.log(JSON.stringify(rooms));
    res.json({
      message: `Room ${id} updated successfully`,
      room: newData,
    });
  } else {
    res.status(404).json({ message: `Room ${id} not found` });
  }
});
app.post("/rooms", checkBody,(req, res) => {
  const newRoom = req.body;
  const room = rooms.find((item) => item.id === newRoom.id);

  if (room) {
    return res
      .status(400)
      .json({ message: `Room with number ${roomNumber} already exists` });
  }
  rooms.push(newRoom);
  res.status(201).json({ message: "Room created", room: newRoom });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
