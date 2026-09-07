import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req: Request, res: Response) => {
  const manifestacoes = await prisma.manifestacao.findMany();
  res.json(manifestacoes);
});

router.get("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const manifestacao = await prisma.manifestacao.findUnique({
    where: { id },
  });

  if (!manifestacao) {
    res.status(404).json({ error: "Manifestação não encontrada" });
    return;
  }

  res.json(manifestacao);
});

export default router;
