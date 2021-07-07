import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from 'typeorm';

class AlterProviderFieldToProvicerId1624399602789
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('appointments', 'provider');

    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'provider_id',
        type: 'uuid',
        isNullable: true
      })
    );

    await queryRunner.createForeignKey(
      'appointments',
      new TableForeignKey({
        name: 'AppointmentProvider',
        columnNames: ['provider_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    );
  }
  /*
    On delete é a propriedade que informa
    oq vai acontecer com a tabela appointment
    caso o usuario seja deletado.

    RESTRICT: não vai deixar o usuarío ser deletado.
    SET NULL: seta no caso o id para nulo.
    CASCADE: se deletar o usuario, vai deletar todos os appointments dos quais ele está relacionado.
  */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('appointments', 'AppointmentProvider');

    await queryRunner.dropColumn('appointments', 'provider_id');

    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'provider',
        type: 'varchar'
      })
    );
  }
}

export default AlterProviderFieldToProvicerId1624399602789;
