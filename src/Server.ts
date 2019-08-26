import {ServerLoader, ServerSettings, GlobalAcceptMimesMiddleware} from "@tsed/common";
import path = require('path')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const rootDir = path.resolve(__dirname)

@ServerSettings({
  httpPort: "127.0.0.1:8088",
  httpsPort: "127.0.0.2:8089",
  mount: {
    '/api/': `${rootDir}/controllers/*.ts`
  },
  rootDir,
  acceptMimes: ["application/json"]
})
export class Server extends ServerLoader {
  /**
   * This method let you configure the express middleware required by your application to works.
   * @returns {Server}
   */
  public $beforeRoutesInit(): void|Promise<any> {
      this
        .use(GlobalAcceptMimesMiddleware)
        .use(cookieParser())
        .use(compress({}))
        .use(methodOverride())
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({
          extended: true
        }));

      return null;
  }
}