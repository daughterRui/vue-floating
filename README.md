# vue-floating
一个基于vue的浮窗组件,可在屏幕内自由拖拽，拖拽后的位置即可不变，也可在移动过程中手指释放浮窗横向贴边。



### Use Setup
```
npm i vue-floating -S
```

### Use in SPA
```
<vue-floating
  isNearBorder
  @tap="floatingTap"
  :rightMargin="0" 
  :bottomMargin="20"
>
  <div class="floatingView"></div>
</vue-floating>
```
### Attributes
[查看api文档](https://www.yuque.com/xiaotianyi/lkig5m/fnvr8b)

