const { getCollection } = require('./utils/astraClient');

const handler = async event => {
    const posts = await getCollection();
    try {
        const res = await posts.find({});
        return {
            statusCode: 200,
            body: JSON.stringify(Object.keys(res).map((i) => res[i])),
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