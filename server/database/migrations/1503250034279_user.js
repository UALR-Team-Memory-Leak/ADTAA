'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      //todo: move role assignment to ROOT_USER only when approving register requests
      table.int('role', 4).notNullable() //putting role assignment here for now
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema

// CREATE TABLE users (
//   id int NOT NULL,
//   username varchar(80) NOT NULL UNIQUE ,
//   email varchar(255) NOT NULL UNIQUE,
//   password varchar(60) NOT NULL,
//   role int(4) NOT NULL,
//   PRIMARY KEY (id)
// );
