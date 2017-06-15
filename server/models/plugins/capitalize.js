//Returns a capitalized string with the proper padding
function capitalizeWord(acc, val, index){
	const padding = index > 0 ? ' ' : '';
	return acc + padding + val.charAt(0).toUpperCase() + val.slice(1);
}


//Capitalize the first letter in each word of a string
const toTitleCase = function(str = ''){
	const words = str.split(' ');
	
	return words.reduce(capitalizeWord , '');
};

// Custom mongoose plugin that will use the above string method to format various fields
// to a schema before it is saved to the database

//NOTE : this function will not work on embedded fields

exports.toTitleCase = toTitleCase;

module.exports = function(schema, {fields}){
	
	schema.pre('save', function(next) {
		const self = this;
		
		fields.forEach( field => {
			
			if( self[field] ){
				self[field] = toTitleCase(self[field]);
			} 
		});

		return next();
	});
};
