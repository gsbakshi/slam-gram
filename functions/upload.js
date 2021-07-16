const { getCollection } = require('./utils/astraClient');
const faker = require('faker');

let id = faker.datatype.uuid();

const handler = async event => {
    const upload = await getCollection();
    try {
        const userUpload = await upload.create(id, event.body);
        return {
            statusCode: 200,
            body: JSON.stringify(userUpload),
            headers: {
                'Content-type': 'application/json',
            },
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
};

module.exports = { handler };