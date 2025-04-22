
let role = "admin";

const teachersData = [
  { id: 1, teacherId: "1234567890", name: "John Doe", email: "john@doe.com", photo: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200", phone: "1234567890", subjects: ["Math", "Geometry"], classes: ["1B", "2A", "3C"], address: "123 Main St, Anytown, USA" },
  { id: 2, teacherId: "1234567890", name: "Jane Doe", email: "jane@doe.com", photo: "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200", phone: "1234567890", subjects: ["Physics", "Chemistry"], classes: ["5A", "4B", "3C"], address: "123 Main St, Anytown, USA" },
  { id: 3, teacherId: "1234567890", name: "Mike Geller", email: "mike@geller.com", photo: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200", phone: "1234567890", subjects: ["Biology"], classes: ["5A", "4B", "3C"], address: "123 Main St, Anytown, USA" },
  { id: 4, teacherId: "1234567890", name: "Jay French", email: "jay@gmail.com", photo: "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200", phone: "1234567890", subjects: ["History"], classes: ["5A", "4B", "3C"], address: "123 Main St, Anytown, USA" }
];

const studentsData = [
  { id: 1, studentId: "1234567890", name: "John Doe", email: "john@doe.com", photo: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200", phone: "1234567890", grade: 5, class: "1B", address: "123 Main St, Anytown, USA" },
  { id: 2, studentId: "1234567890", name: "Jane Doe", email: "jane@doe.com", photo: "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200", phone: "1234567890", grade: 5, class: "5A", address: "123 Main St, Anytown, USA" },
  { id: 3, studentId: "1234567890", name: "Mike Geller", email: "mike@geller.com", photo: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200", phone: "1234567890", grade: 5, class: "5A", address: "123 Main St, Anytown, USA" },
  { id: 4, studentId: "1234567890", name: "Jay French", email: "jay@gmail.com", photo: "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200", phone: "1234567890", grade: 5, class: "5A", address: "123 Main St, Anytown, USA" }
];

const parentsData = [
  { id: 1, name: "John Doe", students: ["Sarah Brewer"], email: "john@doe.com", phone: "1234567890", address: "123 Main St, Anytown, USA" },
  { id: 2, name: "Jane Doe", students: ["Cecilia Bradley"], email: "jane@doe.com", phone: "1234567890", address: "123 Main St, Anytown, USA" },
  { id: 3, name: "Mike Geller", students: ["Fanny Caldwell"], email: "mike@geller.com", phone: "1234567890", address: "123 Main St, Anytown, USA" }
];

const subjectsData = [
  { id: 1, name: "Math", teachers: ["Alice Phelps", "Russell Davidson"] },
  { id: 2, name: "English", teachers: ["Manuel Becker", "Eddie Chavez"] },
  { id: 3, name: "Physics", teachers: ["Lola Newman", "Darrell Delgado"] },
  { id: 4, name: "Chemistry", teachers: ["Nathan Kelly", "Benjamin Snyder"] }
];

const classesData = [
  { id: 1, name: "1A", capacity: 20, grade: 1, supervisor: "Joseph Padilla" },
  { id: 2, name: "2B", capacity: 22, grade: 2, supervisor: "Blake Joseph" },
  { id: 3, name: "3C", capacity: 20, grade: 3, supervisor: "Tom Bennett" },
  { id: 4, name: "4B", capacity: 18, grade: 4, supervisor: "Aaron Collins" },
  { id: 5, name: "5A", capacity: 16, grade: 5, supervisor: "Iva Frank" }
];

const lessonsData = [
  { id: 1, subject: "Math", class: "1A", teacher: "Tommy Wise" },
  { id: 2, subject: "English", class: "2A", teacher: "Rhoda Frank" },
  { id: 3, subject: "Science", class: "3A", teacher: "Della Dunn" },
  { id: 4, subject: "Social Studies", class: "1B", teacher: "Bruce Rodriguez" }
];

const examsData = [
  { id: 1, subject: "Math", class: "1A", teacher: "Martha Morris", date: "2025-01-01" },
  { id: 2, subject: "English", class: "2A", teacher: "Randall Garcia", date: "2025-01-01" },
  { id: 3, subject: "Science", class: "3A", teacher: "Myrtie Scott", date: "2025-01-01" },
  { id: 4, subject: "Social Studies", class: "1B", teacher: "Alvin Swanson", date: "2025-01-01" },
  { id: 5, subject: "Art", class: "4A", teacher: "Mabelle Wallace", date: "2025-01-01" }
];

const assignmentsData = [
  { id: 1, subject: "Math", class: "1A", teacher: "Anthony Boone", dueDate: "2025-01-01" },
  { id: 2, subject: "English", class: "2A", teacher: "Clifford Bowen", dueDate: "2025-01-01" },
  { id: 3, subject: "Science", class: "3A", teacher: "Catherine Malone", dueDate: "2025-01-01" },
  { id: 4, subject: "Social Studies", class: "1B", teacher: "Willie Medina", dueDate: "2025-01-01" }
];

const resultsData = [
  { id: 1, subject: "Math", class: "1A", teacher: "John Doe", student: "John Doe", date: "2025-01-01", type: "exam", score: 90 },
  { id: 2, subject: "English", class: "2A", teacher: "John Doe", student: "John Doe", date: "2025-01-01", type: "exam", score: 90 },
  { id: 3, subject: "Science", class: "3A", teacher: "John Doe", student: "John Doe", date: "2025-01-01", type: "exam", score: 90 },
  { id: 4, subject: "Social Studies", class: "1B", teacher: "John Doe", student: "John Doe", date: "2025-01-01", type: "exam", score: 90 }
];

const eventsData = [
  { id: 1, title: "Lake Trip", class: "1A", date: "2025-01-01", startTime: "10:00", endTime: "11:00" },
  { id: 2, title: "Picnic", class: "2A", date: "2025-01-01", startTime: "10:00", endTime: "11:00" },
  { id: 3, title: "Beach Trip", class: "3A", date: "2025-01-01", startTime: "10:00", endTime: "11:00" },
  { id: 4, title: "Museum Trip", class: "4A", date: "2025-01-01", startTime: "10:00", endTime: "11:00" }
];

const announcementsData = [
  { id: 1, title: "About 4A Math Test", class: "4A", date: "2025-01-01" },
  { id: 2, title: "About 3A Math Test", class: "3A", date: "2025-01-01" },
  { id: 3, title: "About 3B Math Test", class: "3B", date: "2025-01-01" },
  { id: 4, title: "About 6A Math Test", class: "6A", date: "2025-01-01" }
];

const calendarEvents = [
  { title: "Math", allDay: false, start: new Date(2024, 7, 12, 8, 0), end: new Date(2024, 7, 12, 8, 45) },
  { title: "English", allDay: false, start: new Date(2024, 7, 12, 9, 0), end: new Date(2024, 7, 12, 9, 45) },
  { title: "Biology", allDay: false, start: new Date(2024, 7, 12, 10, 0), end: new Date(2024, 7, 12, 10, 45) },
  { title: "Physics", allDay: false, start: new Date(2024, 7, 12, 11, 0), end: new Date(2024, 7, 12, 11, 45) },
  { title: "Chemistry", allDay: false, start: new Date(2024, 7, 12, 13, 0), end: new Date(2024, 7, 12, 13, 45) },
  { title: "History", allDay: false, start: new Date(2024, 7, 12, 14, 0), end: new Date(2024, 7, 12, 14, 45) }
];


export{
    role,
    teachersData,
    studentsData,
    parentsData,
    subjectsData,
    classesData,
    lessonsData,
    examsData,
    assignmentsData,
    resultsData,
    eventsData,
    announcementsData,
    calendarEvents
}