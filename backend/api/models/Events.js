/**
 * Events.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    descripción:{
      type: 'string'
    },
    tipo:{
      type:'string'
    },
    fecha:{
      type: 'string'
    },
    hora:{
      type:'string'
    },
    lugar:{
      type:'object'
    },
  },
  connection:'mongodb'
};

