/* eslint-disable no-undef */
// import { describe } from "mocha";

import {describe} from "mocha";

const chai = require("chai");
const expect = chai.expect;
const server = require('../server');

// eslint-disable-next-line no-console
console.log("test file, server = \n", server);

describe('test', () => {
    it('this simple test should return a string', () => {
        expect('Test CI with Travis').to.equal('Test CI with Travis');
    });
    process.exit();
});