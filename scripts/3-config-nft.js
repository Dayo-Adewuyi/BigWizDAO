import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xAdd14cAfBefdD2cee3A8BAf878D601A53a5CBAD2",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Wizkid FC amulet",
        description: "This NFT will give you access to BigWizDAO!",
        image: readFileSync("scripts/assets/wizzy.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()