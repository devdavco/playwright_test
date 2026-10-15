class LoginPage{

  constructor(page){
    this.page = page;


    this.inputEmail = this.page.getByRole('textbox', { name: 'Email Address' });

    this.inputPassword = this.page.getByLabel('Password');

    this.botonLoginUsuario = this.page.getByRole('button', { name: 'Sign In' })


  }


  async fillEmail(value){

    await this.inputEmail.fill(value);
  }

   async fillPassword(value){

    await this.inputPassword.fill(value);
  }

   async botonLogin(){

    await this.botonLoginUsuario.click();
  }


  async loginBotonIniciar(email,password){
    await this.page.goto('https://ecommerce-js-test.vercel.app');

    await this.page.getByRole('link', { name: 'Login' }).click();

    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.botonLogin();

  }


}

export default LoginPage;
