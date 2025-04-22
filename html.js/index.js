console.log("Hello from JS file");
let students = [
  {
    name: "Tashi",
    age: 24,
    address: "Jakar Lhakhang",
    bio: "She is from Trongsa and she likes to eat and sleep",
    hobbies: ["sleeping", "cooking", "eating", "coding", "hiking"],
  },
  {
    name: "Norbu",
    age: 20,
    address: "Yugarling",
    bio: "She is from Lhuntse and she likes to chit chat",
    hobbies: ["laughing", "dancing", "walking", "baby sitting"],
  },
  {
    name: "Jamyang",
    age: 25,
    address: "Jakar Lhakhang",
    bio: "She is from Bumthang and she is font of going karakoe",
    hobbies: ["cooking", "reading", "praying", "talking"],
  },
  {
    name: "Susma",
    age: 22,
    address: "Chamkhar",
    bio: "She is from chamkhar and she enjoys reading and writing",
    hobbies: ["playing", "sleeping", "chitchatting"],
  },
  {
    name: "Phurba",
    age: 25,
    address: "Chummy",
    bio: "She likes to play PUBG and enjoys reading",
    hobbies: ["playing", "talking", "hiking"],
  },
  {
    name: "Sangay",
    age: 20,
    address: "Jakar Lhakhang",
    bio: "She is the cutest from the class and enjoys coding",
    address: ["coding", "talking", "walking", "sleeping"],
  },
];

function submit() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value;

  const mySelect = document.getElementById("option");
  const selectValue = mySelect.value;

  if (!name) {
    alert("Please enter name");
    return;
  }
  if (selectValue === "Select One") {
    alert("Please select either Age, Address, Bio, Hobbies or All");
    return;
  }
  const student = students.find(function (item) {
    if (name === item.name) {
      return true;
    } else {
      return false;
    }
  });

  if (!student) {
    alert(`No students found with the name ${name}`);
    return;
  }
  switch (selectValue) {
    case "Age":
      alert(`${name} is ${student.age} years old.`);
      break;
    case "Address":
      alert(`${name} is from ${student.address}`);
      break;
    case "Bio":
      alert(`${name} and ${student.bio}`);
      break;
    case "Hobbies":
      alert(`${name} and ${student.hobbies}`);
      break;
    default:
      alert(
        `${name} is ${student.age} years old and is from ${student.address} , ${student.bio} whose hobbies are ${student.hobbies}`
      );
  }
}

// if (selectValue === "both")
//   alert(`${name} is ${student.age} years old and is from ${student.address}`);
// else if (selectValue === "age") {
//   alert(`${name} is ${student.age} years old.`);
//   return;
// } else if ("address") {
//   alert(`${name} is from ${student.address}`);
//   return;
// }
