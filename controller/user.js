const UserModel = require('../model/user')
var fs = require("fs");

// create a text content inside a database
exports.create = async (req, res) => {
    if (!req.body.user_id && !req.body.data) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    else{
        write(req.body.user_id , req.body.data)
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

function write(fileName, data){
    fs.writeFile(
        `./html-files/${fileName}.html`,
        `${data}`,
        function (err) {
            if (err) {
            return console.error(err);
            }
        
            // If no error the remaining code executes
            console.log(" Finished writing ");
            console.log("Reading the data that's written");
        
            // Reading the file
            fs.readFile(`./html-files/${fileName}.html`, function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("Data read : " + data.toString());
            });
        }
        );
}

// function to get all data
exports.findAll = async (req, res) => {
    try {
        const user = await UserModel.find();
        console.log(typeof user);
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// function to get all data
exports.findAllHtml = async (req, res) => {
    try {
        const user = await UserModel.find();
        let userList = {};
        for(temp in user){
            userList.push();
            let tempdata;
            fs.readFile(`./html-files/${fileName}.html`, function (err, data) {
                if (err) {
                    return console.error(err);
                }
                console.log("Data read : " + data.toString());
                tempdata = data.toString();
                });
            userList.push();
        }
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single User with an email
exports.findOneContent = async (req, res) => {
    try {
        const user = await UserModel.find(
            {user_id: req.params.user_id}
        )
        console.log(user);
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({ message: error.message});
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