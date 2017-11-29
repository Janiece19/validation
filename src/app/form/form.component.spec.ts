import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  fit('should verify the title', () => {
    let title = fixture.debugElement.query(By.css('h1'))
    expect(title).toBeDefined();
    expect(title.nativeElement.textContent).toEqual('Form Validations');
  })

  fit('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  fit('username field validity', () => {
    let errors = {};
    let username = component.loginForm.controls['username'];

    expect(username.valid).toBeFalsy();

    errors = username.errors || {};
    expect(username.errors['required']).toBeTruthy();


    username.setValue("test ing");
    expect(username.errors['required']).toBeFalsy();
    expect(username.errors['invalidPattern']).toBeTruthy();

    username.setValue(" est&8ing");
    expect(username.errors['required']).toBeFalsy();
    expect(username.errors['invalidPattern']).toBeTruthy();


    username.setValue("testingusernamepattern");
    expect(username.errors['invalidPattern']).toBeFalsy();
    expect(username.errors['maxlengthValidator']).toBeTruthy();


    username.setValue("test");
    expect(username.errors).toBe(null);

  });

  fit('password field validity', () => {
    let errors = {};
    let password = component.loginForm.controls['passwrd'];

    expect(password.valid).toBeFalsy();


    errors = password.errors || {};
    expect(password.errors['required']).toBeTruthy();



    password.setValue("test@Ing");
    expect(password.errors['required']).toBeFalsy();
    expect(password.errors['invalidPattern']).toBeTruthy();



    password.setValue("testing@use1rnaMepattern");
    expect(password.errors['maxlength1Validator']).toBeTruthy();

    // Set email to something correct
    password.setValue("Test1$");
    expect(password.errors).toBe(null);





  });

  fit('confirm password field validity', () => {
    let errors = {};
    let password = component.loginForm.controls['passwrd'];
    let retypepass = component.loginForm.controls['confirmpasswd'];

    expect(retypepass.valid).toBeFalsy();


    errors = retypepass.errors || {};
    expect(retypepass.errors['required']).toBeTruthy();

    password.setValue("test@Ing");
    retypepass.setValue("test@Ing");
    expect(retypepass.errors).toBe(null);


    password.setValue("testIng");
    retypepass.setValue("test@Ing");

    expect(retypepass.errors['required']).toBeFalsy();
    expect(retypepass.errors['notSame']).toBeTruthy();
  });


  fit('email field validity', () => {
    
    let email = component.loginForm.controls['email'];

    expect(email.valid).toBeFalsy();

   
    expect(email.errors['required']).toBeTruthy();

    email.setValue("test@Ing");
    expect(email.errors['required']).toBeFalsy();
    expect(email.errors['invalidPattern']).toBeTruthy();


    // Set email to something correct
    email.setValue("testing@gmail.com");
    expect(email.errors).toBe(null);


  });

  fit('dob field validity', () => {
    
    let dob = component.loginForm.controls['dob'];

    expect(dob.valid).toBeFalsy();
    expect(dob.errors['required']).toBeTruthy();

    dob.setValue("09-27-1999");
    expect(dob.errors['dateOfBirthValidator']).toBeTruthy();

    dob.setValue("11-29-1996");
    expect(dob.errors['dateOfBirthValidator']).toBeTruthy();

    dob.setValue("11-12-1992");
    expect(dob.errors).toBe(null);

  });

  fit('checking start and endtime field validity', () => {
    let errors1 = {};
    let errors2 = {};
    let start = component.loginForm.controls['time1'];
    let end = component.loginForm.controls['time2'];
    expect(start.valid).toBeFalsy();
    expect(end.valid).toBeFalsy();

     errors1 = start.errors || {};
    expect(start.errors['required']).toBeTruthy();

     errors2 = end.errors || {};
    expect(end.errors['required']).toBeTruthy();

    start.setValue("11-29-2017");
    end.setValue("11-1-2017");
    expect(end.errors['dateAndTimeValidator']).toBeTruthy();

    start.setValue("11-29-2017");
    end.setValue("11-28-2017");
    expect(end.errors['dateAndTimeValidator']).toBeTruthy();

    //  end.setValue("11-31-2017");
    // expect(end.errors['InvalidDate2']).toBeTruthy();


    start.setValue("11-31-2017");
    expect(errors1['InvalidDate1']).toBeTruthy();
    end.setValue("11-31-2017");
    expect(errors2['InvalidDate2']).toBeTruthy();




    start.setValue("11-2-2017");
    end.setValue("11-1-2018");
    expect(end.errors).toBe(null);





  });





});