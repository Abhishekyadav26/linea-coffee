import { chain } from "@/app/chain";
import { getContract } from "thirdweb";

import { Client } from "../client";
import { contractABI } from "./contractAbi";

const contractAddress = "0x5487De2C35889C1939ed5e29398D5DC2F5Ac34b9";

export const contract = getContract({
    client: Client,
    chain:chain,
    address: contractAddress,
    abi: contractABI,
})