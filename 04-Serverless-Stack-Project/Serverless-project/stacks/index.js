import { StorageStack } from "./StorageStack.js";
import { ApiStack } from "./ApiStack";
import { AuthStack } from "./AuthStack";
import { FrontendStack } from "./FrontendStack";

import { App } from "@serverless-stack/resources";

/**
 * @param {App} app
 */
export default function (app) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  });
  app.stack(StorageStack).stack(ApiStack).stack(AuthStack).stack(FrontendStack);
}
