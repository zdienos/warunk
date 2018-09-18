import Realm from 'realm';

export const AppId = {
	name : 'AppId',
	primaryKey : 'id',
	properties : {
		id : 'int',
		name : { type : 'string', indexed : true },
		address : 'string',
		location: 'string',
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

export const insertAppId = newAppId => new Promise((resolve, reject) => {
	Realm.open(databaseOptions).then(realm => {
		realm.write(() => {
			realm.create('AppId', newAppId);
			resolve(newAppId);
		});
	}).catch((error) => reject(error));
});

export const selectAppId = appId => new Promise((resolve, reject) => {
	Realm.open(databaseOptions).then(realm => {
		realm.write(() => {
			let selectedAppId = realm.objectForPrimaryKey('AppId');
			resolve(selectedAppId);
		});
	}).catch((error) => reject(error));
});

export const updateAppId = appId => new Promise((resolve, reject) => {
	Realm.open(databaseOptions).then(realm => {
		realm.write(() => {
			let newAppId = realm.objectForPrimaryKey('AppId', appId.id);
			newAppId.name = appId.name;
			newAppId.address  = appId.address;
			newAppId.location = appId.location;
			newAppId.ownerName  = appId.ownerName;
			newAppId.ownerPhone  = appId.ownerPhone;
			newAppId.ownerEmail  = appId.ownerEmail;
			newAppId.ownerPassword  = appId.ownerPassword;
			newAppId.ownerPict  = appId.ownerPict;
			newAppId.forgotToken = appId.forgotToken;
			resolve();
		});
	}).catch((error) => reject(error));
});

export const deleteAppId = appId => new Promise((resolve, reject) => {
	Realm.open(databaseOptions).then(realm => {
		realm.write(() => {
			let deleteAppId = realm.objectForPrimaryKey('AppId', appId.id);
			realm.delete(deleteAppId);
			resolve();
		});
	}).catch((error) => reject(error));
});

export const clearAppId = appId => new Promise((resolve, reject) => {
	Realm.open(databaseOptions).then(realm => {
		realm.write(() => {
			let deleteAppId = realm.objectForPrimaryKey('AppId');
			realm.delete(deleteAppId);
			resolve();
		});
	}).catch((error) => reject(error));
});

export default new Realm(databaseOptions);

