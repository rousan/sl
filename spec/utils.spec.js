const fs = require('fs');
const path = require('path');
const chai = require('chai');
const utils = require('../src/utils.js');

const { expect } = chai;
const validJsonFile = path.resolve(path.join(__dirname, 'data', 'valid.json'));
const invalidJsonFile = path.resolve(path.join(__dirname, 'data', 'invalid.json'));

describe('utils', () => {
  describe('readJSONFile(filePath)', () => {
    it('should return object if the JSON file exists', () => {
      const jsonObj = JSON.parse(fs.readFileSync(validJsonFile, { encoding: 'utf8' }));
      expect(utils.readJSONFile(validJsonFile)).to.deep.equal(jsonObj);
    });

    it('should return null if the JSON file doesn\'t exist or invalid', () => {
      /* eslint-disable-next-line no-unused-expressions */
      expect(utils.readJSONFile('non-existent-file.json')).to.be.null;
      /* eslint-disable-next-line no-unused-expressions */
      expect(utils.readJSONFile(invalidJsonFile)).to.be.null;
    });
  });

  describe('isDirectory(path)', () => {
    it('should return true if path is directory', () => {
      /* eslint-disable-next-line no-unused-expressions */
      expect(utils.isDirectory(__dirname)).to.be.true;
      /* eslint-disable-next-line no-unused-expressions */
      expect(utils.isDirectory(__filename)).to.be.false;
    });
  });

  describe('maxLength(strs)', () => {
    it('should return maximum length value among given strings', () => {
      expect(utils.maxLength(['a', 'abc', 'ab'])).to.be.equal(3);
      expect(utils.maxLength([])).to.be.equal(-Infinity);
    });
  });

  describe('promisify(original)', () => {
    it('should return promisified version of error-first callback styled function', async () => {
      const sampleData = { firstName: 'Rousan', lastName: 'Ali' };
      const originalFn = function originalFn(userId, callback) {
        setTimeout(() => {
          callback(null, sampleData);
        });
      };

      const userInfo = await utils.promisify(originalFn)(12);
      expect(userInfo).to.be.equal(sampleData);
    });
  });

  describe('padEnd(str, length)', () => {
    it('should return right padded string', () => {
      expect(utils.padEnd('abc', 5)).to.be.equal('abc  ');
      expect(utils.padEnd('abc', 1)).to.be.equal('abc');
      expect(utils.padEnd('', 5)).to.be.equal('     ');
    });
  });
});
