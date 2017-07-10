const mongoose = require('mongoose');
/*
	Mongoose plugin for removing any refs of a document about to be deleted
	that reside within another model

	**params**
	@schema - A reference to the mongoose schema using the plugin
	@options - An object with the following keys:
		@modelName: [STRING] The mongoose model that needs to remove the ref
		@field: [STRING] The name of the property in which the ref is located

*/


module.exports = function(schema, options) {

	const { modelName, field } = options;
	const successfulRemove =
		`Schema pre remove hook successfully deleted ref in ${modelName} model`;
	const failedRemove =
		`Failed to delete ref in ${modelName} model`;

	schema.pre('remove', function(next) {
		const _id = this._id;
		const query = { [field]: { $in: [_id] }};
		const update = { $pull: { [field]: _id }};

		mongoose.model(modelName).findOneAndUpdate(query, update)
			.exec()
			.then(() => {
				console.log(successfulRemove);
				return next();
			})
			.catch(error => {
				console.log(failedRemove);
				throw error;
			});
	});
};

