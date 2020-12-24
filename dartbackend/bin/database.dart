/*
 * @Author: Nathaniel
 * @Date: 2020-12-24 13:39:33
 */
import 'dart:async';
import 'package:sqljocky5/sqljocky.dart';

/// Drops the tables if they already exist
Future<void> dropTables(MySqlConnection connection) async {
  print("Dropping tables ...");
  await connection.execute("DROP TABLE IF EXISTS pets, people");
  print("Dropped tables!");
}

Future<void> createTables(MySqlConnection connection) async {
  print("Creating tables ...");
  await connection
      .execute('CREATE TABLE people (id INTEGER NOT NULL auto_increment, '
          'name VARCHAR(255), '
          'age INTEGER, '
          'PRIMARY KEY (id))');
  await connection
      .execute('CREATE TABLE pets (id INTEGER NOT NULL auto_increment, '
          'name VARCHAR(255), '
          'species TEXT, '
          'owner_id INTEGER, '
          'PRIMARY KEY (id),'
          'FOREIGN KEY (owner_id) REFERENCES people (id))');
  print("Created table!");
}

Future<void> insertRows(MySqlConnection connection) async {
  print("Inserting rows ...");
  List<StreamedResults> r1 = await (await connection
          .preparedWithAll("INSERT INTO people (name, age) VALUES (?, ?)", [
    ["Dave", 15],
    ["John", 16],
    ["Mavis", 93],
  ]))
      .toList();
  print("People table insert ids: " + r1.map((r) => r.insertId).toString());
  List<StreamedResults> r2 = await (await connection.preparedWithAll(
          "INSERT INTO pets (name, species, owner_id) VALUES (?, ?, ?)", [
    ["Rover", "Dog", 1],
    ["Daisy", "Cow", 2],
    ["Spot", "Dog", 2]
  ]))
      .toList();
  print("Pet table insert ids: " + r2.map((r) => r.insertId).toString());
  print("Rows inserted!");
}

Future<void> readData(MySqlConnection connection) async {
  Results result = await (await connection
          .execute('SELECT p.id, p.name, p.age, t.name AS pet, t.species '
              'FROM people p '
              'LEFT JOIN pets t ON t.owner_id = p.id'))
      .deStream();
  print(result);
  print(result.map((r) => r.byName('name')));
}

main() async {
  var settings = ConnectionSettings(
    user: "root",
    password: "Nathan@126.com",
    host: "localhost",
    port: 3306,
    db: "gRPC",
  );

  // create a connection
  print("Opening connection ...");
  var connection = await MySqlConnection.connect(settings);
  print("Opened connection!");
  await dropTables(connection);
  await createTables(connection);
  await insertRows(connection);
  await readData(connection);
  await connection.close();
}
