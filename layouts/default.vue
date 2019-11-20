<template>
  <ALayout>
    <ALayoutHeader :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
    </ALayoutHeader>

    <ALayoutContent :style="{ padding: '0 50px', marginTop: '64px' }">
      <ABreadcrumb :style="{ margin: '16px 0' }">
        <ABreadcrumbItem>Home</ABreadcrumbItem>
        <ABreadcrumbItem>List</ABreadcrumbItem>
        <ABreadcrumbItem>App</ABreadcrumbItem>
      </ABreadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
        <nuxt />
      </div>
    </ALayoutContent>

    <ALayoutFooter :style="{ textAlign: 'center' }">YE Design © 2019</ALayoutFooter>
  </ALayout>
</template>

<script>
import {
  Layout as ALayout,
  Breadcrumb as ABreadcrumb
} from 'ant-design-vue/lib'

export default {
  components: {
    ABreadcrumb,
    ALayout,
    ALayoutHeader: ALayout.Header,
    ALayoutContent: ALayout.Content,
    ALayoutFooter: ALayout.Footer,
    ABreadcrumbItem: ABreadcrumb.Item
  }
}
</script>
