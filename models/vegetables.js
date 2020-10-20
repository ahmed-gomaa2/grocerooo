const vegetablesMongoURI = require("../keys.js")
const mongoose = require('mongoose')
const Grid = require("gridfs-stream")
const GridFsStorage = require("multer-gridfs-storage")
const crypto = require("crypto")
const path = require("path")
const multer = require("multer")

const conn = mongoose.createConnection(vegetablesMongoURI.vegetablesMongoURI)

let veg;

conn.once('open', () => {
    veg = Grid(conn.db, mongoose.mongo)
    veg.collection('vegetables')
})

const storage = new GridFsStorage({
    url: vegetablesMongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if(err) {
                    console.log(err)
                    return reject(err)
                }

                const filename = buf.toString('hex') + path.extname(file.originalname)
                const fileInfo = {
                    filename: filename,
                    bucketName: 'vegetables'
                }
                resolve(fileInfo)
            })
        })
    }
})

module.exports = {
    uploadVeg:multer({storage}),
    veg
}


