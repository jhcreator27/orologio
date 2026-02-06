import { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="app">
      <header>
        <h1>Social Network</h1>
      </header>
      <main>
        <section className="feed">
          <h2>Feed</h2>
          {posts.length === 0 ? (
            <p>Nessun post disponibile</p>
          ) : (
            <ul>
              {posts.map((post, index) => (
                <li key={index}>
                  <p>{post.content}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section className="create-post">
          <h2>Crea Post</h2>
          <textarea placeholder="Cosa stai pensando?" rows="4"></textarea>
          <button onClick={() => setPosts([...posts, { content: 'Nuovo post' }])}>
            Pubblica
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;