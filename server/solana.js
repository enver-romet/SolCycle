const { Connection, PublicKey, TransactionInstruction } = require('@solana/web3.js');

const solanaEndpoint = "https://api.mainnet-beta.solana.com"; 
const connection = new Connection(solanaEndpoint, 'confirmed');

// Function to fetch Solana balance or any other Solana-specific tasks
const fetchSolanaBalance = async (publicKey) => {
    const balance = await connection.getBalance(new PublicKey(publicKey));
    return balance;
}

module.exports = { fetchSolanaBalance };
