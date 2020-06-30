class Form{
    constructor(){
        this.button = createButton("Submit");
    }
    display(){
        this.button.position(750,500);
        this.question1 = createElement('h3', "Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
        this.radio = createRadio('h3');
        this.radio.option('yes');
        this.radio.option('No');
        this.question2 = createElement('h3', "Q2. Would you be willing to contribute a small amount every month for such a program?");
        this.radio1 = createRadio('h3');
        this.radio1.option('yes');
        this.radio1.option('No');
        this.question3 = createElement('h3', "Q3. How much per month would you be willing to pay?");
        this.radio2 = createRadio('h3');
        this.radio2.option('yes');
        this.radio2.option('No');
        this.button.mousePressed(()=>{
            var user = new User();
            user.updateCount();
            user.update(this.input.value(), this.email.value(), [this.radio.value(), this.radio1.value(), this.radio2.value()],pCount);
        })
    }
}