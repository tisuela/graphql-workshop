
// We use fetch for this example. A popular alternative is axios.
const fetch = require('node-fetch');

// HTTPS does not work right now! 
const url = "http://api.peterportal.org/graphql"; 

// The query is written as a string -- We'll JSONify it laterrr
const query = `
    query {
        course(id: "DANCE3"){
            id
            department
            school
            professor_history {
                ucinetid
                phone
            }
        }
    }
`;


// The options to be used as arguments when we call fetch
const options = {

    // This contains our query. We send it in the body of the request.
    body: JSON.stringify({query}),

    // Because our request contains information in the body, we must send it as a POST request
    // All clients consuming a GraphQL API must use POST!!
    method: "POST",

    // Not necessary for every Web API, but it's good practice (and required for PeterPortal API)
    headers : {
        "Content-Type": "application/json",
        "x-api-key": "get your API key here: http://api.peterportal.org/docs/Getting-Started/Register-Here/"
    }
    
    
};

fetch(url, options)
    .then(response => response.json())
    .then(json => {
        console.log(json);
    
    })
    .catch(console.error);




