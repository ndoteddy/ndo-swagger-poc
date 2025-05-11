let tshirts = [
  { id: 1, name: "Classic Tee", picture: "classic.jpg", price: 199 },
  { id: 2, name: "Modern Fit", picture: "modern.jpg", price: 249 },
  { id: 3, name: "V-Neck", picture: "vneck.jpg", price: 229 }
];

let nextId = 4; // To simulate auto-increment ID

module.exports = {
  getAllTshirt: getAllTshirt,
  getSingleTshirt: getSingleTshirt,
  createTshirt: createTshirt
};

function getAllTshirt(req, res, next) {
  res.status(200).json({
    status: 'success',
    data: tshirts,
    message: 'Retrieved ALL Tshirts'
  });
}

function getSingleTshirt(req, res, next) {
  const tshirtID = parseInt(req.params.id);
  const tshirt = tshirts.find(t => t.id === tshirtID);

  if (!tshirt) {
    return res.status(404).json({
      status: 'error',
      message: 'Tshirt not found'
    });
  }

  res.status(200).json({
    status: 'success',
    data: tshirt,
    message: 'Retrieved ONE Tshirt'
  });
}

function createTshirt(req, res, next) {
  const { name, picture, price } = req.body;

  if (!name || !picture || !price) {
    return res.status(400).json({
      status: 'error',
      message: 'Missing required fields'
    });
  }

  const newTshirt = {
    id: nextId++,
    name,
    picture,
    price: parseInt(price)
  };

  tshirts.push(newTshirt);

  res.status(200).json({
    status: 'success',
    message: 'Inserted one Tshirt',
    data: newTshirt
  });
}
