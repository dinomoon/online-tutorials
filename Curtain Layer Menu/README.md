# Responsive Curtain Layer menu

[영상 링크](https://www.youtube.com/watch?v=IeXHGfTTgjM)

## 알게된 것

- css에서의 변수 사용

```html
<span style="--i: 0"></span>
<span style="--i: 1"></span>
<span style="--i: 2"></span>
<span style="--i: 3"></span>
```

```css
.navigation span {
  position: absolute;
  top: -100%;
  left: calc(25% * var(--i));
  width: 25%;
  height: 100%;
  background: #de0611;
  border: 1px solid rgba(0, 0, 0, 0.25);
  transition: 0.25s;
  transition-delay: calc(0.25s * var(--i));
}
```
