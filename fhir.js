const Client=require('fhir-kit-client');
const fhirClient = new Client({
    baseUrl: 'https://hapi.fhir.org/baseR4'
});


fhirClient.smartAuthMetadata().then((response) => {
        console.log(response);
        });

module.exports=fhirClient;