// API and fetch

// Http Methods
// GET => retrieves data and has no secondary effect.
// POST => sends data to a server to add resources. 
// HEAD, DELETE, PATCH...

import extractDomain from 'extract-domain';

let buttonConvert = document.getElementById('#buttonConvert');

buttonConvert.click = () => {
    let textAreaUrls = document.getElementById('#textAreaUrls');
    let urls = textAreaUrls.innerText.split('\n');
    let domains = extractDomain(urls);
    let textAreaDomains = document.getElementById('#textAreaDomains');
    textAreaDomains.innerText = "";
    for(domain of domains) {
        textAreaDomains.innerText += domain + '\n';
    } 
}
