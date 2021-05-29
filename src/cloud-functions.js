//import Moralis from 'moralis';

const Moralis = {}; // to hide IDE errors

Moralis.Cloud.define("getTokens", async (request) => {
    const { userAddress } = request.params;
    if (!userAddress) {
        return [];
    }

    const tokenQuery = new Moralis.Query("EthTokenBalance");
    tokenQuery.equalTo("address", userAddress.toLowerCase());
    const tokenResult = await tokenQuery.find();

    const results = tokenResult.map((token) => token.attributes);

    const balQuery = new Moralis.Query("_EthAddress");
    balQuery.equalTo("objectId", userAddress.toLowerCase());
    const balResult = await balQuery.first({useMasterKey: true});
    console.log(tokenQuery);

    results.push({
        name: "Ethereum",
        symbol: "ETH",
        balance: balResult.get("EthTokenBalance"),
        decimals: 18
    });

    return results;
})

Moralis.Cloud.define("getTransactions", function(request) {
    const userAddress = request.params.userAddress;
    const query = new Moralis.Query("EthTransactions");
    query.equalTo("from_address", userAddress);
    query.descending("block_number");
    query.limit(10);
    
    return query.find();
  })