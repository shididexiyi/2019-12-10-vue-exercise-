<template>
  <div class="hello">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="4">
            <h3>Title</h3>
          </el-col>
          <el-col :span="20">
            <el-menu default-active="1" mode="horizontal">
              <el-submenu index="2">
                <template slot="template">个人中心</template>
                <el-menu-item index="2-1">个人信息</el-menu-item>
                <el-menu-item index="2-2">订单信息</el-menu-item>
                <el-menu-item index="2-3">退出登录</el-menu-item>
              </el-submenu>
              <el-menu-item index="1">切换版本</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="20%"></el-aside>
        <el-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'HostWeb'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 100%;
}
</style>
