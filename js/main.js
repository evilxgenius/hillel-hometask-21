// Вам потрібно зробити конструктор сутності "Студент".

// Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість.
// І є можливість отримати вік студента та його середній бал – це методи.

// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів,
// спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність,
// щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true,
// коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві
// відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – методи.

// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять),
// і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!",
// якщо одне з цих значень менше, то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

// Не забудьте після того, як напишете цей конструктор, створити 2-3 екземпляри (конкретних студентів)
// і показати використання цих методів.
class Student {
    _grades = [];
    _attendanceLog = [...new Array(25)];

    constructor(firstName, lastName, yearOfBorn) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._yearOfBorn = yearOfBorn;
    }
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
    get age() {
        return new Date().getFullYear() - this._yearOfBorn;
    }
    get averageGrade() {
        return this._grades.reduce((memo, g) => memo + g, 0) / this._grades.length;
    }
    get averageAttendance() {
        return this._attendanceLog.filter((a) => a).length / this._attendanceLog.length
    }
    present(grade) {
        const isWrote = this._writeToAttendanceLog(true);

        if (isWrote) this._grades.push(grade);

        return isWrote;
    }
    absent() {
        return this._writeToAttendanceLog(false);
    }
    summary() {
        const avgGrade = this.averageGrade;
        const avgAttendance = this.averageAttendance;

        console.log(avgGrade, avgAttendance);

        if (avgGrade > 90 && avgAttendance > 0.9)
            console.log('Well done (Молодець)!');
        else if (avgGrade > 90 && avgAttendance <= 0.9 || avgGrade <= 90 && avgAttendance > 0.9)
            console.log('Good, but you can do much better (Добре, але можна краще).');
        else
            console.log('Bad(Редиска)!');
    }
    _writeToAttendanceLog(boolean) {
        const index= this._attendanceLog.indexOf(undefined)

        if (index === -1) console.log('Attendance Log is full!')
        else this._attendanceLog[index] = boolean;

        return index !== -1;
    }

}

function randomGrade(min = 80) {
    return Math.floor(Math.random() * (100 - min + 1) + min);
}

const student1 = new Student('Michael', 'Myers', 1978);
const student2 = new Student('Taras', 'Shevchenko', 1814);

console.dir('+-----------------------+')

console.dir(`${student1.fullName} - ${student1.age} years old`);
do {
    let isAdded;

    if (Math.round(Math.random()))
        isAdded = student1.present(randomGrade());
    else
        isAdded = student1.absent();

    if (!isAdded) break;
} while (true)
student1.summary();

console.dir('+-----------------------+')

console.dir(`${student2.fullName} - ${student2.age} years old`);
do {
    let isAdded = student2.present(randomGrade(90));

    if (!isAdded) break;
} while (true)
student2.summary();

console.dir('+-----------------------+')