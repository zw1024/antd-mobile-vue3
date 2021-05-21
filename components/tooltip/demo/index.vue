<template>
  <div class="demo">
    <div class="top">
      <tooltip placement="top-left" v-model="visible">
        <template v-slot:outlet> <div class="test">top left</div></template>
        <template v-slot:tooltip> <div>this is top left tip</div></template>
      </tooltip>
      <tooltip placement="top" v-model="visible">
        <template v-slot:outlet><div class="test">top</div></template>
        <template v-slot:tooltip><div>this is top tip</div></template>
      </tooltip>
      <tooltip placement="top-right" v-model="visible">
        <template v-slot:outlet><div class="test">top right</div></template>
        <template v-slot:tooltip><div>this is top right tip</div></template>
      </tooltip>
    </div>

    <div class="left">
      <tooltip placement="left-top" v-model="visible">
        <template v-slot:outlet><div class="test">left top</div></template>
        <template v-slot:tooltip
          ><div>
            <div>this is left top tip</div>
            <div>line 2</div>
            <div>line 3</div>
          </div>
        </template>
      </tooltip>
      <tooltip placement="left" v-model="visible">
        <template v-slot:outlet><div class="test">left</div></template>
        <template v-slot:tooltip>
          <div>
            <div>this is left tip</div>
            <div>line 2</div>
            <div>line 3</div>
          </div>
        </template>
      </tooltip>
      <tooltip placement="left-bottom" v-model="visible">
        <template v-slot:outlet><div class="test">left bottom</div></template>
        <template v-slot:tooltip
          ><div>
            <div>this is left bottom tip</div>
            <div>line 2</div>
            <div>line 3</div>
          </div>
        </template>
      </tooltip>
    </div>

    <div class="right">
      <tooltip placement="right-top" v-model="visible">
        <template v-slot:outlet><div class="test">right top</div></template>
        <template v-slot:tooltip
          ><div>
            <div>this is right top tip</div>
            <div>line 2</div>
            <div>line 3</div>
          </div>
        </template>
      </tooltip>
      <tooltip placement="right" v-model="visible">
        <template v-slot:outlet><div class="test">right</div></template>
        <template v-slot:tooltip
          ><div>
            <div>this is right tip</div>
            <div>line 2</div>
            <div>line 3</div>
          </div>
        </template>
      </tooltip>
      <tooltip placement="right-bottom" v-model="visible">
        <template v-slot:outlet><div class="test">right bottom</div></template>
        <template v-slot:tooltip
          ><div>
            <div>this is right bottom tip</div>
            <div>line 2</div>
            <div>line 3</div>
          </div>
        </template>
      </tooltip>
    </div>

    <div class="bottom">
      <tooltip placement="bottom-left" v-model="visible">
        <template v-slot:outlet><div class="test">bottom left</div></template>
        <template v-slot:tooltip> <div>this is bottom left tip</div></template>
      </tooltip>
      <tooltip placement="bottom" v-model="visible">
        <template v-slot:outlet> <div class="test">bottom</div></template>
        <template v-slot:tooltip><div>this is bottom tip</div></template>
      </tooltip>
      <tooltip placement="bottom-right" v-model="visible">
        <template v-slot:outlet><div class="test">bottom right</div></template>
        <template v-slot:tooltip
          ><div>
            <div>this is bottom right tip</div>
            <div>next line</div>
          </div>
        </template>
      </tooltip>
    </div>

    <div class="confirm">
      <tooltip placement="bottom-left" mode="click" v-model="visible1">
        <template v-slot:outlet><div class="test">Remove</div> </template>
        <template v-slot:tooltip>
          <div>
            <h3>Are your sure?</h3>
            <div class="btns">
              <button class="yes" @click="handleYes">Yes</button>
              <button class="no" @click="handleNo">No</button>
            </div>
          </div>
        </template>
      </tooltip>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      visible1: false
    }
  },
  methods: {
    handleYes() {
      alert('Yes')
    },
    handleNo() {
      alert('No')
      this.visible1 = false
    }
  }
}
</script>

<style>
.demo {
  width: 600px;
  margin: 100px auto;
}
.demo > div {
  text-align: center;
}
.demo > .top > .hsy-tooltip,
.demo > .bottom > .hsy-tooltip {
  display: inline-block;
}
.test {
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #ddd;
}
div.top {
  margin-bottom: 15px;
}
div.left {
  float: left;
  margin-left: 100px;
}
div.right {
  float: right;
}
div.bottom {
  clear: both;
}
div.right .test,
div.left .test {
  height: 50px;
  line-height: 50px;
  margin-bottom: 30px;
}
div.top .test,
div.bottom .test {
  height: 50px;
  line-height: 50px;
}
div.top .hsy-tooltip,
div.bottom .hsy-tooltip {
  width: 160px;
  text-align: center;
}
.hsy-tooltip .tooltip,
.hsy-tooltip .tooltip {
  text-align: left;
}
div.top .hsy-tooltip .outlet,
div.bottom .hsy-tooltip .outlet {
  display: inline-block;
}
div.confirm {
  margin-top: 50px;
}
div.confirm button {
  border: 0;
  border-radius: 3px;
  padding: 8px 10px;
  cursor: pointer;
  outline: none;
}
div.confirm .test,
div.confirm .no {
  color: #fff;
  background-color: #f84f47;
}
div.confirm .yes {
  color: #fff;
  background-color: #0097ff;
}
div.confirm h3 {
  margin: 0;
  font-size: 14px;
  font-weight: normal;
  padding: 10px 0;
}
div.confirm .btns {
  padding-bottom: 5px;
  overflow: hidden;
}
div.confirm .btns .yes {
  float: left;
}
div.confirm .btns .no {
  float: right;
}
</style>
