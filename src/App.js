import React from 'react';
import './main.scss';

function App() {

  let contactlist = ["Abhijeet", "ajay", "sanjana", "anshika"]
  contactlist = [...contactlist,...contactlist,...contactlist,...contactlist].map((i, idx)=> (
    <div className="contact-item" key={idx}>
      <div>
        <img src="https://img.icons8.com/pastel-glyph/2x/user-male.png" height="30px" width="30px" alt="user"/>
        <span>{i}</span>
      </div>
      <img src="https://www.pngfind.com/pngs/m/269-2698936_green-dot-icon-png-green-online-icon-png.png" height="15px" width="15px" alt="online"/>
    </div>));

  return (
    <div className="chat-app">
      <div className="header"></div>
      <div className="body">
        <div className="contactList">
          {contactlist}
        </div>
        <div className="chatContainer">
          <div className="selectedChat">
            <div>
              <img src="https://img.icons8.com/pastel-glyph/2x/user-male.png" height="30px" width="30px" alt="user"/>
              Abhijeet Singh
            </div>
          </div>
          <div className="chat-body">
            <div className="chatMessage sender">Hi</div>
            <div className="chatMessage reciever">Jai ho Jai ho Jai ho</div>
            <div className="chatMessage sender">Hi</div>
            <div className="chatMessage reciever">Jai ho Jai ho Jai ho</div>
            <div className="chatMessage sender">Hi</div>
            <div className="chatMessage reciever">Jai ho Jai ho Jai ho</div>
            <div className="chatMessage sender">Hi</div>
            <div className="chatMessage reciever">Jai ho Jai ho Jai ho</div>
            <div className="chatMessage sender">Hi</div>
            <div className="chatMessage reciever">Jai ho Jai ho Jai ho</div>
            <div className="chatMessage sender">Hi</div>
            <div className="chatMessage reciever">Jai ho Jai ho Jai ho</div>
            <div className="chatMessage sender">Hi</div>
            <div className="chatMessage reciever">Jai ho Jai ho Jai ho</div>
            <div className="chatMessage sender">Hi</div>
            <div className="chatMessage reciever">Jai ho Jai ho Jai ho</div>
            <div className="chatMessage sender">Hi</div>
            <div className="chatMessage reciever">Jai ho Jai ho Jai ho</div>
            <div className="chatMessage sender">Hi</div>
            <div className="chatMessage reciever">Jai ho Jai ho Jai ho</div>
          </div>
          <div className="reply-container">
            <input type="text"/>
            <button className="sendMessage">></button>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
