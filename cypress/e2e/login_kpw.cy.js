/// <reference types="cypress" />



describe('Create automation script', () => {
  beforeEach(()=>{
    cy.visit('http://the-internet.herokuapp.com/login')
  })

  it('Login success', ()=> {

    // login form
    cy.get('form[name="login"][id="login"]').within(() =>{
      cy.get('input[name="username"][id="username"]').type('tomsmith') // username field
      cy.get('input[name="password"][id="password"]').type('SuperSecretPassword!') // password field
      cy.get('button[class="radius"][type="submit"]').contains('Login').click() 
    })
    // Check the notification after successful login.
    cy.contains('Welcome to the Secure Area. When you are done click logout below.').log('login success')
    cy.get('a[class="button secondary radius"][href="/logout"]').contains('Logout').click() 
  })

  it('Login failed(Password incorrect)', ()=>{
    // login form
    cy.get('form[name="login"][id="login"]').within(() =>{
      cy.get('input[name="username"][id="username"]').type('tomsmith') // username field
      cy.get('input[name="password"][id="password"]').type('Password!') // password field,incorrect password
      cy.get('button[class="radius"][type="submit"]').contains('Login').click()
    })
    // Check the notification after successful login.
    cy.contains('Your password is invalid!').log('login fail(Password incorrect)')
  })

  it('Login failed(Username not found)', ()=>{
    // login form
    cy.get('form[name="login"][id="login"]').within(() =>{
      cy.get('input[name="username"][id="username"]').type('tomholland') // username field
      cy.get('input[name="password"][id="password"]').type('Password!') // password field,incorrect password
      cy.get('button[class="radius"][type="submit"]').contains('Login').click()
    })
    // Check the notification after successful login.
    cy.contains('Your username is invalid!').log('login fail(Username not found)')
  })

  
})

