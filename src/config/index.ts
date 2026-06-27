import { config } from 'dotenv';
import { resolve } from 'node:path';

config({ path: resolve(process.cwd(), '.env') });

const { PORT } = process.env;

export const Config = {
    PORT,
};
