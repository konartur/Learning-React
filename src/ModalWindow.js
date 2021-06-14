import { stylesModal } from "./styles/modalWindow";

function ModalWindow() {
  return (
    <div style={stylesModal.Background}>
      <div style={stylesModal.Modal}>
        <h2 style={stylesModal.Modal__title}>Ваш вопрос</h2>
        <span style={stylesModal.Modal__span}>x</span>
        <form action="POST" style={stylesModal.Modal__form}>
          <input
            type="text"
            style={stylesModal.Form__name}
            placeholder="Имя"
            autoFocus
          />
          <input
            type="text"
            style={stylesModal.Form__email}
            placeholder="E-mail"
          />
          <input
            type="textarea"
            style={stylesModal.Form__message}
            placeholder="Комментарий"
          />
          <input
            type="submit"
            style={stylesModal.Form__button}
            value="Заказать"
          />
        </form>
      </div>
    </div>
  );
}

export default ModalWindow;
