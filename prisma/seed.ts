/// <reference types="node" />
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.manifestacao.createMany({
    data: [
      {
        tipo: "Reclamação",
        status: "Pendente",
        descricao: "Buraco na calçada da Rua das Flores próximo ao número 142.",
        protocolo: "OUV-2026-001",
      },
      {
        tipo: "Sugestão",
        status: "Em andamento",
        descricao:
          "Instalação de lixeiras de coleta seletiva nas praças públicas.",
        protocolo: "OUV-2026-002",
      },
      {
        tipo: "Elogio",
        status: "Resolvido",
        descricao: "Excelente atendimento da equipe de limpeza urbana.",
        protocolo: "OUV-2026-003",
      },
      {
        tipo: "Denúncia",
        status: "Pendente",
        descricao:
          "Descarte irregular de resíduos em terreno baldio na Rua Sete de Setembro.",
        protocolo: "OUV-2026-004",
      },
      {
        tipo: "Reclamação",
        status: "Em andamento",
        descricao:
          "Falta de iluminação pública na Avenida Central após as 22h.",
        protocolo: "OUV-2026-005",
      },
    ],
  });

  console.log("Seed executado com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
