import {mongoURI} from "../keys.js";
import mongoose from 'mongoose'
import Grid from "gridfs-stream";
import GridFsStorage from "multer-gridfs-storage";
import crypto from "crypto";
import path from "path";
import multer from "multer";

const conn = mongoose.createConnection(mongoURI)

export let gfs;

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection('avatars')
})

const storage = new GridFsStorage({
    url: mongoURI,
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



export const upload = multer({storage})


