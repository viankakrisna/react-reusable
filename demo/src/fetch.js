import React from "react";
import { AsyncList, styled } from "../../src";
import { Button, Card1 } from "./styles";

const Box = styled("div")`padding: 1em;`;
const JSON_URL = "https://jsonplaceholder.typicode.com/posts";
const WRONG_JSON_URL = "https://jsonplaceholder.typicode.com/poss";

const urls = [
  JSON_URL,
  JSON_URL,
  JSON_URL,
  JSON_URL,
  JSON_URL,
  JSON_URL,
  JSON_URL
];

const FetchExample = props => (
  <Card1>
    <h1>Reusable Fetch Demo</h1>
    <Box>
      <h2>Multiple JSON_URL</h2>
      <AsyncList
        url={urls}
        onLoading={props => <p>Loading {props.url.join(", ")}</p>}
      />
    </Box>
    <Box>
      <h2>onSuccess</h2>
      <AsyncList url={JSON_URL} />
    </Box>
    <Box>
      <h2>Cached</h2>
      <AsyncList url={JSON_URL} cache />
    </Box>
    <Box>
      <h2>onError</h2>
      <AsyncList
        url={WRONG_JSON_URL}
        onError={(error, reload) => (
          <div>
            <p>Error!</p>
            <pre>{error.message}</pre>
            <Button
              onClick={e =>
                reload({
                  ...props,
                  url: JSON_URL
                })}
            >
              Reload?
            </Button>
          </div>
        )}
      />
    </Box>
    <Box>
      <h2>onLoading</h2>
      <AsyncList />
    </Box>
    <Box>
      <h2>With Children</h2>
      <AsyncList url={JSON_URL}>
        {(data, state, props) => <Debug it={data} />}
      </AsyncList>
    </Box>
  </Card1>
);

export default FetchExample;
