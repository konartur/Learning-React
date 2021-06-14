* {
    padding: 0,
    margin: 0,
    box-sizing: border-box,
    font-family: "caveatregular",
  }
  
  const Background = {
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: '999',
    width: '100%',
    height: '100%'
  }
  
  const Modal = {
    zIndex: '9999',
    position: 'absolute',
    top: 50%,
    left: 50%,
    background-color: rgb(194, 198, 204),
    width: 400px,
    height: 470px,
    margin-left: -200px,
    margin-top: -235px,
    border: 2px solid rgb(126, 4, 4),
  }
  
  .modal__title {
    text-align: center,
    text-transform: uppercase,
    margin: 45px 0,
    font-size: 24px,
    color: rgb(126, 4, 4),
  }
  
  .modal__span {
    position: absolute,
    top: 10px,
    right: 15px,
    z-index: 99999,
    text-decoration: none,
    color: rgb(126, 4, 4),
    font-size: 35px,
    font-weight: 700,
    cursor: pointer,
  }
  .modal__span:hover {
    color: #fff,
  }
  
  .form__name,
  .form__email,
  .form__message,
  .form__button {
    display: block,
    color: lightslategray,
    font-size: 24px,
    padding: 15px,
    border: none,
    margin: 20px,
    width: 90%,
    border: 1px solid transparent,
  }
  .modal__form input:hover {
    border: 1px solid rgb(126, 4, 4),
  }
  .modal__form input[type="text"]:focus,
  .modal__form input[type="textarea"]:focus {
    outline: none,
    border: 1px solid rgb(126, 4, 4),
  }
  
  .form__button {
    text-decoration: none,
    color: white,
    background-color: rgb(126, 4, 4),
    text-align: center,
    border-radius: 5px,
  }
  
  .modal__form input[type="submit"]:hover {
    border: 1px solid white,
    cursor: pointer,
  }
  