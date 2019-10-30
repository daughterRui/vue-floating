<!--
 * @Description: 浮窗
 * @Author: xty
 * @Date: 2019-05-13 19:05:54
 * @LastEditTime: 2019-08-13 11:09:29
 * @LastEditors: Please set LastEditors
 * @reservation: v-pressMove="{methods: pressMove, arg: {index:5,item:'pressMove'}}" //是否给浮标添加move
 * @tap: v-tap="{methods: tap, arg: {index:1,item:'tap'}}"
 -->

<template>
  <div
  :style="[floatStyle, rightStyle, bottomStyle]"
  class="floating"
  v-pressMove="{methods: pressMove}"
  ref="floating"
  v-tap="{methods: tap }"
  @touchend="touchend"
  >
  <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue';
import vueFinger from './vue-finger';

Vue.use(vueFinger);
export default {
  name: 'vue-floating',
  props: {
    // 是否需要贴边
    isNearBorder: {
      type: Boolean,
      default: false,
    },
    // content 距离下边的高度
    bottomMargin: {
      type: Number,
      default: 0,
    },
    // content 距离右边的长度
    rightMargin: {
      type: Number,
      default: 0,
    },
  },
  components: {

  },
  data() {
    return {
      left: 0,
      top: 0,
      setLeft: 0,
      setTop: 0,
      setRight: 0,
      setBottom: 0,
    };
  },
  computed: {
    floatStyle() {
      const self = this;
      const tempObj = {
        transform: `translate3d(${self.left}px, ${self.top}px, 0)`,
      };
      return tempObj;
    },
    bottomStyle() {
      const self = this;
      const tempObj = {
        bottom: `${self.bottomMargin}px`,
      };
      return tempObj;
    },
    rightStyle() {
      const self = this;
      const tempObj = {
        right: `${self.rightMargin}px`,
      };
      return tempObj;
    },
  },
  methods: {
    pressMove(e) {
      const self = this;
      if ((self.left) < -(self.setLeft)) {
        self.left = -(self.setLeft);
        return;
      }
      if ((self.left - 1) > (self.setRight)) {
        self.left = self.setRight;
        return;
      }
      if ((self.top) < -(self.setTop)) {
        self.top = -(self.setTop);
        return;
      }
      if ((self.top - 1) > (self.setBottom)) {
        self.top = self.setBottom;
        return;
      }
      self.left += e.deltaX;
      self.top += e.deltaY;
    },
    tap() {
      this.$emit('tap');
    },
    touchend() {
      const self = this;
      const width = document.documentElement.clientWidth;
      if (self.isNearBorder) {
        if ((self.left + self.setLeft) < (width / 2)) {
          self.left = -(self.setLeft);
        } else {
          self.left = self.setRight;
        }
      }
    },
  },
  mounted() {
    const self = this;
    self.setLeft = self.$refs.floating.offsetLeft;
    self.setTop = self.$refs.floating.offsetTop;
    self.setRight = document.documentElement.clientWidth - self.$refs.floating.offsetWidth - self.setLeft;
    self.setBottom = document.documentElement.clientHeight - self.$refs.floating.offsetWidth - self.setTop;
  },
  created() {

  },
};
</script>

<style>
.floating{
  touch-action: none;
  position: fixed;
  z-index: 2000;
}
</style>
