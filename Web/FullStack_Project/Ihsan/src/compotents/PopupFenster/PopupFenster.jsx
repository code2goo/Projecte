import React, { useState, useEffect } from 'react';

function PopupFenster() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Überprüfen, ob der Benutzer das Modal bereits geschlossen hat
    const isModalClosed = localStorage.getItem('isModalClosed');

    if (!isModalClosed) {
      setIsOpen(true);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    // Speichern, dass der Benutzer das Modal geschlossen hat
    localStorage.setItem('isModalClosed', 'true');
  };

  if (!isOpen) {
    console.log(isOpen);
    return null; 
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Willkommen auf unserer Webseite!</h2>
        <p>Hier können Sie eine Spende machen oder weitere Informationen erhalten.</p>
        <button onClick={closeModal}>Schließen</button>
      </div>
    </div>
  );
}

export default PopupFenster;