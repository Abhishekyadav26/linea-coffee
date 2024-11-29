import { createThirdwebClient } from "thirdweb";


const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID as string;

export const Client = createThirdwebClient({
    clientId: CLIENT_ID,
});