import Cookies from 'js-cookie';
import { routes } from '@/router';
/**
 * @设置rem
 * 100px 750 
 */
export const setRem = () => {
  (function (x, min, max) {
    min = min || 320;
    var docEl = document.documentElement,
      clientWidth = null,
      countFun = function () {
        clientWidth = Math.max(docEl.clientWidth, min);
        clientWidth = max ? Math.min(clientWidth, max) : clientWidth;
        if (clientWidth) {
          docEl.style.fontSize = 100 * (clientWidth / x) + 'px';
        }
      };
    window.addEventListener('resize', countFun, false);
    countFun();
  })(750, 320, 750)
}

/**
 * @param {Object} obj
 * @returns 
 */
export const requestData = (obj) => {
  const params = new URLSearchParams()
  for (const v in obj) {
    if (obj['' + v] !== '' && obj['' + v] !== undefined && obj['' + v] !== null) {
      params.append('' + v, obj['' + v])
    }
  }
  return params
}


/**
 * 跳转路由
 * @returns 
 */
export const toNumberOnePath = () => {
  let arr = routes;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].path != '/' && arr[i].path != '/404') {
      return arr[i].path;
    }
  }
}

/**
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        time = parseInt(time)
      } else {
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

/**
 * 获取参数
 * @returns 
 */
export const getLoginParams = () => {
  return {
    uId: process.env.NODE_ENV == "production" ? Cookies.get('uId') : process.env.VUE_APP_USER_UID,
    userName: process.env.NODE_ENV == "production" ? Cookies.get('userName') : process.env.VUE_APP_USERNAME,
    token: process.env.NODE_ENV == "production" ? Cookies.get('token') : process.env.VUE_APP_TOKEN,
  };
}

/**
 * @param {Object} obj
 * @returns {Object}
 */
 export const verify = (obj) => {
  let relues = {
    email:{
      rule: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
      msg:"账号格式不正确"
    },
    password:{
      rule:/^(\w){6,20}$/,
      msg:"密码格式错误"
    }
  }
  let res = {
    code:0,
    msg:''
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const element = obj[key];
      if (!relues[key].rule.test(obj[key])) {
        res.code = -1
        res.msg = relues[key].msg
        return res
      }
    }
  }
}