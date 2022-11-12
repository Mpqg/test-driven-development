import { describe, it, expect } from '@jest/globals';
import {isEven, isInteger, isNegative, isOdd, isPositive, isPrime} from '../logical';

describe('logical', () => {
  describe('isEven', () => {
    it('should return true if the number is even', () => {
      expect(isEven(2)).toBe(true);
    });
  });

  describe('isOdd', () => {
    it('should return true if the number is odd', () => {
      expect(isOdd(1)).toBe(true);
    });
  });

  describe('isPrime', () => {
    it('should return true if the number is prime', () => {
      expect(isPrime(2)).toBe(true);
    });
  });

  describe('isInteger', () => {
    it('should return true if the number is an integer', () => {
      expect(isInteger(1)).toBe(true);
    });
  });

  describe('isPositive', () => {
    it('should return true if the number is positive', () => {
      expect(isPositive(1)).toBe(true);
    });
  });

  describe('isNegative', () => {
    it('should return true if the number is negative', () => {
      expect(isNegative(-1)).toBe(true);
    });
  });
});
