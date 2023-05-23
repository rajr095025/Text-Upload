//var editor = new Quill('.editor');  // First matching element will be used

const { default: Quill } = require("quill");

var container = document.getElementById('editor');
var editor = new Quill(container);

//var container = $('.editor').get(0);
//var editor = new Quill(container);


// var options = {
//     debug: 'info',
//     modules: {
//       toolbar: '#toolbar'
//     },
//     placeholder: 'Compose an epic...',
//     readOnly: true,
//     theme: 'snow'
//   };
//   var editor = new Quill('#editor', options);



//  get user by email request using fetch() 

let dataForm = document.getElementById("data-form");
const userId = document.getElementById("user-id");
const data = document.getElementById("data");
var delt = quill.getContents();
var length = quill.getLength();
var text = quill.getText(0, 10);
 dataForm.addEventListener("submit", (e) => {
   e.preventDefault();
   console.log("button clicked");
   console.log(delt);
   console.log(length);
   console.log(userId.value);
  //  console.log(data.value);
  //  let inputValue = getUserEmail.value;
   fetch(`http://localhost:3000/user/`, {
            method: 'POST',
            body: JSON.stringify({
              user_id : `${userId.value}`,
              data : `${text}`
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            // Converting received data to JSON
            .then((response) => response.json())
            .then((json) => {
              // Create a variable to store HTML
              console.log(json.message);
              // updateMessage.innerHTML = `<p>${json.message}<p>`;
            });
  //  fetch(`http://localhost:3000/user/`)
  //   // Converting received data to JSON
  //   .then((response) => response.json())
  //   .then((json) => {
  //     // Create a variable to store HTML
  //       userid = json[0]._id;
  //       console.log(userid);
  //       updateUser(userid);
  //       console.log(`userid ${userid} was printed`)
  //     });
 });
