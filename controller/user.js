const UserModel = require('../model/user')

// create a text content inside a database
exports.create = async (req, res) => {
    if (!req.body.user_id && !req.body.data) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    const user = new UserModel({
        user_id: req.body.user_id,
        data: req.body.data
    });
    
    await user.save().then(data => {
        res.send({
            message:"User created successfully!!",
            user:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
};


// getAll();
// function getAll(){
//   fetch("http://localhost:3000/user")
//     // Converting received data to JSON
//     .then((response) => response.json())
//     .then((json) => {
//       // Create a variable to store HTML
//       let li = ``;
//       console.log(json);
//       // Loop through each data and add a table row
//       json.forEach((user) => {
//         li += `
//             <tr class="table-secondary">
//                 <td scope="row">Secondary</th>
//                 <td>Column content</td>
//             </tr>
//             `;
//       })
//       // Display result
//       document.getElementById("users").innerHTML = li;
//   });
// }




/*

// Create and Save a new user
exports.create = async (req, res) => {
    if (!req.body.email && !req.body.firstName && !req.body.lastName && !req.body.phone) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const user = new UserModel({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
    });
    
    await user.save().then(data => {
        res.send({
            message:"User created successfully!!",
            user:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
};

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};



// Find a single User with an email
exports.findOneEmail = async (req, res) => {
    try {
        const user = await UserModel.find(
            {email: req.params.email}
        )
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

// Update a user by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    
    await UserModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        }else{
            res.send({ message: "User updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
    await UserModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `User not found.`
          });
        } else {
          res.send({
            message: "User deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};

*/