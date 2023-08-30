const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const AdminModel = require('./models/Admin');
const ArticleModel = require('./models/Article');
const StudentModel = require('./models/Students');
require('dotenv').config();


const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require('fs');


const app = express();

app.use(express.json());
app.use(cors({
    origin: "https://chi-sat.onrender.com",
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true, 
}));
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + "/uploads"));
app.use('/uploadsStudent', express.static(__dirname + "/uploadsStudent"));

const salt = bcrypt.genSaltSync(10);
const secret = process.env.JWT_SECRET;
const uploadMiddleware = multer({ dest: 'uploads/' });
const uploadMiddlewareStudent = multer({ dest: 'uploadsStudent/' });


const URL = process.env.DB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connect to DB."))
.catch(console.error);

app.post('/dang-ky', async (req, res) => {
    const {username, password} = req.body;
    try {
        const adminDoc = await AdminModel.create({
            username,
            password: bcrypt.hashSync(password, salt)
        });
        res.json(adminDoc);
    } catch(e) {
        res.status(400).json(e);
    }
})

app.post('/dang-nhap', async (req, res) => {
    const {username, password} = req.body;
    try {
        const adminDoc = await AdminModel.findOne({username});
        const passCorrect = bcrypt.compareSync(password, adminDoc.password);
        
        if (passCorrect) {
            jwt.sign({username,id:adminDoc._id}, secret, {}, (err,token) => {
                if (err) throw err;
                res.cookie('token',token).json({
                    id: adminDoc._id,
                    username,
                });
            })
        } else {
            res.status(400).json("username or password is incorrect. please try again.");
        }  
    } catch (e) {
        res.status(400).json(e);
    }
})

app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    })
})

app.post('/logout', (req, res) => {
    res.cookie('token', '').json("OK");
})

app.post('/post-article', uploadMiddleware.single("file"), async (req, res) => {
    try {
        // if (req.file) {
            const {originalname, path} = req.file;
            const parts = originalname.split('.');
            const ext = parts[parts.length - 1];
            const newPath = path+'.'+ext;
            fs.renameSync(path, newPath);

            const {title, summary, content} = req.body;
            const articleDoc = await ArticleModel.create({
                title,
                summary,
                content,
                cover: newPath,
            })
            res.json(articleDoc);
        // }
    } catch (e) {
        res.status(400).json(e);
    }

})

app.put('/post', uploadMiddleware.single("file"), async(req, res) => {
    let newPath = null;
    try {
        if (req.file) {
        const {originalname, path} = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        newPath = path+'.'+ext;
        fs.renameSync(path, newPath);
    }
    // const {id} = req.params;
    const {id, title, summary, content} = req.body;
    const postDoc = await ArticleModel.findById(id);
    
    postDoc.title = title;
    postDoc.summary = summary;
    postDoc.content = content;
    postDoc.cover = newPath ? newPath : postDoc.cover;

    await postDoc.save();
    res.json(postDoc); 
    } catch (e) {
        res.status(400).json(e);
    }
})

app.get('/post-article', async (req, res) => {
    const articles = await ArticleModel.find();
    res.json(articles);
})

app.get('/post/:id', async(req, res) => {
    const {id} = req.params;
    const postDoc = await ArticleModel.findById(id);
    res.json(postDoc);
})

app.delete('/delete-post/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const result = await ArticleModel.findByIdAndDelete(id);
        res.json("OK");
    } catch (e) {
        res.status(400).json(e);
    }
})

app.post('/post-student', uploadMiddlewareStudent.single("file"), async (req, res) => {
    try {
        let newPath = null;
        if (req.file) {
            const {originalname, path} = req.file;
            const parts = originalname.split('.');
            const ext = parts[parts.length - 1];
            newPath = path+'.'+ext;
            fs.renameSync(path, newPath);
        }

        const {name, school, score, quote} = req.body;
        const studentDoc = await StudentModel.create({
            name,
            school,
            score,
            quote,
            cover: newPath,
        })
        res.json(studentDoc);
        
    } catch (e) {
        res.status(400).json(e);
    }

})

app.get('/post-student', async (req, res) => {
    const cards = await StudentModel.find();
    res.json(cards);
})

app.get('/post-student/:id', async(req,res) => {
    const {id} = req.params;
    try  {
        const cardDoc = await StudentModel.findById(id);
        res.json(cardDoc);
    } catch (e) {
        json.status(400).json(e);
    }
})

app.put('/edit-student', uploadMiddlewareStudent.single("file"), async(req, res) => {
    let newPath = null;
    try {
        if (req.file) {
        const {originalname, path} = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        newPath = path+'.'+ext;
        fs.renameSync(path, newPath);
    }
    const {id, name, school, score, quote} = req.body;
    const studentDoc = await StudentModel.findById(id);
    
    studentDoc.name = name;
    studentDoc.school = school;
    studentDoc.score = score;
    studentDoc.quote = quote;
    studentDoc.cover = newPath ? newPath : studentDoc.cover;

    await studentDoc.save();
    res.json(studentDoc); 
    } catch (e) {
        res.status(400).json(e);
    }
})

app.delete('/delete-student/:id', async(req,res) => {
    const {id} = req.params;
    try {
        const result = await StudentModel.findByIdAndDelete(id);
        res.json("OK");
    } catch (e) {
        res.status(400).json(e);
    }
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));