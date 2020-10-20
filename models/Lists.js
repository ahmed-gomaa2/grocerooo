const mongoose = require('mongoose')

const ListSchema = new mongoose.Schema({
    name:String,
    products: [
        {
            name:String,
            amount: Number
        }
    ],
    author: {
        id: {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'User'    
        },
        username: String
    }
})

const List = mongoose.model('List', ListSchema)

export default List;