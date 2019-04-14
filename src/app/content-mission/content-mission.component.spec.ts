import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMissionComponent } from './content-mission.component';

describe('ContentMissionComponent', () => {
  let component: ContentMissionComponent;
  let fixture: ComponentFixture<ContentMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
