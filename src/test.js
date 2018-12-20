const test = require('tape');
const request = require('supertest');
const app = require('./app');

test('Testing tape', (t) => {
const expected = '';
const accuual = '';
t.equal(accuual, expected, 'Should return empty string');
t.end();
});

test('home page', t => {
request(app)
.get('/')
.expect(200)
.expect('Content-Type', /html/)
.end((err, res) => {
t.error(err);
t.equal(res.statusCode,200,"home page is html page ")
t.end();
});
});

test(' pageNotFound Testing', (t) => {
request(app)
.get('/pageNotFound')
.expect(404)
.end((err, res) => {
t.error(err);
t.equal(res.statusCode, 404, 'response should be 404');
t.end();
});
});


test.onFinish(() => process.exit(0));
