# life_mirror

存放可分享的「行程 + 地图」静态站点，由 Cursor 的 `trip-itinerary-map-planner` Skill 生成。

**在线入口：** https://luoshuifan.github.io/life_mirror/

## 目录结构

```
life_mirror/
├── index.html          # 根首页：按日期归档所有行程，读取 data/trips.js 渲染
├── data/
│   └── trips.js        # 行程清单（唯一需要手动维护的数据文件）
├── .nojekyll            # 关闭 GitHub Pages 的 Jekyll 处理，保证静态文件原样served
└── <行程名>/             # 每次生成的行程站点，各自一个文件夹（index.html + data/）
```

## 新增一次行程怎么做

1. 在 Cursor 里用 `trip-itinerary-map-planner` Skill 生成 `<行程名>/` 文件夹（`index.html` + `data/places.js` / `itinerary.js` / `transit.js` / `hotels.js`），复制进本仓库根目录。
2. 打开 `data/trips.js`，在数组里加一条记录：

   ```js
   {
     "id": "唯一标识",
     "title": "行程标题",
     "start": "2027-01-23",   // YYYY-MM-DD
     "end": "2027-02-02",
     "route": "深圳 → ... → 深圳",
     "summary": "10 晚 11 天 · 双人",
     "tags": ["标签1", "标签2"],
     "href": "<行程名>/index.html"
   }
   ```

3. 提交并推送：

   ```bash
   git add -A
   git commit -m "add: <行程名>"
   git push origin main
   ```

首页会**自动**根据 `start`/`end` 和当天日期算出「进行中 / 即将出发 / 已结束」分组和倒计时，不需要手动维护状态。

只有日期还没定的纯草稿行程，才需要手动加 `"status": "draft"` 并省略 `href`（会显示成不可点击的规划中卡片）。
