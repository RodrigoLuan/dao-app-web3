import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x892eD9Ddfa13C3f971c60eb1e80d001B31446d76");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Gatinho Home Office",
        description: "Esse NFT vai te dar acesso ao GatinhosDAO!",
        image: readFileSync("scripts/assets/satos.jpg"),
      },
    ]);
    console.log("✅ Novo NFT criado com sucesso no !");
  } catch (error) {
    console.error("falha ao criar o novo NFT", error);
  }
})()
