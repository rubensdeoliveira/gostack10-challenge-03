module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('delivery_problems', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      delivery_id: {
        type: Sequelize.INTEGER,
        references: { model: 'deliveries', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),
  down: queryInterface => queryInterface.dropTable('delivery_problems'),
}
