import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBidComponent } from './content-bid.component';

describe('ContentBidComponent', () => {
  let component: ContentBidComponent;
  let fixture: ComponentFixture<ContentBidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
