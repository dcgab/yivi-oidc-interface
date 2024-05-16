import path from 'path'
import { defineConfig } from "vite";

export default defineConfig({
    root: path.join(process.cwd(), 'client'),
    server: {
        cors: {
            origin: 'http://localhost:3000'
        }
    }
})