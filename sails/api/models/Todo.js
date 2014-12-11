/**
* Todo.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'postgresql',
  tableName: 'todos',

  attributes: {
    // id: {
    //   type: 'integer',
    //   unique: true,
    //   primaryKey: true,
    //   columnName: 'id'
    // },
    title: {
      type: 'string',
      columnName: 'title'
    },
    isCompleted: {
      type: 'boolean',
      defaultsTo: false,
      columnName: 'is_completed'
    }
  }
};

