
import { ConnectButton } from "thirdweb/react";
import { chain } from "./chain";
import { Client } from "./client";
import { BuyMeCoffee } from "@/app/components/Buymecoffee";

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '100vh',
      marginTop: '2rem',
    }}>
      <h1 style={{ marginBottom: "1rem"}}>Buy me a <span style={{
        color: "greenyellow"
      }}>coffee</span></h1>
      <ConnectButton 
        client={Client}
        chain={chain}
      />
      <BuyMeCoffee />
    </div>
  );
}