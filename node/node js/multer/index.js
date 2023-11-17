const express = require('express');
const multer = require('multer');
const path = require('path');
const ejs = require('ejs');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        const filename = Date.now()
        cb(null, filename + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
    res.render('index', { imageUrl: null });
});

app.post('/upload', upload.single('profileImage'), (req, res) => {
    if (req.file) {
        const imageUrl = `/uploads/${req.file.filename}`;
        res.render('index', { imageUrl });
    } else {
        res.render('index', { imageUrl: null });
    }
});

app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
