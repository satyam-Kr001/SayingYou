import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID ='665b638b000ea83c026f'
export const DATABASE_ID = '665b64e9000b933381ac'
export const COLLECTION_ID_MESSAGES = '665b64f4003a7b0a9ca1'
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('665b638b000ea83c026f');


    
    
export const databases = new Databases(client);
export const account = new Account(client);


export default client;