// ─────────────────────────────────────────────────────────────
// Directorio médico de Centro Médico Real
// GENERADO con scripts/sql_a_ts.py desde el volcado SQL de tbMedicos.
// No editar a mano: corrija la base de datos y vuelva a generar.
//
// Normalizaciones aplicadas: acentos y nombres de especialidad unificados,
// espacios sobrantes, teléfonos con varias líneas separados, el registro
// "Anestesiologia" (un departamento) excluido.
// ─────────────────────────────────────────────────────────────

export type Medico = {
  id: number
  nombre: string
  especialidad: string
  /** Subespecialidad tal como la declara el médico, si difiere de la especialidad */
  detalle?: string
  consultorio: string
  telefonos: string[]
  horario: string | null
  /** Archivo de foto en el servidor actual de CMR (aún no disponible aquí) */
  foto: string | null
}

export const medicos: Medico[] = [
  {
    "id": 15,
    "nombre": "Rafael Abreu",
    "especialidad": "Pediatría",
    "consultorio": "110",
    "telefonos": [
      "809-530-1604"
    ],
    "horario": null,
    "foto": "rafaelabreu.jpg"
  },
  {
    "id": 44,
    "nombre": "Josefina Acosta",
    "especialidad": "Ginecología y Obstetricia",
    "detalle": "Ginecología",
    "consultorio": "318",
    "telefonos": [
      "809-530-0409"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 64,
    "nombre": "Ulises Acosta",
    "especialidad": "Neurocirugía",
    "consultorio": "505",
    "telefonos": [
      "809-530-4138"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 26,
    "nombre": "Elvyn Alcantara",
    "especialidad": "Cirugía Pediátrica",
    "consultorio": "112",
    "telefonos": [
      "809-518-1770"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 95,
    "nombre": "Alexandro Alvarez",
    "especialidad": "Cirugía General",
    "consultorio": "111",
    "telefonos": [
      "809-518-2858"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 36,
    "nombre": "Johanna Alvarez",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "303",
    "telefonos": [
      "809-537-1688"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 178,
    "nombre": "Juan J. Batista",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "419",
    "telefonos": [
      "809-537-3940"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 83,
    "nombre": "Dante Beato",
    "especialidad": "Gastroenterología",
    "consultorio": "305",
    "telefonos": [
      "809-539-5878"
    ],
    "horario": null,
    "foto": "dantebeato.jpg"
  },
  {
    "id": 50,
    "nombre": "Ignacio Belen",
    "especialidad": "Neumología",
    "consultorio": "317",
    "telefonos": [
      "809-537-6665"
    ],
    "horario": "Lunes a Jueves 3:00 pm a 6:00 pm",
    "foto": "inaciobelen.jpg"
  },
  {
    "id": 37,
    "nombre": "Adalgisa Brito",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "320",
    "telefonos": [
      "809-518-0142"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 28,
    "nombre": "Jose Calderon",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "103",
    "telefonos": [
      "809-537-3940"
    ],
    "horario": null,
    "foto": "josecalderon.jpg"
  },
  {
    "id": 25,
    "nombre": "Ramon Alcides Camejo",
    "especialidad": "Cirugía Pediátrica",
    "consultorio": "110",
    "telefonos": [
      "809-530-1604"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 74,
    "nombre": "Juan Carlos Carrasco Natali",
    "especialidad": "Ortopedia y Traumatología",
    "consultorio": "304",
    "telefonos": [
      "809-531-1686"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 65,
    "nombre": "Francisco Castillo",
    "especialidad": "Neurología",
    "consultorio": "322",
    "telefonos": [
      "809-530-0310"
    ],
    "horario": null,
    "foto": "franciscocaria.jpg"
  },
  {
    "id": 55,
    "nombre": "Roberto Castillo",
    "especialidad": "Cardiología",
    "consultorio": "309",
    "telefonos": [
      "809-518-2454"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 19,
    "nombre": "Luz Ercilia Catalino",
    "especialidad": "Pediatría",
    "consultorio": "326",
    "telefonos": [
      "809-534-0697"
    ],
    "horario": null,
    "foto": "luzerciliacatalino.jpg"
  },
  {
    "id": 101,
    "nombre": "Jose Antonio Cerda",
    "especialidad": "Otorrinolaringología",
    "consultorio": "313",
    "telefonos": [
      "809-530-9024"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 14,
    "nombre": "Anibal Concepcion",
    "especialidad": "Pediatría",
    "consultorio": "107",
    "telefonos": [
      "809-530-9830"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 89,
    "nombre": "Isaura Cornelio",
    "especialidad": "Gastroenterología Pediátrica",
    "consultorio": "501",
    "telefonos": [
      "809-537-0872"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 66,
    "nombre": "Rosa Cornelio",
    "especialidad": "Neurología",
    "consultorio": "322",
    "telefonos": [
      "809-530-0310"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 86,
    "nombre": "Carlos Cueto Moore",
    "especialidad": "Gastroenterología",
    "consultorio": "325",
    "telefonos": [
      "809-531-0337"
    ],
    "horario": null,
    "foto": "carloscuetomoore.jpg"
  },
  {
    "id": 110,
    "nombre": "David Cuevas",
    "especialidad": "Nefrología",
    "consultorio": "111",
    "telefonos": [
      "809-518-2858"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 108,
    "nombre": "Luisa Rosa De Hernandez",
    "especialidad": "Dermatología",
    "consultorio": "316",
    "telefonos": [
      "809-537-4148"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 111,
    "nombre": "Ana Carolina De La Cruz",
    "especialidad": "Nefrología",
    "consultorio": "111",
    "telefonos": [
      "809-518-2858"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 84,
    "nombre": "Carlos De La Cruz",
    "especialidad": "Gastroenterología",
    "consultorio": "105",
    "telefonos": [
      "809-539-8011"
    ],
    "horario": null,
    "foto": "carlosdelacruz.jpg"
  },
  {
    "id": 168,
    "nombre": "Francisco E. de la Cruz E.",
    "especialidad": "Cirugía Cardiovascular",
    "consultorio": "319",
    "telefonos": [
      "809-537-2099"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 113,
    "nombre": "Quisqueya De La Rosa",
    "especialidad": "Cirugía Plástica",
    "consultorio": "412",
    "telefonos": [
      "809-530-0297"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 79,
    "nombre": "Tulio De Oleo",
    "especialidad": "Hematología",
    "detalle": "Hematología y Medicina Interna",
    "consultorio": "323",
    "telefonos": [
      "809-530-0310"
    ],
    "horario": null,
    "foto": "tuliodoleo.jpg"
  },
  {
    "id": 69,
    "nombre": "Felix Del Monte",
    "especialidad": "Endocrinología",
    "consultorio": "302",
    "telefonos": [
      "809-539-5878"
    ],
    "horario": null,
    "foto": "felixdelmonte.jpg"
  },
  {
    "id": 163,
    "nombre": "Yamiris Delgado",
    "especialidad": "Cardiología",
    "consultorio": "311",
    "telefonos": [
      "809-692-5180"
    ],
    "horario": "lu ma mi ju vi 9 a 2",
    "foto": "yamirisd.jpg"
  },
  {
    "id": 87,
    "nombre": "Ricardo Delmonte",
    "especialidad": "Gastroenterología",
    "consultorio": "311",
    "telefonos": [
      "809-539-5878"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 70,
    "nombre": "Ladys Diaz",
    "especialidad": "Diabetología y Nutrición",
    "consultorio": "104 Simersa",
    "telefonos": [
      "809-537-8899"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 56,
    "nombre": "David Diaz Guzman",
    "especialidad": "Cardiología",
    "consultorio": "102",
    "telefonos": [
      "809-537-8899"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 81,
    "nombre": "Namibia Didiez",
    "especialidad": "Infectología",
    "consultorio": "502",
    "telefonos": [
      "809-518-1305"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 21,
    "nombre": "Leandra Ditren",
    "especialidad": "Pediatría",
    "consultorio": "201 Simersa",
    "telefonos": [
      "809-518-2651"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 90,
    "nombre": "Jose Ramon Dominguez",
    "especialidad": "Cirugía Oncológica",
    "consultorio": "418",
    "telefonos": [
      "809-537-1686"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 159,
    "nombre": "Kendry Echavarria M",
    "especialidad": "Coloproctología",
    "consultorio": "415",
    "telefonos": [
      "809-531-6582"
    ],
    "horario": "LU,MIE,VIE 4 A 7",
    "foto": "kendryechavarria.jpg"
  },
  {
    "id": 72,
    "nombre": "Jose Encarnacion",
    "especialidad": "Oftalmología",
    "consultorio": "312",
    "telefonos": [
      "809-530-1640"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 175,
    "nombre": "Rosa Espinal",
    "especialidad": "Neumología",
    "consultorio": "317",
    "telefonos": [
      "809-537-6665"
    ],
    "horario": "Viernes 3:00 pm a 6:00 pm",
    "foto": null
  },
  {
    "id": 62,
    "nombre": "Edilberto Estrella",
    "especialidad": "Medicina Interna",
    "consultorio": "319",
    "telefonos": [
      "809-537-2099"
    ],
    "horario": null,
    "foto": "edibertoestrella.jpg"
  },
  {
    "id": 152,
    "nombre": "Albert Feliz Veras",
    "especialidad": "Otorrinolaringología",
    "consultorio": "105-204 Simersa",
    "telefonos": [
      "809-537-2272"
    ],
    "horario": null,
    "foto": "albertfeliz.jpg"
  },
  {
    "id": 80,
    "nombre": "Carmen N Fernandez",
    "especialidad": "Hematología Pediátrica",
    "consultorio": "501",
    "telefonos": [
      "809-537-0872"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 91,
    "nombre": "Francisco Garcia",
    "especialidad": "Cirugía Oncológica",
    "consultorio": "105",
    "telefonos": [
      "809-537-2272"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 29,
    "nombre": "Victor Garcia",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "307",
    "telefonos": [
      "809-537-6670"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 158,
    "nombre": "Jose German",
    "especialidad": "Medicina Interna",
    "consultorio": "413",
    "telefonos": [
      "809-537-3940 ext. 420"
    ],
    "horario": "lu mi ju vi 3 a 7",
    "foto": "josegerman.jpg"
  },
  {
    "id": 63,
    "nombre": "Miguel Rogelio Geronimo",
    "especialidad": "Neurocirugía",
    "consultorio": "505",
    "telefonos": [
      "809-530-4138"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 23,
    "nombre": "Esther B Gil",
    "especialidad": "Pediatría",
    "consultorio": "112",
    "telefonos": [
      "809-518-1770"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 48,
    "nombre": "Maria C Gil",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "112",
    "telefonos": [
      "809-537-9615"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 103,
    "nombre": "Rafael Bolivar Gil",
    "especialidad": "Urología",
    "consultorio": "306",
    "telefonos": [
      "809-537-8690"
    ],
    "horario": null,
    "foto": "rafaelbolivargil.jpg"
  },
  {
    "id": 104,
    "nombre": "Rosa E Gil",
    "especialidad": "Urología",
    "consultorio": "306",
    "telefonos": [
      "809-537-8690"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 27,
    "nombre": "Aracelis Josefina Gomez",
    "especialidad": "Nutrición Pediátrica",
    "consultorio": "326",
    "telefonos": [
      "809-534-0697"
    ],
    "horario": null,
    "foto": "aracelisgomez.jpg"
  },
  {
    "id": 41,
    "nombre": "Nelly Gomez De Chahin",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "320",
    "telefonos": [
      "809-518-0142"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 22,
    "nombre": "Gloria Gonzalez",
    "especialidad": "Pediatría",
    "consultorio": "507",
    "telefonos": [
      "809-530-6523"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 165,
    "nombre": "Jenny Guzman",
    "especialidad": "Ginecología y Obstetricia",
    "detalle": "Ginecología, Obstetricia y Oncología",
    "consultorio": "320",
    "telefonos": [
      "809-530-0454",
      "809-620-2255"
    ],
    "horario": null,
    "foto": "jennyguzman.jpg"
  },
  {
    "id": 53,
    "nombre": "Alcedo Hernandez",
    "especialidad": "Neumología Pediátrica",
    "consultorio": "507",
    "telefonos": [
      "809-530-6523"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 173,
    "nombre": "Melba Infate",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "307",
    "telefonos": [],
    "horario": null,
    "foto": null
  },
  {
    "id": 43,
    "nombre": "Josefina Jacobo",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "416",
    "telefonos": [
      "809-530-2610"
    ],
    "horario": null,
    "foto": "josefinajacobo.jpg"
  },
  {
    "id": 106,
    "nombre": "Assad S Jafri",
    "especialidad": "Urología",
    "consultorio": "506",
    "telefonos": [
      "809-537-3940 ext. 500"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 77,
    "nombre": "Julio Landron",
    "especialidad": "Ortopedia y Traumatología",
    "consultorio": "506",
    "telefonos": [
      "809-547-2010"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 176,
    "nombre": "Jose Lopez",
    "especialidad": "Gastroenterología",
    "consultorio": "323",
    "telefonos": [
      "809-530-0310"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 169,
    "nombre": "Jesus Bienvenido Lopez Suriel",
    "especialidad": "Ortopedia y Traumatología",
    "consultorio": "202 Simersa",
    "telefonos": [
      "829-268-5719"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 75,
    "nombre": "Joaquin Lorie Ortiz",
    "especialidad": "Ortopedia y Traumatología",
    "consultorio": "101",
    "telefonos": [
      "809-530-2263"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 38,
    "nombre": "Mirian Luciano",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "108",
    "telefonos": [
      "809-530-9408"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 42,
    "nombre": "Rosanna Lugo",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "417",
    "telefonos": [
      "809-531-1272"
    ],
    "horario": null,
    "foto": "rosannalugo.jpg"
  },
  {
    "id": 40,
    "nombre": "Beatriz Martinez",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "307-415",
    "telefonos": [
      "809-537-6670"
    ],
    "horario": null,
    "foto": "beatrizmartinez.jpg"
  },
  {
    "id": 105,
    "nombre": "Pablo Casimiro Mateo",
    "especialidad": "Urología",
    "consultorio": "324",
    "telefonos": [
      "809-530-0454"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 150,
    "nombre": "Laisa Matos Duran",
    "especialidad": "Ginecología y Obstetricia",
    "detalle": "Ginecología y Endocrinología",
    "consultorio": "A-101",
    "telefonos": [
      "809-784-9714"
    ],
    "horario": "Lunes a viernes 3 a 7 P.M",
    "foto": "LaisaMatosDuran.png"
  },
  {
    "id": 31,
    "nombre": "Milton Medina",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "420",
    "telefonos": [
      "809-530-5741"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 47,
    "nombre": "Sabrina Mendez",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "503",
    "telefonos": [
      "809-518-0072"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 167,
    "nombre": "Yeara Metz Belliard",
    "especialidad": "Nefrología",
    "consultorio": "111",
    "telefonos": [
      "809-518-2858"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 17,
    "nombre": "Luis Miniel",
    "especialidad": "Pediatría",
    "consultorio": "109",
    "telefonos": [
      "809-537-6107"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 177,
    "nombre": "Nayibel Monegro",
    "especialidad": "Ginecología y Obstetricia",
    "detalle": "Ginecología y Mastología",
    "consultorio": "413",
    "telefonos": [
      "809-530-2610"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 61,
    "nombre": "Luz Esther Montes",
    "especialidad": "Medicina Interna",
    "consultorio": "308",
    "telefonos": [
      "809-539-8872"
    ],
    "horario": null,
    "foto": "luzesthermontes.jpg"
  },
  {
    "id": 85,
    "nombre": "Tamara Moore",
    "especialidad": "Gastroenterología",
    "consultorio": "325",
    "telefonos": [
      "809-531-0337"
    ],
    "horario": null,
    "foto": "tamaramoore.jpg"
  },
  {
    "id": 171,
    "nombre": "Cesar Augusto Moreta",
    "especialidad": "Ortopedia y Traumatología",
    "consultorio": "101 Simersa",
    "telefonos": [
      "809-692-5370"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 52,
    "nombre": "Vianny Moreta",
    "especialidad": "Pediatría",
    "consultorio": "107",
    "telefonos": [
      "809-530-9830"
    ],
    "horario": null,
    "foto": "viannymoreta.jpg"
  },
  {
    "id": 32,
    "nombre": "Vanessa Nin",
    "especialidad": "Medicina Interna",
    "consultorio": "101 Simersa",
    "telefonos": [
      "809-473-7299"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 174,
    "nombre": "Tania Paulino",
    "especialidad": "Odontología y Maxilofacial",
    "detalle": "Odontología",
    "consultorio": "310",
    "telefonos": [
      "809-530-1377"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 88,
    "nombre": "Alejandra Peña",
    "especialidad": "Gastroenterología",
    "consultorio": "502",
    "telefonos": [
      "809-518-1305"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 59,
    "nombre": "Mayra Peña",
    "especialidad": "Cardiología",
    "consultorio": "505",
    "telefonos": [
      "809-530-4138"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 76,
    "nombre": "Jose Luis Perez Perez",
    "especialidad": "Ortopedia y Traumatología",
    "consultorio": "314",
    "telefonos": [
      "809-530-8343"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 109,
    "nombre": "Jose Alfredo Perez Sena",
    "especialidad": "Nefrología",
    "consultorio": "326",
    "telefonos": [
      "809-534-0697"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 30,
    "nombre": "Fausto Pichardo",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "301",
    "telefonos": [
      "809-537-8181"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 99,
    "nombre": "Evelyn Portes",
    "especialidad": "Oftalmología",
    "consultorio": "312",
    "telefonos": [
      "809-530-1640"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 34,
    "nombre": "Rosa Puello",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "303",
    "telefonos": [
      "809-537-1688"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 16,
    "nombre": "Isabel Pujols",
    "especialidad": "Pediatría",
    "consultorio": "106",
    "telefonos": [
      "809-530-8884"
    ],
    "horario": null,
    "foto": "isabelpujols.jpg"
  },
  {
    "id": 78,
    "nombre": "Cristian Quiñonez",
    "especialidad": "Ortopedia y Traumatología",
    "consultorio": "504",
    "telefonos": [
      "809-530-8148"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 45,
    "nombre": "Betty Ramirez",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "A-104",
    "telefonos": [
      "809-482-9506"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 35,
    "nombre": "Ana Iris Reyes",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "303",
    "telefonos": [
      "809-537-1688"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 179,
    "nombre": "Cruz Mercedes Reyes",
    "especialidad": "Neumología",
    "consultorio": "502",
    "telefonos": [
      "809-537-0872"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 107,
    "nombre": "Mayra Reyes",
    "especialidad": "Dermatología",
    "consultorio": "315",
    "telefonos": [
      "809-530-0670"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 93,
    "nombre": "Moises Reyes",
    "especialidad": "Cirugía General",
    "consultorio": "415",
    "telefonos": [
      "809-531-6582"
    ],
    "horario": null,
    "foto": "moisesreyes.jpg"
  },
  {
    "id": 102,
    "nombre": "Genaro Reynoso",
    "especialidad": "Otorrinolaringología",
    "consultorio": "420",
    "telefonos": [
      "809-530-5741"
    ],
    "horario": null,
    "foto": "genaroreynoso.jpg"
  },
  {
    "id": 46,
    "nombre": "Bianny Rodriguez",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "A-102",
    "telefonos": [
      "809-482-9507"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 170,
    "nombre": "Feliz Ambiorix Rodriguez",
    "especialidad": "Ortopedia y Traumatología",
    "consultorio": "104 Simersa",
    "telefonos": [
      "809-692-5370"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 73,
    "nombre": "Carmen A Rosario",
    "especialidad": "Endocrinología Pediátrica",
    "consultorio": "507",
    "telefonos": [
      "809-530-6523"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 49,
    "nombre": "Cynthia Sanchez",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "206 Simersa",
    "telefonos": [
      "809-920-8743"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 166,
    "nombre": "Elizabeth Sanchez",
    "especialidad": "Cirugía General",
    "consultorio": "103 Simersa",
    "telefonos": [
      "809-920-8743"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 18,
    "nombre": "Daysi Santana",
    "especialidad": "Pediatría",
    "consultorio": "109",
    "telefonos": [
      "809-537-6107"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 112,
    "nombre": "Jesus Selman Selman",
    "especialidad": "Cirugía Cardiovascular",
    "consultorio": "414",
    "telefonos": [
      "809-531-4241"
    ],
    "horario": null,
    "foto": "jesusselman.jpg"
  },
  {
    "id": 20,
    "nombre": "Persia Sena",
    "especialidad": "Pediatría",
    "consultorio": "205 Simersa",
    "telefonos": [
      "809-537-5295"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 39,
    "nombre": "Maria Sosa",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "301",
    "telefonos": [
      "809-537-8181"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 180,
    "nombre": "Anllely Tapia",
    "especialidad": "Reumatología",
    "consultorio": "202 Simersa",
    "telefonos": [
      "809-530-4835"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 98,
    "nombre": "Claudia Tejeda",
    "especialidad": "Odontología y Maxilofacial",
    "detalle": "Cirugía Maxilofacial y Odontología",
    "consultorio": "310",
    "telefonos": [
      "809-530-1377"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 82,
    "nombre": "Ramona Tejeda",
    "especialidad": "Gastroenterología",
    "consultorio": "305",
    "telefonos": [
      "809-539-5878"
    ],
    "horario": null,
    "foto": "ramonatejeda.jpg"
  },
  {
    "id": 96,
    "nombre": "Domingo Terrero",
    "especialidad": "Pediatría",
    "consultorio": "201 Simersa",
    "telefonos": [
      "809-531-7381"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 54,
    "nombre": "Milagros De Jesus Terrero",
    "especialidad": "Cardiología",
    "consultorio": "321",
    "telefonos": [
      "809-537-3940"
    ],
    "horario": null,
    "foto": "milagrosterrero.jpg"
  },
  {
    "id": 60,
    "nombre": "Teresa Dhamelisse Then",
    "especialidad": "Cardiología Pediátrica",
    "consultorio": "501",
    "telefonos": [
      "809-537-0872"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 51,
    "nombre": "Maritza Torres",
    "especialidad": "Neumología",
    "consultorio": "418",
    "telefonos": [
      "809-537-1686"
    ],
    "horario": null,
    "foto": "maritzatorres.jpg"
  },
  {
    "id": 100,
    "nombre": "Lucia Torres Ogando",
    "especialidad": "Oftalmología",
    "consultorio": "A-103",
    "telefonos": [
      "809-797-3785"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 33,
    "nombre": "Ignacio Valenzuela",
    "especialidad": "Ginecología y Obstetricia",
    "consultorio": "503",
    "telefonos": [
      "809-518-0072"
    ],
    "horario": null,
    "foto": null
  },
  {
    "id": 92,
    "nombre": "Yaco Wasar",
    "especialidad": "Cirugía General",
    "consultorio": "308",
    "telefonos": [
      "809-539-8872"
    ],
    "horario": null,
    "foto": null
  }
]
