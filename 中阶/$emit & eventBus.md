## $emit.md

### 与父组件通信
![通信](https://upload-images.jianshu.io/upload_images/13341631-cb2bbed4c7ccb92d.png!web?imageMogr2/auto-orient/strip%7CimageView2/2/w/539/format/webp)

1. 父组件可以使用 props 把数据传给子组件。
2. 子组件可以使用 $emit 触发父组件的自定义事件:从礼节上而言，更像是设置了一个自定义名称的回调函数，父组件监听这个回调函数来执行对应的操作

- vm.$emit( event, arg ) //触发当前实例上的事件
- vm.$on( event, fn );//监听event事件后运行 fn； 

例如：子组件：
```
<template>
  <div class="train-city">
    <h3>父组件传给子组件的toCity:{{sendData}}</h3> 
    <br/><button @click='select(`大连`)'>点击此处将‘大连’发射给父组件</button>
  </div>
</template>
<script>
  export default {
    name:'trainCity',
    props:['sendData'], // 用来接收父组件传给子组件的数据
    methods:{
      select(val) {
        let data = {
          cityname: val
        };
        this.$emit('showCityName',data);//select事件触发后，自动触发showCityName事件
      }
    }
  }
</script>
```
父组件
```
<template>
    <div>
        <div>父组件的toCity{{toCity}}</div>
        <train-city @showCityName="updateCity" :sendData="toCity"></train-city>
    </div>
<template>
<script>
  import TrainCity from "./train-city";
  export default {
    name:'index',
    components: {TrainCity},
    data () {
      return {
        toCity:"北京"
      }
    },
    methods:{
      updateCity(data){//触发子组件城市选择-选择城市的事件
        this.toCity = data.cityname;//改变了父组件的值
        console.log('toCity:'+this.toCity)
      }
    }
  }
</script>
```

## EventBus
> https://www.jianshu.com/p/4fa3bf211785
### 兄弟组件间通信

