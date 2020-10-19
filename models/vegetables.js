import {vegetablesMongoURI} from "../keys.js";
import mongoose from 'mongoose'
import Grid from "gridfs-stream";
import GridFsStorage from "multer-gridfs-storage";
import crypto from "crypto";
import path from "path";
import multer from "multer";

const conn = mongoose.createConnection(vegetablesMongoURI)

export let veg;

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

export const uploadVeg = multer({storage})


