---
sidebar_position: 1
title: Fix：Dell笔记本电脑开机时连续五声报警音
tag: [Dell笔记本电脑, 五声报警音]
toc_max_heading_level: 4
last_update:
  date: 11/01/2022
  author: 张年强
---

## 问题定义：

1. Dell笔记本电脑开机时连续五声报警音，实时时钟电源故障，即CMOS电池故障
2. 环境描述：Dell Inspiron 15R N5110

## 处理过程：检查主板电池

1. 拆开笔记本电脑，露出主板电池即可
2. 测量电池电压，不用拆除电池，万用表打到直流24V档位，红表笔对电池露出面，黑表笔对主板地
3. 如果无电压，更换电池，注意：需要重新设置BIOS
4. 如果有电压且电压大于2V，转动电池

