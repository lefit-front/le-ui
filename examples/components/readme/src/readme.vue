<template>
  <section class="readme-page" v-if="component">
    <div class="readme-header">
      <h1>{{component.name}}</h1>
      <p>{{component.describe}}</p>
    </div>
    <div class="readme-content">
      <div class="readme-props" v-if="component.props && component.props.length > 0">
        <h3>Props</h3>
        <div v-for="(prop, index) in component.props">
          <h4>{{prop.name}}<strong v-if="prop.required">(必传)</strong></h4>
          <p>说明：{{prop.describe}}</p>
          <p>类型：<code class="readme-tag" v-for="tag in prop.type">{{tag}}</code></p>
          <p v-if="prop.option.length > 0">可选值：<ul><li v-for="value in prop.option">{{value.name}}<strong v-if="value.default">(默认)</strong>: {{value.describe}}</li></ul></p>
          <p v-if="prop.default !== ''">默认值：{{prop.default}}</p>
        </div>
      </div>
      <div class="readme-slot" v-if="component.slot && component.slot.length > 0">
        <h3>slot</h3>
        <div v-for="(slot, index) in component.slot">
          <h4>{{slot.name || '默认'}}</h4>
          <p>说明：{{slot.describe}}</p>
        </div>
      </div>
    </div>
    <!-- <table>
      <thead>
        <tr>
          <th align="left">左对齐</th>
          <th align="center">居中</th>
          <th align="right">右对齐</th>
        </tr>
      </thead>
      <tbody>
      <tr>
      <td align="left">col 3 is</td>
      <td align="center">some wordy text</td>
      <td align="right">$1600</td>
      </tr>
      <tr>
      <td align="left">col 2 is</td>
      <td align="center">centered</td>
      <td align="right">$12</td>
      </tr>
      <tr>
      <td align="left">zebra stripes</td>
      <td align="center">are neat</td>
      <td align="right">$1</td>
      </tr></tbody>
    </table> -->
  </section>
</template>

<script type="text/babel">
  import leConfig from '../../../../src/config'

  export default {
    name: 'components-list',

    props: {
      name: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        component: {}
      };
    },

    watch: {
      name (val) {
        console.log(val);
        this.getComponentConfig(this.name)
      }
    },

    methods: {
      getComponentConfig (name) {
        this.component = leConfig[name]
        console.log(name)
      }
    },

    mounted() {
      this.getComponentConfig(this.name)
    }
  };
</script>

<style lang="less" scoped>
@import "../readme.css";
.readme-tag {
  margin-right: 5px;
}
</style>
