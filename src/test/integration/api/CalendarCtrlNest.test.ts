import { Test, TestingModule } from '@nestjs/testing';
import { CalendarCtrl } from '../../../controllers/CalendarCtrl';

describe('CalendarCtrl test', () => {
  let appController: CalendarCtrl;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CalendarCtrl]
    }).compile();

    appController = app.get<CalendarCtrl>(CalendarCtrl);
  });

  describe('CalendarCtrl-findAll()', () => {
    it('should return all calendars!"', () => {
      expect(appController.findAll()).toBe('This action returns all calendars');
    });
  });
});
