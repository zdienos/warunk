import Realm from 'realm';

export const AppId = {
	name : 'AppId',
	primaryKey : 'id',
	properties : {
		id : 'int',
		name : { type : 'string', indexed : true },
		address : 'string',
		location: 'string'
		ownerName : 'string',
		ownerPhone : 'string',
		ownerEmail : 'string',
		ownerPassword : 'string',
		ownerPict : 'data?',
		forgotToken: 'string',
		creationDate : 'date'
	}
};

export const MasterProduct = {
	name : 'MasterProduct',
	primaryKey : 'id',
	properties : {
		id : 'int',
		code : { type : 'string', indexed : true },
		name : { type : 'string', indexed : true },
		buyPrice : 'float',
		sellPrice : 'float',
		creationDate : 'date'
	}
}; 

export const Transaction = {
	name : 'Transaction',
	primaryKey : 'id',
	properties : {
		id : 'string',
		products : { type : 'list', objectType : 'MasterProduct' },
		creationDate : 'date'
	}
};

const databaseOptions = {
	path : 'warunk.realm',
	schema : [AppId, MasterProduct, Transaction],
	schemaVersion : 0
};

export const insertAppId = newAppId => new promise((resolve, reject) => {
	Realm.open(databaseOptions).then(realm => {
		realm.write(() => {
			realm.create('AppId', newAppId);
			resolve(newAppId);
		});
	}).catch((error) => reject(error));
});

