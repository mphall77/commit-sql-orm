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
// SQL: SELECT * FROM commit;
async function getCommits() {
    return await knx('commit').select('*');
}

// TASK 2: 
// Write a function that adds a new row to the commit table using knex with the provided input 
// (assume input is in the correct format already)
// SQL: INSERT INTO commit VALUES (...input)
async function createCommit(input) {
    await knx('commit').insert(input).returning('*');
//     knex.insert(input).returning('id').into('commit');
}

// TASK 3:
// Write a function that deletes a commit with the provided commitId
// SQL: DELETE FROM commit WHERE id = commitId;
async function deleteCommit(commitId) {
    knex('commit')
  .where('id' , commitId) // can also pass in a json object for multiple conditions
  .del(['id']) //with the id arg -- adds the returning automatically
}

// TASK 4 -- Challenge:
// Write a function that returns a User and all of their associated commits
async function getUserWithCommits(userId) {
    // write code here
}
