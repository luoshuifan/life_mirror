/*
维护说明：
- 新增一次行程时：① 用 trip-itinerary-map-planner Skill 生成 `<行程名>/` 文件夹（含 index.html + data/）
  ② 在下面数组里加一条记录 ③ git add -A && git commit && git push 即可，首页会自动重新排序/分组。
- status 不用手填：index.html 会根据 start/end 和今天的日期自动算出"即将出发/进行中/已结束"，
  只有还没排好日期、纯草稿阶段的行程才需要手动写 status:"draft" 并省略 href。
- tags 是可选的自由标签，用来在卡片上做小标签展示。
*/
window.TRIPS = [
  {
    "id": "changbaishan-harbin-2026",
    "title": "长白山秋色 + 哈尔滨收尾",
    "start": "2026-09-26",
    "end": "2026-10-04",
    "route": "深圳 → 沈阳（中转）→ 松江河（西坡）→ 二道白河（北坡）→ 哈尔滨 → 深圳",
    "summary": "8 天 7 晚 · 双人 · 轻松度假",
    "tags": ["天池", "温泉", "国庆前", "沈阳中转"],
    "href": "长白山-哈尔滨-2026秋-demo/index.html"
  }
];
