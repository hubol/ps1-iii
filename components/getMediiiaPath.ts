import { path } from "app-root-path";

export function getMediiiaPath() {
    if (process.env.NODE_ENV === "production") return "./_next/static/mediiia";
    return `${path}/media`;
}
