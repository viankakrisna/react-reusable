import React from 'react';
import Fetch from 'fetch-component';
import sanitize from 'sanitize-html';
import qs from 'qs';

/*
  @example

  import React from 'react';
  import { render } from 'react-dom';
  import WordPress from './wordpress-components';

  const wp = new WordPress({
    base: 'https://example.com/',
  });

  const App = () => (
    <div style={{ fontFamily: 'sans-serif' }}>
      <wp.Post id={14468}>
        {post => (
          <div>
            <h2>{post.title.rendered}</h2>
            <wp.Content html={post.content.rendered} />
          </div>
        )}
      </wp.Post>
    </div>
  );

  render(<App />, document.getElementById('root'));
*/

export default class WordPress {
  constructor(config) {
    this.config = Object.assign(
      {
        onLoading: err => (
          <div style={{ textAlign: 'center' }}>
            Loading...
          </div>
        ),
        onError: err => <div>{err.message}</div>,
      },
      config,
    );
  }

  getDefaultProps = props => {
    return {
      onSuccess: props.children,
      onError: this.config.onError,
      onLoading: this.config.onLoading,
    };
  };

  Page = props => (
    <Fetch
      {...this.getDefaultProps(props)}
      url={`${this.config.base}wp-json/wp/v2/page/${props.id}`}
      {...props}
      children={null}
      cache
    />
  );

  Post = props => (
    <Fetch
      {...this.getDefaultProps(props)}
      url={`${this.config.base}wp-json/wp/v2/posts/${props.id}`}
      {...props}
      children={null}
      cache
    />
  );

  Posts = props => (
    <Fetch
      {...this.getDefaultProps(props)}
      url={`${this.config.base}wp-json/wp/v2/posts?${typeof props.query === 'string' ? props.query.replace('?', '') : qs.stringify(props.query)}`}
      {...props}
      children={null}
      cache
    />
  );

  Content = props => (
    <div dangerouslySetInnerHTML={{ __html: sanitize(props.html) }} />
  );
}
