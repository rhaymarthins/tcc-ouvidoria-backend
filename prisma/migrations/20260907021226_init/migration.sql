-- CreateTable
CREATE TABLE "manifestacoes" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pendente',
    "descricao" TEXT NOT NULL,
    "protocolo" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "manifestacoes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "manifestacoes_protocolo_key" ON "manifestacoes"("protocolo");
