
// api url
const api_url = 
"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d";  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
        <th>Rank </th>
        <th>Image</th>
        <th>Symbol</th>
          <th>Name</th>
          <th>Price</th>
          <th>24h High</th>
          <th>24h Low</th>
          <th>24h Change</th>
          <th>coin graph</th>
         </tr>`;

    for (let r of data) {
        tab += `<tr> 
        <td>${r.market_cap_rank}</td>  
        <td>${r.symbol}</td> 
    <td>${r.name}</td> 
    <td>${r.current_price}</td>  
    <td>${r.high_24h}</td> 
    <td>${r.low_24h}</td> 
    <td>${r.price_change_24h}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("crypto").innerHTML = tab;
}