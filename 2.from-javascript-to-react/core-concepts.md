# concepts

- Components 组件

- Props

- State

## component

```html
<!-- 组件需要大写,像正常的html标签一样使用< /> -->
<!-- 组件可以嵌套使用,最终形成类似组件树的结构 -->

const app = document.getElementById("app")

function Header() {
    return <h1>Develop. Preview. Ship. 🚀</h1>;
}

ReactDOM.render(<Header />, app);


<!-- -------- -->

function Header() {
    return <h1>Develop. Preview. Ship. 🚀</h1>;
  }
  
  function HomePage() {
    return (
      <div>
        <Header />
      </div>
    );
  }
ReactDOM.render(<HomePage />, app);
```

## props

通过props显示数据,传给react component的信息(属性)被称为props

```html
function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}

function HomePage() {
  return (
    <div>
      <Header />
      <Header />
    </div>
  );
}
```

example

```jsx
function createTitle(title) {
  if (title) {
    return title;
  } else {
    return 'Default title';
  }
}

function Header({ title }) {
  return <h1>{createTitle(title)}</h1>;
}

function DefaultHeader({ title }) {
  return <h1>{title ? title : 'Default Title'}</h1>;
}
```

### iterating 循环访问

```jsx
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {
            names.map((name) => (
            <li>{name}</li>
            ))
        }
      </ul>
    </div>
  );
}
```

### interactivity & state 交互,状态

state & event handlers

```jsx
// 创建一个按钮,侦听事件

function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={}>Like</button>
    </div>
  );
}
```

onClick 事件是可用于响应用户交互的众多可能事件之一
onChange 用于输入字段，
onSubmit 用于表单

```jsx
function HomePage() {
  //    ...
  function handleClick() {
    console.log('increment like count');
  }

  return (
    <div>
      {/* ... */}
      <button onClick={handleClick}>Like</button>
    </div>
  );
}
```

with state,状态更新

```jsx
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes,setLikes]=React.useState(0);
  function handleClick(){
    setLikes(likes+1);
  }
  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handlerClick}>Like({likes})</button>
    </div>
  );
}
```

## ref

- <https://nextjs.org/learn/foundations/from-javascript-to-react/building-ui-with-components>
- <https://nextjs.org/learn/foundations/from-javascript-to-react/continue-learning-react>
