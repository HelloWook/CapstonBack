const multer = require("multer");
let today = new Date();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".").pop();
    const newFileName = `${file.originalname}-${Date.now()}.${ext}`;
    cb(null, newFileName);
  },
});

exports.upload = multer({ storage: storage });
