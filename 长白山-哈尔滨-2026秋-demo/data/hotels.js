/* 坐标为镇/商圈中心附近的估算值（demo 用），实际预订前请以地图 App 现场定位为准 */
window.HOTELS = {
  "songjianghe": {
    "city": "松江河", "total": 6,
    "candidates": [
      {"name": "万达智选假日", "lat": 42.1810, "lon": 127.4780, "stars": 4, "kind": "hotel", "price": "¥488 起", "note": "国际连锁标准化，4.6 分 / 7000+ 点评"},
      {"name": "汉拿山温泉度假酒店", "lat": 42.1800, "lon": 127.4800, "stars": 4, "kind": "hotel", "price": "¥600–900", "note": "度假区内唯一温泉入户，落地当晚穿浴袍下楼就能泡"}
    ],
    "picks": ["万达智选假日", "汉拿山温泉度假酒店"]
  },
  "erdaobaihe": {
    "city": "二道白河", "total": 12,
    "candidates": [
      {"name": "金水鹤温泉国际酒店", "lat": 42.4280, "lon": 128.1180, "stars": 4, "kind": "hotel", "price": "¥350–500", "note": "含真温泉，口碑久踩坑少，适合连住 3 晚"},
      {"name": "云涧酒店", "lat": 42.4160, "lon": 128.1010, "stars": 4, "kind": "hotel", "price": "¥400–600", "note": "2025 年新开，步行 5 分钟到北坡集散中心，免费接站"}
    ],
    "picks": ["金水鹤温泉国际酒店", "云涧酒店"]
  },
  "harbin": {
    "city": "哈尔滨", "total": 8,
    "candidates": [
      {"name": "秋果酒店", "lat": 45.7730, "lon": 126.6200, "stars": 4, "kind": "hotel", "price": "¥250–400", "note": "4.8 分 / 2224 点评，近中央大街地铁站"},
      {"name": "哈布斯堡江景酒店", "lat": 45.7800, "lon": 126.6180, "stars": 4, "kind": "hotel", "price": "¥450–700", "note": "一线松花江景，4.8 分 / 1.7 万点评"}
    ],
    "picks": ["秋果酒店", "哈布斯堡江景酒店"]
  }
};
