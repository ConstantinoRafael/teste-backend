import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);

const port = process.env.PORT || 4568;

app.get("/ping", (req, res) => {
  return res.send("pong");
});

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
});
