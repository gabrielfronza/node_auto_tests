const request = require('supertest');
const server = require('./index');

function sum(a, b) {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
});

describe('GET /url', () => {
    test('Receive a success response', async () => {
        var data = await request(server).get('/url');
        expect(data.statusCode).toBe(200);
    });
    test('Receive a body response', async () => {
        var data = await request(server).get('/url');
        expect(data.body).toBeTruthy();
    });
    test('Receive expected array', async () => {
        var data = await request(server).get('/url');
        expect(data.body.length).toBe(5);
    });
});

afterAll(() => {
    server.close();
})