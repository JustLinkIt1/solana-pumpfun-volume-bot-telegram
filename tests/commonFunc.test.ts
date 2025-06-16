import { convertHttpToWebSocket } from '../utils/commonFunc';

describe('convertHttpToWebSocket', () => {
  test('http to wss', () => {
    expect(convertHttpToWebSocket('http://example.com')).toBe('wss://example.com');
  });

  test('https to wss', () => {
    expect(convertHttpToWebSocket('https://example.com')).toBe('wss://example.com');
  });
});
