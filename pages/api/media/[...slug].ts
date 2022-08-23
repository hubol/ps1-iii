// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import send from "send";
import appRootPath from "app-root-path";
import * as fs from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const name = req.url!.substring("/api/media/".length);
    console.log(fs.readdirSync("./"));
    console.log(fs.readdirSync(appRootPath as any));
    console.log(name);
    send(req, name, { root: `${appRootPath}/media` }).pipe(res);
}
