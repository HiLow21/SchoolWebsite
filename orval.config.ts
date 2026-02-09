import { defineConfig } from 'orval';
//orval doesnt load dotenv automatically
import 'dotenv/config';

const swaggerUrl = process.env.VITE_PUBLIC_SWAGGER_URL || 'http://0.0.0.0:3000/api-docs.json';

export default defineConfig({
    petstore: {
        input: {
            target: './api-spec.json',
        },
        output: {
            mode: 'tags-split',
            target: 'src/api/generated',
            client: 'axios',
            mock: false,
        },
    },
});
