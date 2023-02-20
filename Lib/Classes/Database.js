const mongoose = require('mongoose');

class Database {
    constructor(dbUri) {
        this.dbUri = dbUri;
    }

    init() {
        mongoose.connect(this.dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log('Connected to database'))
            .catch((err) => console.error('Error connecting to database', err));
    }
}

module.exports = new Database(process.env.mongo_uri);