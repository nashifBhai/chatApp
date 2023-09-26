//import express
const express = require("express");
//import cors
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret: username, first_name:username},
        {headers: {"private-key": "8f792aba-751a-4585-9d74-9ca01a03a527" }}
    )
    return res.status(r.status).json(r.data)
  }
  catch(e){
    return res.status(e.response.status).json(e.response.data)
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);