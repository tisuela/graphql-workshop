const fetch = require('node-fetch');

// HTTPS does not work right now! 
const url = "http://api.peterportal.org/graphql"; 

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

const options = {
    body: JSON.stringify({query}),
    method: "POST",
    headers : {
        "Content-Type": "application/json",
        "x-api-key": "graphql_example-5649cc123aff6b345ee2e83827006679d88490812d6c525761dae2274ad680b4"
    }
    
    
};

fetch(url, options)
    .then(response => response.json())
    .then(json => {
        console.log(json);
    
    })
    .catch(console.error);




