
var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const port = "8082";
const host = "localhost";

const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017/finaldata";
const dbName = "finaldata";
const client = new MongoClient(url);
const db = client.db(dbName);

//get vols
app.get("/getVols", async (req, res) => {     
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");
    const query = {};
    const results = await db
    .collection("volunteers")
    .find(query)
    .limit(100)
    .toArray();
    console.log(results);
    res.status(200);
    res.send(results);
});
//get adoption forms
app.get("/getAdoptapp", async (req, res) => {     
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");
    const query = {};
    const results = await db
    .collection("adoptions")
    .find(query)
    .limit(100)
    .toArray();
    console.log(results);
    res.status(200);
    res.send(results);
});

//get vols by id
app.get("/getVols/:_id", async (req, res) => {
    const volId = Number(req.params._id);
    await client.connect();
    console.log("Node connected successfully to GET-id MongoDB");
    const query = {"id": volId };

    const results = await db.collection("volunteers")
    .findOne(query);
    
    console.log("Results :", results);
    if (!results) res.send("Not Found").status(404);
    else res.send(results).status(200);
});

//get application by id
app.get("/getAdoptapp/:_id", async (req, res) => {
    const appId = Number(req.params._id);
    await client.connect();
    console.log("Node connected successfully to GET-id MongoDB");
    const query = {"id": appId };

    const results = await db.collection("adoptions")
    .findOne(query);
    
    console.log("Results :", results);
    if (!results) res.send("Not Found").status(404);
    else res.send(results).status(200);
});

//add new volunteer
app.post("/addVol", async (req, res) => {
    try{
        await client.connect();
        
        const newVol = {
            //"id": Number(req.body.id),
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "phone": Number(req.body.phone),
            "email": req.body.email,
            "address": req.body.address,
            "city": req.body.city,
            "state": req.body.state,
            "zip": Number(req.body.zip),
            "age":Number(req.body.age)
        };

        console.log(newVol);
        const results = await db
        .collection("volunteers")
        .insertOne(newVol);
        res.status(200);
        res.send(results)
    }
    catch(error){
        console.error("An error occurred:", error);
        res.status(500).send({error:"An internal server error occurred"})
    }
});

//add new application
app.post("/addApp", async (req, res) => {
    try{
        await client.connect();
        
        const newApp = {
            //"id": Number(req.body.id),
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "phone": Number(req.body.phone),
            "email": req.body.email,
            "address": req.body.address,
            "city": req.body.city,
            "state": req.body.state,
            "zip": Number(req.body.zip),
            "age": Number(req.body.age),
            "cat": req.body.cat
        };

        console.log(newApp);
        const results = await db
        .collection("adoptions")
        .insertOne(newApp);
        res.status(200);
        res.send(results)
    }
    catch(error){
        console.error("An error occurred:", error);
        res.status(500).send({error:"An internal server error occurred"})
    }
});

//put vol by id
app.put("/updateVol/:_id", async (req, res) => {
    const id = Number(req.params._id);
    const query = { id: id };

    await client.connect();
    console.log("Volunteer to Update :",id);

    // Data for updating the document, typically comes from the request body
    console.log(req.body);

    const updateData = {
        $set:{
            //"id": req.body.id,
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "phone": req.body.phone,
            "email": req.body.email,
            "address": req.body.address,
            "city": req.body.city,
            "state": req.body.state,
            "zip": req.body.zip,
            "age": req.body.age
        }
    };
    // Add options if needed, for example { upsert: true } to create a document if it doesn't exist
    const volUpdated = await db.collection("volunteers").findOne(query);
    console.log("I found in Update :",prodUpdated);
    if (volUpdated == null) {
        return res.status(409).send({ message: 'ID to Update does not exists.' });
    }
    const options = { };
    const results = await db.collection("volunteers").updateOne(query, updateData, options);
    if (results.matchedCount === 0) {
        return res.status(404).send({ message: 'Volunteer not found in Update' });
    }
    return res.status(200).send({ message: 'Volunteer Updated.' });

});

//put application by id
app.put("/updateApp/:_id", async (req, res) => {
    const id = Number(req.params._id);
    const query = { id: id };

    await client.connect();
    console.log("Application to Update :",id);

    // Data for updating the document, typically comes from the request body
    console.log(req.body);

    const updateData = {
        $set:{
            //"id": req.body.id,
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "phone": req.body.phone,
            "email": req.body.email,
            "address": req.body.address,
            "city": req.body.city,
            "state": req.body.state,
            "zip": req.body.zip,
            "age": req.body.age,
            "cat": req.body.cat
        }
    };
    // Add options if needed, for example { upsert: true } to create a document if it doesn't exist
    const appUpdated = await db.collection("adoptions").findOne(query);
    console.log("I found in Update :",prodUpdated);
    if (appUpdated == null) {
        return res.status(409).send({ message: 'ID to Update does not exists.' });
    }
    const options = { };
    const results = await db.collection("adoptions").updateOne(query, updateData, options);
    if (results.matchedCount === 0) {
        return res.status(404).send({ message: 'Volunteer not found in Update' });
    }
    return res.status(200).send({ message: 'Volunteer Updated.' });

});

//delete vol by id
app.delete("/deleteVol/:_id", async (req, res) => {
    try {
        const id = Number(req.params._id);
        console.log("Product to delete :",id);

        await client.connect();

        const query = { id: id };

        // delete
        const volDeleted = await db.collection("volunteers").findOne(query);
        console.log("I found in Delete:",volDeleted);
        if (volDeleted === null) {
            return res.status(409).send({ message: 'ID to delete does not exists.' });
        }
        // everything is correct
        const results = await db.collection("volunteers").deleteOne(query);
        res.status(200).send({ message: 'Volunteer deleted successfully' });
    }
    catch (error){
        console.error("Error deleting volunteer:", error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

//delete application by id
app.delete("/deleteApp/:_id", async (req, res) => {
    try {
        const id = Number(req.params._id);
        console.log("Product to delete :",id);

        await client.connect();

        const query = { id: id };

        // delete
        const appDeleted = await db.collection("adoptions").findOne(query);
        console.log("I found in Delete:",appDeleted);
        if (appDeleted === null) {
            return res.status(409).send({ message: 'ID to delete does not exists.' });
        }
        // everything is correct
        const results = await db.collection("adoptions").deleteOne(query);
        res.status(200).send({ message: 'Application deleted successfully' });
    }
    catch (error){
        console.error("Error deleting application:", error);
        res.status(500).send({ message: 'Internal Server Error' });
    }

});


app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
    });


