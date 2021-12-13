/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
    ALTER TABLE users
    ADD COLUMN email VARCHAR(40),
    ADD COLUMN password VARCHAR(100),
    ADD COLUMN type VARCHAR(20);
    `);
};

exports.down = (pgm) => {
  pgm.sql(`
    ALTER TABLE users
    DROP COLUMN password,
    DROP COLUMN type,
    DROP COLUMN email,
    `);
};
