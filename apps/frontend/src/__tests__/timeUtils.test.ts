import { formatTime } from '../lib/timeUtils';

describe('timeUtils', () => {
  describe('formatTime', () => {
    it('should format a valid date correctly to HH:MM', () => {
      // Create a specific date to test
      const testDate = new Date('2026-04-21T14:30:00Z');
      
      // Depending on the local time zone where tests run, this might be adjusted, 
      // so we use UTC for a more robust example or assume matching local inputs for the sake of simplicity.
      // Here, we provide an explicit timezone offset format or test it in a way it's stable.
      // Let's create a date from local components to avoid UTC timezone issues in tests:
      const localDate = new Date(2026, 3, 21, 14, 30); // Months are 0-indexed in JS Date
      
      expect(formatTime(localDate)).toBe('14:30');
    });
    
    it('should format single digit hours and minutes with leading zeros', () => {
      const localDate = new Date(2026, 3, 21, 9, 5); // 09:05
      
      expect(formatTime(localDate)).toBe('09:05');
    });
  });
});
