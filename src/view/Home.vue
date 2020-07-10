<template>
    <div id="menu">
        <!-- 导航栏 -->
        <header class="header">
                <!-- 顶端文字导航 -->
                <div class="navigation">
                    <ul class="navigationLeft">
                        <li>
                            <a href="#">
                                <p>门户首页</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <p>资源中心</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <p>专题应用</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <p>地图API</p>
                            </a>
                        </li>
                    </ul>
                    <ul class="navigationRight">
                        <li>
                            <a href="#">
                                <p>门户管理员</p>
                            </a>
                        </li>
                        <li>
                            <p class="division">|</p>
                        </li>
                        <li>
                            <a href="#">
                                <p>退出</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="logo">
                    <img src="../assets/image/logo.png" alt="">
                </div>
        </header>
        <!-- 菜单栏 -->
        <div class="menu">
            <div class="menuSearch"  @click='searchMenuClick'>
                <img src="../assets/image/search.png">
                <p>搜索</p>
            </div>
            <div class="menuRoute"  @click='routeMenuClick'>
                <img src="../assets/image/route.png">
                <p>路线</p>
            </div>
            <div class="menuService" @click='serviceMenuClick'>
                <img src="../assets/image/service.png">
                <p>服务</p>
            </div>
        </div>
        <!-- 弹出的菜单栏 -->
        <div class="menulist" :style="{left:menu1}" >
            <div class="box">
                <ul>
                    <li >
                        <img src="../assets/image/餐饮.png" alt="">
                        <p>餐饮</p>
                    </li>
                    <li >
                        <img src="../assets/image/购物.png" alt="">
                        <p>购物</p>
                    </li>
                    <li >
                        <img src="../assets/image/住宿.png" alt="">
                        <p>住宿</p>
                    </li>
                    <li >
                        <img src="../assets/image/出行.png" alt="">
                        <p>出行</p>
                    </li>
                    <li >
                        <img src="../assets/image/娱乐.png" alt="">
                        <p>娱乐</p>
                    </li>
                    <li >
                        <img src="../assets/image/金融.png" alt="">
                        <p>金融</p>
                    </li>
                    <li >
                        <img src="../assets/image/教育.png" alt="">
                        <p>教育</p>
                    </li>
                    <li >
                        <img src="../assets/image/医疗.png" alt="">
                        <p>医疗</p>
                    </li>
                    <li >
                        <img src="../assets/image/旅游.png" alt="">
                        <p>旅游</p>
                    </li>
                    <li >
                        <img src="../assets/image/政府.png" alt="">
                        <p>政府</p>
                    </li>
                </ul>
              </div>

            <div class="back" @click="onBack">
                <img src="../assets/image/菜单返回.png" alt="">
            </div>
            <div class="copyright">
                <p>陈宇航</p>
            </div>
            <div class="tip">
                <p class="tip1" >帮助</p>
                <div class="division2"></div>
                <p class="tip2">意见反馈</p>
            </div>
        </div>
        <!-- 弹出的路线栏 -->
        <div class="menulist" :style="{left:menu2}" >
            <div class="routeMenuTitle">
                <img src="../assets/image/驾车.png" alt="">
                <span>驾车</span>
            </div>
            <div class="dividingLine1"></div>
            <div >
                <img class="change-btn" src="../assets/image/交换.png" alt="">
                <img class="start" src="../assets/image/绿点.png">
                <img class="end" src="../assets/image/黄点.png">
                <input type="text" class="start-place" placeholder="请输入出发地">
                <input type="text" class="end-place" placeholder="请输入目的地">
                <button class="route-search">搜索</button>
            </div>
            <div class="dividingLine2"></div>
            <div class="user-select">
                <input type="radio" name="choose">时间最短
                <input type="radio" name="choose">距离最短
                <input type="checkbox">不走高速
            </div>
            <div class="dividingLine3"></div>
            <div class="back" @click="onBack">
                <img src="../assets/image/菜单返回.png" alt="">
            </div>
            <div class="copyright">
                <p>陈宇航</p>
            </div>
            <div class="tip">
                <p class="tip1">帮助</p>
                <div class="division2"></div>
                <p class="tip2">意见反馈</p>
            </div>
        </div>
        <!-- 弹出的服务栏 -->
        <div class="menulist" :style="{left:menu3}" ref="serviceList">
            <div class="service-list-title">
                <ul>
                    <li class="service-list1">
                        <img src="../assets/image/服务列表.png" alt="">
                        <p>服务列表</p>
                    </li>
                    <li class="service-list2">
                        <img src="../assets/image/图层管理.png" alt="">
                        <p>图层管理</p>
                    </li>
                </ul>
            </div>
            <div class="dividingLine1"></div>
            <div class="layer-list">
                <ul>
                    <li>
                        <p class="layer-name">中国</p>
                        <input type="checkbox" class="layer-switch"  v-model="show">
                        <p class="layer-transparency">透明度：</p>
                        <div class="block">
                            <el-slider v-model="value" ></el-slider>
                        </div>
                    </li>
                    <li>
                        <p class="layer-name">妖怪</p>
                        <input type="checkbox" class="layer-switch"  v-model="show2">
                        <p class="layer-transparency">透明度：</p>
                        <div class="block">
                            <el-slider v-model="value2" ></el-slider>
                        </div>
                    </li>
                </ul>

            </div>
            <div class="dividingLine2"></div>
            <div class="back" @click="onBack">
                <img src="../assets/image/菜单返回.png" alt="">
            </div>
            <div class="copyright">
                <p>陈宇航</p>
            </div>
            <div class="tip">
                <p class="tip1">帮助</p>
                <div class="division2"></div>
                <p class="tip2">意见反馈</p>
            </div>
        </div>
        <div class="map">
          <mapcontainer ref="mapset"/>
        </div>
    </div>
</template>

<script>
import mapcontainer from '../view/mapcontainer'
export default {
  components:{
    mapcontainer
  },
    data() {
      return {
        menu1: '-280px',
        menu2: '-280px',
        menu3: '-280px',
        value:0,
        value2:0,
        show:true,
	      show2:true,
      }
  },
  methods:{
    searchMenuClick:function(){
        this.menu1 = '50px',
        this.menu2 = '-280px',
        this.menu3 = '-280px'
      },
      routeMenuClick:function(){
        this.menu2 = '50px',
        this.menu1 = '-280px',
        this.menu3 = '-280px'
      },
      serviceMenuClick:function(){
        this.menu3 = '50px',
        this.menu2 = '-280px',
        this.menu1 = '-280px'
      },
      onBack:function(){
        this.menu3 = '-280px',
        this.menu2 = '-280px',
        this.menu1 = '-280px'
      },
  },
  watch:{
    show:function(){
      this.$refs.mapset.inputlayer1(this.show)
    },
    show2:function(){
      this.$refs.mapset.inputlayer2(this.show2)
    },
    value:function(){
      this.$refs.mapset.setlayer(this.value)
    },
    value2:function(){
      this.$refs.mapset.setlayer2(this.value2)
    }


  }
}
</script>

<style>

</style>
