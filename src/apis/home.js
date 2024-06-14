import httpInstance from '@/utils/http'

//获取Banner

export function getBannerAPI(){
  return httpInstance({
    url: '/home/banner'
  })
}


// 获取新鲜好物列表
export function findNewAPI(){
  return httpInstance({
    url: '/home/new'
  })
}

// 获取新鲜好物列表
export function findHotAPI(){
  return httpInstance({
    url: '/home/hot'
  })
}

// 获取产品列表
export function getGoodsAPI(){
  return httpInstance({
    url: '/home/goods'
  })
}
