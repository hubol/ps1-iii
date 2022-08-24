// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import send from "send";
import { getMediiiaPath } from "../../../components/getMediiiaPath";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const name = req.url!.substring("/api/media/".length);
    send(req, name, { root: getMediiiaPath() }).pipe(res);
}
