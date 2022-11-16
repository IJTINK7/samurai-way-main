import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
          <img src="https://i.pinimg.com/originals/0a/25/0c/0a250c8816e7118e07e869ae51c54cc0.jpg" alt="logo-img"/>
      </header>
      <main className="main">
          <nav>
              <div className="profile">Profile</div>
              <div className="messages">Messages</div>
              <div className="mainContent">Main content</div>
          </nav>
          <div className="content">
              <div className="imgContainer">
                  <img src="https://phonoteka.org/uploads/posts/2021-06/1624448731_17-phonoteka_org-p-akatsuki-oboi-vertikalnie-krasivo-17.jpg" alt="content-img"/>
              </div>
              <div>Ava+Description</div>
              <div>My posts
                  <div>New Post</div>
                  <div>Post 1</div>
                  <div>Post 2</div>
              </div>
          </div>

      </main>
    </div>
  );
}

export default App;
