import { async, TestBed } from '@angular/core/testing';
import { StudComponent } from './stud.component';
describe('StudComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [StudComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(StudComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/osman/Desktop/Projects/meanauthapp-master/angular-src/src/app/components/studs/stud/stud.component.spec.js.map