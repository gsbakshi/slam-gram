const { getCollection } = require('./utils/astraClient');

const handler = async event => {
    const users = await getCollection();
    const body = JSON.parse(event.body);

    try {
        await users.update(body.userId, body.data);
        return {
            statusCode: 200,
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