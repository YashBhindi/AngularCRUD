import { TestBed } from '@angular/core/testing';

import { ItemListServicesService } from './item-list-services.service';

describe('ItemListServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemListServicesService = TestBed.get(ItemListServicesService);
    expect(service).toBeTruthy();
  });
});
