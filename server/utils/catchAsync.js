module.exports = (fnc) => {
  //return anonymous function
  return (req, res, next) => {
    fnc(req, res, next).catch((error) => {
      next(error);
    });
  };
};
