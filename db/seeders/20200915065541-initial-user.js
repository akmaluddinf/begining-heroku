'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: 'akmal',
      email: 'akmal@email.io',
      password: bcrypt.hashSync('password', 10),
      avatar: '',
      created_at: Sequelize.fn('NOW'),
      updated_at: Sequelize.fn('NOW')
    },
    {
      name: 'dicky',
      email: 'dicky@email.io',
      password: bcrypt.hashSync('password', 10),
      avatar: '',
      created_at: Sequelize.fn('NOW'),
      updated_at: Sequelize.fn('NOW')
    },
    {
      name: 'sandi',
      email: 'sandi@email.io',
      password: bcrypt.hashSync('password', 10),
      avatar: '',
      created_at: Sequelize.fn('NOW'),
      updated_at: Sequelize.fn('NOW')
    },
    {
      name: 'ricky',
      email: 'ricky@email.io',
      password: bcrypt.hashSync('password', 10),
      avatar: '',
      created_at: Sequelize.fn('NOW'),
      updated_at: Sequelize.fn('NOW')
   },
   {
    name: 'disa',
    email: 'disa@email.io',
    password: bcrypt.hashSync('password', 10),
    avatar: '',
    created_at: Sequelize.fn('NOW'),
    updated_at: Sequelize.fn('NOW')
 }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
