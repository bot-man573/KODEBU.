import { serveFile } from "https://deno.land/std@0.224.0/http/file_server.ts";
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const handler = async (request) => {
  const url = new URL(request.url);
  let filepath = url.pathname;

  if (filepath === "/") {
    filepath = "/index.html";
  }

  try {
    return await serveFile(request, `public${filepath}`);
  } catch {
    return new Response("Not Found", { status: 404 });
  }
};

console.log("HTTP webserver running. Access it at: http://localhost:8000/");

await serve(handler, { port: 8000 });