import React from 'react';
import Fetch from './Fetch';
const mapList = props => (data, reload) => {
  const { List, Item, ReloadButton, Wrapper } = {
    List: 'ul',
    Item: ({ item }) => <li>{item && item.title}</li>,
    ReloadButton: 'button',
    Wrapper: 'div',
    ...props.components,
  };
  return (
    <Wrapper>
      <List>
        {data.map(
          (item, index) =>
            Array.isArray(item) ? (
              <Item key={index}>{mapList(props)(item)}</Item>
            ) : (
              <Item key={item.id} item={item} />
            )
        )}
      </List>
      <ReloadButton onClick={e => reload(props)}>Reload</ReloadButton>
    </Wrapper>
  );
};

const AsyncList = props => (
  <Fetch
    onLoading={(props, cancel) => (
      <div>
        <p>Loading {props.url}...</p>
        <button onClick={e => cancel()}>Cancel?</button>
      </div>
    )}
    onSuccess={mapList(props)}
    onCancel={(props, reload) => (
      <div>
        <p>Canceled</p>
        <button onClick={e => reload(props)}>Reload?</button>
      </div>
    )}
    onError={(error, reload) => (
      <div>
        <p>Error!</p>
        <pre>{error.message}</pre>
        <button onClick={e => reload(props)}>Reload?</button>
      </div>
    )}
    {...props}
  />
);

export default AsyncList;
