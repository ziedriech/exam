const api_key = "h523hDtETbkJ3nSJL323hjYLXbCyDaRZ";
const client_id = 100;
const api_url = "https://api.recruitment.shq.nz";
let domains;

async function fetchDomains() {

    const response = await fetch(`${api_url}/domains/${client_id}?api_key=${api_key}`)

    if(!response.ok) {
        throw new Error(`Failed to get domains: ${response.status}`);
        } 
    return response.json();
}

async function fetchZone(zones){
    for (const zone of zones) {
        console.log(zone.uri)
    }
}

async function main() {
    domains = await fetchDomains();

    for(const domain of domains) {
        console.log(domain.name);
        await fetchZone(domain.zones)
    }
}

main();

//can be run using any app with jscript debugger