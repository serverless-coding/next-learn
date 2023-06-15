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

## ref

- <https://nextjs.org/learn/foundations/from-javascript-to-react/building-ui-with-components>
