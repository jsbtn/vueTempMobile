/** 
 * @resTost ：操作提示 ? Boolean || String
 * @message ：loading提示 ? String
 */
import request from '@/utils/request';

// 静默授权登录
export function login(data) {
  return request({
    url: '/api/authorization',
    method: 'post',
    message: "登录中",
    data
  });
}

// 账号登录
export function emailLogin(data) {
  return request({
    url: '/api/login',
    method: 'post',
    message: "登录中",
    data
  });
}

// 文章点赞接口
export function addThumbs(data) {
  return request({
    url: '/api/addThumbs/' + data.id,
    method: 'post',
    resTost: "点赞成功",
  });
}

// 文章点赞接口
export function cancelThumbs(data) {
  return request({
    url: '/api/cancelThumbs/' + data.id,
    method: 'post',
    resTost: "取消点赞",
  });
}

// 新增用户关注
export function addFollow(data) {
  return request({
    url: '/api/addFollow/' + data.id,
    method: 'post',
    resTost: "关注成功",
  });
}

// 取消关注
export function delFollow(data) {
  return request({
    url: '/api/delFollow/' + data.id,
    method: 'post',
    resTost: "取消关注",
  });
}