import { type APIRoute } from "astro"
import { readFile } from "fs"

export const POST: APIRoute = async ({ request }) => {
    return new Response(JSON.stringify({
        response: ''
    }))
}