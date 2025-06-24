const fs = require("node:fs/promises");
const express = require("express");
const app = express();
app.use(express.json());
const PORT = 5000;
const filePath = "rooms.json";

const readFile = async (data) => {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content);
  } catch (err) {
    console.log(err);
    return [];
  }
};

const writeFile = async (data) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};

app.get("/", (req, res) => {
  res.send("Hello I am from Tashi Hotel");
});
app.get("/rooms", async (req, res) => {
  const rooms = await readFile();
  res.send(rooms);
});

app.get("/rooms/:id", async (req, res) => {
  const rooms = await readFile();
  const id = req.params.id;
  const room = rooms.find((item) => item.id === id);
  if (room) {
    res.json(room);
  } else {
    res.status(404).json({ message: `Room ${id} not found` });
  }
});
app.delete("/rooms/:id", async (req, res) => {
  let rooms = await readFile();
  const id = req.params.id;
  const room = rooms.find((item) => item.id === id);

  if (room) {
    rooms = rooms.filter((item) => item.id !== id);
    await writeFile(rooms);
    res.json({ message: `Room ${id} deleted succesfully` });
  } else {
    res.status(404).json({ message: `Room ${id} not found` });
  }
});

app.put("/rooms/:id", async (req, res) => {
  let rooms = await readFile();
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
    await writeFile(rooms);
    res.json({
      message: `Room ${id} updated successfully`,
      room: newData,
    });
  } else {
    res.status(404).json({ message: `Room ${id} not found` });
  }
});
app.post("/rooms", async (req, res) => {
  let rooms = await readFile();
  const newRoom = req.body;
  const room = rooms.find((item) => item.id === newRoom.id);

  if (room) {
    return res
      .status(400)
      .json({ message: `Room with number ${roomNumber} already exists` });
  }
  rooms.push(newRoom);
  await writeFile(rooms);
  res.status(201).json({ message: "Room created", room: newRoom });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
