import { TestBed } from '@angular/core/testing';

import { DeviceRegistrationService } from './device-registration.service';

describe('DeviceRegistrationService', () => {
  let service: DeviceRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
