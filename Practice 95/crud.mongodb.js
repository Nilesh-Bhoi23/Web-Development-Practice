use("CrudDB")
console.log(db)

// create 
db.createCollection("courses")

// db.courses.insertOne({
//     name: "Nilesh Web dev free course",
//     Price: 0,
//     assignments: 12,
//     projects: 45
// })

// db.courses.insertMany(
//     [
//         {
//           "name": "Advanced Java Programming",
//           "Price": 15000,
//           "assignments": 10,
//           "projects": 30
//         },
//         {
//           "name": "Python for Data Science",
//           "Price": 20000,
//           "assignments": 15,
//           "projects": 35
//         },
//         {
//           "name": "Machine Learning with Python",
//           "Price": 25000,
//           "assignments": 20,
//           "projects": 40
//         },
//         {
//           "name": "Full Stack Web Development",
//           "Price": 30000,
//           "assignments": 25,
//           "projects": 50
//         }
//       ])

// read      

// let a = db.courses.find({Price: 0})

// console.log(a.toArray())


// we can not use toArrry() for find one. 
// let b = db.courses.findOne({Price: 0})

// console.log(b)

// UPDATE

// for one document
db.courses.updateOne(
    {Price: 0} // to 
    ,{$set:{Price: 100}} // update value
)

// for many documents
db.courses.updateMany(
    {Price: 0} // to 
    ,{$set:{Price: 1000}} // update value
)


// DELETE 

// db.courses.deleteOne({Price: 100})

db.courses.deleteMany({Price: 1000  })

