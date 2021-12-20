/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
CREATE TABLE IF NOT EXISTS activities (
    id SERIAL PRIMARY KEY,
    date date NOT NULL,
    title VARCHAR(20) NOT NULL,
    description VARCHAR(400),
    time time,  
    location VARCHAR(100), 
    code VARCHAR(20), 
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
`);
};

exports.down = (pgm) => {
  pgm.sql(`DROP TABLE activities;`);
};
