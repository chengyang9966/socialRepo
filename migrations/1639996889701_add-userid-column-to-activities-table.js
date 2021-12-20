/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
    ALTER TABLE activities
    ADD COLUMN userid int NOT NULL 
    `);
};

exports.down = (pgm) => {
  pgm.sql(`
    ALTER TABLE activities
    DROP COLUMN userid
    `);
};
