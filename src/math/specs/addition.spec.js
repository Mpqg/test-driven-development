import { describe, it, expect } from '@jest/globals';
import { sum, sumArray } from '../addition';


describe('addition', () => {
  describe('sum', () => {
    it('should sum two numbers', () => {
      expect(sum(1, 2)).toBe(3);
    });
  });

  describe('sumArray', () => {
    it('should sum an array of numbers', () => {
      expect(sumArray([1, 2, 3])).toBe(6);
    });
  });
});
