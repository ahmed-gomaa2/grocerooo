const mongoURI =  require("../keys.js")
const mongoose =  require('mongoose')
const Grid =  require("gridfs-stream")
const GridFsStorage =  require("multer-gridfs-storage")
const crypto =  require("crypto")
const path =  require("path")
const multer =  require("multer")

const conn = mongoose.createConnection(mongoURI.mongoURI)

let gfs = {grid: undefined};

conn.once('open', () => {
    gfs.grid = Grid(conn.db, mongoose.mongo)
    gfs.grid.collection('avatars')
})

const storage = new GridFsStorage({
    url: mongoURI.mongoURI,
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
                    bucketName: 'avatars'
                }
                resolve(fileInfo)
            })
        })
    }
})

module.exports = {
    upload:multer({storage}),
    gfs
}


