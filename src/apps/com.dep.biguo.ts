import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dep.biguo',
  name: '自考笔果题库',
  groups: [
    {
      key: 2,
      name: '首页广告弹窗',
      activityIds: 'com.dep.biguo.dialog',
      rules:
        '[id="com.dep.biguo:id/imageView"] + [id="com.dep.biguo:id/closeView"]',
      snapshotUrls: 'https://i.gkd.li/i/12708756',
    },
    {
      key: 10,
      name: '请求定位权限弹窗',
      activityIds: 'com.dep.biguo.mvp.ui.activity.MainActivity',
      rules: '[text*="定位权限"] +2 [text="拒绝"]',
      snapshotUrls: 'https://i.gkd.li/i/12708770',
    },
  ],
});
