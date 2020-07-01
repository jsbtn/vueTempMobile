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
