import Pocketbase from 'pocketbase';

const POCKETBASE_API_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL || 'http://127.0.0.1:8090';

let pocketbaseClient = null;

try {
    pocketbaseClient = new Pocketbase(POCKETBASE_API_URL);
} catch (e) {
    console.warn('PocketBase client init warning:', e);
}

export default pocketbaseClient;
export { pocketbaseClient };
