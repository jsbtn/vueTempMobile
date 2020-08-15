
import request from '@/utils/request';

// 新增班访对象
export function visitor(data) {
  return request({
    url: '/saoma/common/visitor',
    method: 'POST',
    contentType:"application/json",
    message: "提交中",
    data
  });
}

// 查询老师
export function selectEmp(params) {
  return request({
    url: '/saoma/common/selectEmp',
    method: 'GET',
    params
  });
}
