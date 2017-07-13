import { hexToRgb } from './color-converter';

describe('ColorConverter Util file', () => {
  fit('should change convert Hex to RGB', function() {
      expect(hexToRgb('#abcabc').r).toEqual('123');
  });
});
