import knex from 'knex';

const knx = knex({
    client: 'postgres',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'your_database_user',
        password: 'your_database_password',
        database: 'myapp_test'
    }
});

// reference knex documentation here http://knexjs.org/ 

// TASK 1:
// update this function to take a userId parameter and return only commits created by that user Id
async function getCommits() {
    return await knx('commit').select('*');
}

// TASK 2: 
// Write a function that adds a new row to the commit table using knex with the provided input 
// (assume input is in the correct format already)
async function createCommit(input) {
    // write code here
}

// TASK 3:
// Write a function that deletes a commit with the provided commitId
async function deleteCommit(commitId) {
    // write code here
}

// TASK 4 -- Challenge:
// Write a function that returns a User and all of their associated commits
async function getUserWithCommits(userId) {
    // write code here
}