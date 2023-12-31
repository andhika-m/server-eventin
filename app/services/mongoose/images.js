const Images = require('../../api/v1/images/model');
const {NotFoundError} = require('../../errors')

// 2. generate url setelah submit baru kita simpen images
const generateUrlImage = async (req) => {
  const result = `uploads/${req.file.filename}`;

  return result;
};

// 1. kita gunain cara ini
const createImages = async (req) => {
  const result = await Images.create({
    name: req.file
      ? `uploads/${req.file.filename}`
      : 'uploads/avatar/default.jpg',
  });

  return result;
};

// tambahkan function checking Image 
const checkingImage = async (id) => {
  const result = await Images.findOne({ _id: id });
  console.log(result);

  if (!result) throw new NotFoundError(`Tidak ada Gambar dengan id :  ${id}`);

  return result;
};

// jangan lupa export checkingImage
module.exports = { createImages, checkingImage };