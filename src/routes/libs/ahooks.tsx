import { useRequest } from 'ahooks';

interface Resource {
  id: number;
  title: string;
  body: string;
  userId: number;
}

/**
 * @see https://jsonplaceholder.typicode.com/
 */
function getResource(): Promise<Resource> {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
}

function createResource(resource: Resource): Promise<Resource> {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(resource),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
}

const GetUser = () => {
  const { data, error, loading, run } = useRequest(getResource, {
    manual: true,
    onBefore: params => {
      console.log({ params });
    }
  });

  return (
    <>
      <h1>ahooks</h1>
      <div>{loading && 'loading...'}</div>
      <button onClick={run}>getUser</button>
      <pre>
        <code>{JSON.stringify(data)}</code>
      </pre>
    </>
  );
};

const CreateResource = () => {
  const { data, error, loading, run } = useRequest(
    (resource: Resource) => createResource(resource),
    {
      manual: true,
      onBefore: params => {
        console.log({ params });
      }
    }
  );

  return (
    <>
      <h1>ahooks</h1>
      <div>{loading && 'loading...'}</div>
      <button
        onClick={() => {
          run({
            id: 666,
            title: 'created resource',
            body: 'no body',
            userId: 333
          });
        }}>
        createResource
      </button>
      <pre>
        <code>{JSON.stringify(data)}</code>
      </pre>
    </>
  );
};

/**
 * @see https://ahooks.js.org/zh-CN
 */
export default () => {
  return (
    <>
      <GetUser /> <hr /> <CreateResource />
    </>
  );
};
