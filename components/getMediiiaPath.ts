import { path } from "app-root-path";

export function getMediiiaPath() {
    if (process.env.NODE_ENV === "production") return "./.next/static/mediiia";
    return `${path}/media`;
}
