const express = require("express");

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {
        firstName: "John",
        lastName: "Doe",
        DOB: "22-12-1990",
    },
    "annasmith@gamil.com": {
        firstName: "Anna",
        lastName: "smith",
        DOB: "02-07-1983",
    },
    "peterjones@gamil.com": {
        firstName: "Peter",
        lastName: "Jones",
        DOB: "21-03-1989",
    },
};

// GET request: Retrieve all friends
router.get("/", (req, res) => {
    res.json(friends);
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email", (req, res) => {
    const email = req.params.email.toLowerCase();
    const user = friends[email];

    if (user) {
        res.json(user);
    } else {
        res.status(404).send(`Friend with email: ${email} not found`);
    }
});

// POST request: Add a new friend
router.post("/", function (req, res) {
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const DOB = req.body.DOB;

    if (!email) {
        res.status(400).json("Email is required");
    }

    try {
        if (email in friends) {
            res.status(400).json("Friend already exists");
        }

        friends[email] = {
            firstName: firstName,
            lastName: lastName,
            DOB: DOB,
        };
        res.json(`The user ${firstName} has been added!`);
    } catch (error) {
        res.status(400).json("Error adding friend");
    }
});

// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
    // Update the code here
    res.send("Yet to be implemented"); // This line is to be replaced with actual return value
});

// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
    // Update the code here
    res.send("Yet to be implemented"); // This line is to be replaced with actual return value
});

module.exports = router;
