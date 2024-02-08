const dogs = [
    { name: "Agatha",
     color: "White", 
     isTalkative: false },
    { name: "Tommy", 
    color: "Brown", 
    isTalkative: true },
    { name: "Paco", 
    color: "White and Brown", 
    isTalkative: true },
]  

const getDogs = (req, res) => {
    if(req.query.name == null) {
        res.send({
            msg: dogs
        })
    } else {
        res.send(dogs.filter(dog => dog.name == req.query.name))
    }
}

const getDogByID = (req, res) => {
    res.send(dogs[req.params.id])
}

module.exports = { getDogs, getDogByID }