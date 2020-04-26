const db = require('../model');
const catchAsync = require('./catchAsync');
const appError = require('./appError');

exports.createDocument = (model, childSelector) =>
  catchAsync(async function (req, res, next) {
    let document = await model.findOne({ user: req.user._id });
    if (!document) return next(new AppError('No document found', 404));
    const userProps = { ...req.body };
    document[childSelector].unshift(userProps);
    await document.save();
    res.status(200).json({
      status: 'success',
      data: {
        document,
      },
    });
  });
exports.updateDocument = (model, childSelector) =>
  catchAsync(async function (req, res, next) {
    let document = await model.findOne({ user: req.user.id });
    if (!document) return next(new AppError('No document found', 404));
    //Get document and check if document exists
    const index = document[childSelector]
      .map((item) => item.id)
      .indexOf(req.params.id);
    if (index < 0) return next(new AppError('No  document found', 404));
    //update
    const temp = document[childSelector][index];
    const updateData = Object.assign(temp, req.body);
    document[childSelector][index] = updateData;
    await document.save();
    res.status(200).json({
      status: 'success',
      data: {
        document,
      },
    });
  });

exports.deleteDocument = (model, childSelector) =>
  catchAsync(async function (req, res, next) {
    const document = await model.findOne({ user: req.user._id });
    if (!document) return next(new AppError('No document found', 404));
    document[childSelector].pull(req.params.id);
    await document.save();
    res.status(204).json({
      status: 'success',
    });
  });
