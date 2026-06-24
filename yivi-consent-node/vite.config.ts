import path from 'path'
import { defineConfig } from "vite";

export default defineConfig({
    root: path.join(process.cwd(), 'client'),
    build: {
        outDir: path.resolve(process.cwd(), 'dist/public'),
    },
    server: {
        cors: {
            origin: 'http://127.0.0.1:3000'
        }
    }
})