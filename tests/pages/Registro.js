
class RegistroPage{

  //propiedades de la página
  //Serán los elementos que tiene disponible

  constructor(page){
    this.page = page;

    this.inputFullName = this.page.getByRole('textbox', { name: 'Full Name' });
    this.inputEmailAddress = this.page.getByRole('textbox', { name: 'Email Address' });
    this.inputPassword = this.page.getByLabel('Password', { exact: true });
    this.inputConfirmPassword = this.page.getByLabel('Confirm Password', { exact: true });
    this.botonCreateAccount = this.page.getByRole('button', { name: 'Create Account' });
    this.mensajeError = this.page.getByText('Password must be at least 6 characters long', { exact: true });    
  }

  //Acciones
  async fillFullName(value){

    await this.inputFullName.fill(value);

  }

  async fillEmail(value){

    await this.inputEmailAddress.fill(value);
  }

  async fillPassword(value){

    await this.inputPassword.fill(value);

  }

  async fillConfirmPassword(value){

    await this.inputConfirmPassword.fill(value);

  }

  async clickButtonCreateAccount(){
    await this.botonCreateAccount.click();

  }

  async registrar(fullName, emailAddress,password,confirmPassword){

    await this.page.goto('https://ecommerce-js-test.vercel.app');
    await this.page.getByRole('link', { name : 'Register' }).click();

    await this.fillFullName(fullName);
    await this.fillEmail(emailAddress);
    await this.fillPassword(password);
    await this.fillConfirmPassword(confirmPassword);
    await this.clickButtonCreateAccount();

  }

  
}


  export default RegistroPage;