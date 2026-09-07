import express, { Request, Response } from "express";
import manifestacoesRouter from "./routes/manifestacoes";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ status: "ok", message: "API de Ouvidoria Pública" });
});

app.use("/manifestacoes", manifestacoesRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
