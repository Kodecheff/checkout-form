/*****
 * Visa card number -> /^(?:4[0-9]{12}(?:[0-9]{3})?)$/ [Starts with 4, length 13 or 16]
 * American Express -> /^(?:3[47][0-9]{13})$/ [Starts with 34 or 37, length 15]
 * Master card -> /^(?:5[1-5][0-9]{14})$/ [Starts with 51 through 55, length 16]
 * Discover card -> /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/ [Starts with 6011, length 15 or starts with 5, length 15]
 * Diner's club card ->/^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/ [Starts with 300 through 305, 36, or 38, length 14]
 * JCB card -> /^(?:(?:2131|1800|35\d{3})\d{11})$/ [Starts with 2131 or 1800, length 15 or starts with 35 length 16]
 * 
 */
$(function(){
  // Get element DOM
  const $inputs = $('#checkout-form :input')
  const $cardholderName = $('input#card-name')
  const $cardNumber = $('input#card-number')
  const $cardExpiration = $('input#card-expiration')
  const $cardCVV = $('input#card-cvv')

  const cardNumber = document.getElementById('card-number')
  const cardCVV = document.getElementById('card-cvv')
  const cardExpiration = document.getElementById('card-expiration')
  const para = document.querySelector('.card-number p')
  const cardLogoContainer = document.querySelector('.cardLogoContainer')

  const img = document.createElement('img')
  img.className = 'cardLogo'

  // Validate Visa card
  function VisaCardNumber(number){
    let cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
    return cardno.test(number)
  }
  // Validate Master card
  function MasterCardNumber(number){
    let cardno = /^(?:5[1-5][0-9]{14})$/
    return cardno.test(number)
  }
  // Validate American Express card
  function AmericanExpressCardNumber(number){
    let cardno = /^(?:3[47][0-9]{13})$/
    return cardno.test(number)
  }
  // Validate Discover card
  function DiscoverCardNumber(number){
    let cardno = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/
    return cardno.test(number)
  }

  // Listening on Card number input
  cardNumber.addEventListener('input', (e) => {
    const num = Number(e.target.value)

    if(!num){
      $cardNumber.css({'border':'1px solid red', 'outline': 'none'})
      para.textContent = 'Input must be a number'
      para.setAttribute('class', 'error-msg')
    }else{
      $cardNumber.css({'border':'none'})
      para.textContent = ''
    }

    if(VisaCardNumber(e.target.value)){
      img.setAttribute('src', './img/visa.png')
      cardLogoContainer.appendChild(img)
    }else if(MasterCardNumber(e.target.value))
      {img.setAttribute('src', './img/master.png')
      cardLogoContainer.appendChild(img)
    }else if(AmericanExpressCardNumber(e.target.value)){
      img.setAttribute('src', './img/AExpress.jpeg')
      cardLogoContainer.appendChild(img)
    }else if(DiscoverCardNumber(e.target.value)){
      img.setAttribute('src', './img/discover.png')
      cardLogoContainer.appendChild(img)
    }else{
      cardLogoContainer.removeChild(img)
    }
    
  })

  // Listening on card CVV
  cardCVV.addEventListener('input', (e) => {
    const num = Number(e.target.value)

    if(!num){
      $cardCVV.css({'border':'1px solid red', 'outline': 'none'})
    }else{
      $cardCVV.css({'border':'none'})
    }
  })

  cardExpiration.addEventListener('input', (e) => {
    const num = Number(e.target.value)

    if(!num){
      console.log('Invalid date format')
      $cardExpiration.css({'border':'1px solid red', 'outline': 'none'})
    }else{
      $cardExpiration.css({'border':'none'})
    }
  })
})
