# POST 方法四种形式

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

# Getting a resource

```js
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json));
```

# Listing all resources

```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json));
```

# Creating a resource

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})
  .then(response => response.json())
  .then(json => console.log(json));
```

# test

```js
var fd = new FormData();
fd.append('name', 'name');
fd.append('age', 32);
fd.append('title', 'title');
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: fd,
  headers: {
    // 'Content-type': 'application/json; charset=UTF-8'
    'Content-type': 'application/x-www-form-urlencoded'
  }
})
  .then(response => response.json())
  .then(json => console.log(json));

var fd = new FormData();
fd.append('name', 'name');
fd.append('age', 32);
fd.append('title', 'title');
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: fd,
  headers: {
    // 'Content-type': 'application/json; charset=UTF-8'
    'Content-type': 'multipart/form-data'
  }
})
  .then(response => response.json())
  .then(json => console.log(json));
```
