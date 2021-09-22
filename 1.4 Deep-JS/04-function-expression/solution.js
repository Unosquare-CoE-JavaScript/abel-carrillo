/* function getStudentFromId(studentId) {
  return studentRecords.find(function matchId(record) {
    return record.id == studentId;
  });
} */

/**Arrow functions */
var getStudentFromId = studentId => studentRecords.find(record => record.id == studentId);

/* function printRecords(recordIds) {
  // TODO
  var records = recordIds.map(getStudentFromId);

  records.sort(function sortByNameAsc(record1, record2) {
    return record1.name < record2.name
      ? -1
      : record1.name > record2.name
      ? 1
      : 0;
  });

  records.forEach(function printRecord(record) {
    console.log(
      `${record.name} (${record.id}): ${record.paid ? 'Paid' : 'Not Paid'}`
    );
  });
} */

/**Arrow functions */
var printRecords = recordIds =>
	recordIds.map(getStudentFromId)
		.sort(
			(record1,record2) => record1.name < record2.name ? -1 : record1.name > record2.name ? 1 : 0
		)
		.forEach(record =>
			console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`)
		);

/* function paidStudentsToEnroll() {
  // TODO
  var idsToEnroll = studentRecords
    .filter(function needsToEnroll(record) {
      return record.paid && !currentEnrollment.includes(record.id);
    })
    .map(function getStudentId(record) {
      return record.id;
    });

  return [...currentEnrollment, ...idsToEnroll];
} */

/**Arrow functions */

var paidStudentsToEnroll = () =>
	[ ...currentEnrollment,
		...(
			studentRecords.filter(record => (record.paid && !currentEnrollment.includes(record.id)))
			.map(record => record.id)
		)
	];

/* function remindUnpaid(recordIds) {
  // TODO
  var unpaidIds = recordIds.filter(function isUnpaid(studentId) {
    var record = getStudentFromId(studentId);
    return !record.paid;
  });

  printRecords(unpaidIds);
} */

/**Arrow functions */
var remindUnpaid = recordIds =>
	printRecords(
		recordIds.filter(studentId => !getStudentFromId(studentId).paid)
	);
// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: 'Frank', paid: true },
  { id: 410, name: 'Suzy', paid: true },
  { id: 709, name: 'Brian', paid: false },
  { id: 105, name: 'Henry', paid: false },
  { id: 502, name: 'Mary', paid: true },
  { id: 664, name: 'Bob', paid: false },
  { id: 250, name: 'Peter', paid: true },
  { id: 375, name: 'Sarah', paid: true },
  { id: 867, name: 'Greg', paid: false },
];

printRecords(currentEnrollment);
console.log('----');
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log('----');
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
