function ModalWindow(props) {
  return (
    <div className="background">
      <div className="modal">
        <h2 class="modal__title">Ваш вопрос</h2>
        <span className="modal__span">x</span>
        <form action="POST" className="modal__form">
          <input
            type="text"
            className="form__name"
            placeholder="Имя"
            autofocus
          />
          <input type="text" className="form__email" placeholder="E-mail" />
          <input
            type="textarea"
            className="form__message"
            placeholder="Комментарий"
          />
          <input type="submit" className="form__button" value="Заказать" />
        </form>
      </div>
    </div>
  );
}

export default ModalWindow;
