import React from 'react';
import { render } from 'react-dom';
import WordPress from '../../src';
import Link, { history } from 'link-component';

const wp = new WordPress({
  base: 'https://idaff.com/',
});

const App = (props) => {
  switch (true) {
    case props.location.pathname === '/':
      return (
        <div style={{ fontFamily: 'sans-serif' }}>
          <wp.Posts query={props.location.search}>
            {posts => (
              <div>
                {posts.map(post => (
                  <div key={post.id}>
                    <h3>{post.title.rendered}</h3>
                    <wp.Content html={post.excerpt.rendered} />
                    <Link to={`/post/${post.id}`}>Read More</Link>
                    <hr />
                  </div>
                ))}
              </div>
            )}
          </wp.Posts>
        </div>
      );
    case props.location.pathname.startsWith('/post/'):
      return (
        <div style={{ fontFamily: 'sans-serif' }}>
          <wp.Post id={props.location.pathname.split('/').pop()}>
            {post => (
              <div key={post.id}>
                <h3>{post.title.rendered}</h3>
                <wp.Content html={post.content.rendered} />
                <hr />
                <Link to="/">Back to Home</Link>
              </div>
            )}
          </wp.Post>
        </div>
      );
      default:
      return <div> Route not found </div>;
  }
};

const renderApp = () =>
  render(<App location={window.location} />, document.getElementById('demo'));

renderApp();
history.listen(() => renderApp());
