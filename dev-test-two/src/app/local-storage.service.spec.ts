import {TestBed} from '@angular/core/testing';

import {LocalStorageService} from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });
    service = TestBed.get(LocalStorageService);
  });

  afterEach(() => localStorage.clear());

  // Write Unit Tests Here

  it('should set local storage item value', () => {
    let value = 12345;
    service.setItem('key', value);
    let item = localStorage.getItem('MFM - key');
    expect(item).toBe("12345");
  });

  it('should set local storage item value', () => {
    let value = {name: 'jeff', email: 'jkwok97@gmail.com'};
    service.setItem('key', value);
    let item = localStorage.getItem('MFM - key');
    expect(item).toBe('{"name":"jeff","email":"jkwok97@gmail.com"}');
  });

  it('count all local storage items', () => {
    let value = {name: 'jeff', email: 'jkwok97@gmail.com'};
    service.setItem('key', value);
    service.setItem('key1', value);
    let length = localStorage.length;
    expect(length).toBe(2);
  });

  it('get all local storage item value', () => {
    let value = {name: 'jeff', email: 'jkwok97@gmail.com'};
    service.setItem('key', value);
    expect(service.getItem('key')).toEqual({"name":"jeff","email":"jkwok97@gmail.com"});
  });

  it('remove local storage item', () => {
    let value = {name: 'jeff', email: 'jkwok97@gmail.com'};
    service.setItem('key', value);
    expect(service.removeItem('key')).toBe(undefined);
  });

  it('tests function', () => {
    let value = {name: 'jeff', email: 'jkwok97@gmail.com'};
    service.setItem('key', value);
    expect(service.removeItem('key')).toBe(undefined);
  });

});
