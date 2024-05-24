import path from 'path'
import { defineConfig } from "vite";

export default defineConfig({
    root: path.join(process.cwd(), 'client'),
    server: {
        cors: {
            origin: 'http://127.0.0.1:3000'
        }
    }
})