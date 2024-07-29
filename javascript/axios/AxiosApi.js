import axios from "axios";
import { Message, MessageBox } from "element-ui";
import db from "@/utils/localstorage";
import JSONbig from "json-bigint";
// import store from "@/store";
// import { Base64 } from 'js-base64';

// 默认配置  转换响应数据
axios.defaults.transformResponse = [
  data => {
    // 对data（后台的原始数据）进行转换
    return JSONbig.parse(data);
  }
];

// 请求添加条件，如token
axios.interceptors.request.use(
  config => {
    const isToken =
      config.headers["X-isToken"] === false
        ? config.headers["X-isToken"]
        : true;
    const token = db.get("TOKEN", "");
    if (token && isToken) {
      config.headers.token = token;
    }

    const isTenant =
      config.headers["X-isTenant"] === false
        ? config.headers["X-isTenant"]
        : true;
    if (isTenant && process.env.VUE_APP_IS_MULTI_TENANT_TYPE !== "NONE") {
      config.headers.tenant = db.get("TENANT", "");
    }

    // const clientId = process.env.VUE_APP_CLIENT_ID;
    // const clientSecret = process.env.VUE_APP_CLIENT_SECRET;
    // config.headers['Authorization'] = `Basic ${Base64.encode(`${clientId}:${clientSecret}`)}`;
    // config.headers[
    //   "Authorization"
    // ] = `Basic eXp0ZWNoX3dlYjp5enRlY2hfd2ViX3NlY3JldA==`;
    // config.headers["token"] = `413268f64fde7385feae426b17c5e700`;

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 接口返回处理
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

function handleError(error, reject, opts) {
  // debugger // 方便network TODO: 20210910 开发暂时停止
  let isAlert = opts.custom ? opts.custom["isAlert"] : true;
  isAlert = isAlert === undefined ? true : isAlert;
  if (isAlert) {
    if (error.code === "ECONNABORTED") {
      Message({
        message: "请求超时"
      });
    } else if (error.response && error.response.data) {
      const resData = error.response.data;
      if (error.response.status === 403 || error.response.status === 401) {
        MessageBox.alert(resData.msg || "登录已失效，请重新登录", "提醒", {
          confirmButtonText: "确定",
          callback: () => {
            db.clear();
            window.location.hash = "/login";
          }
        });
      } else if (error.response.status === 500) {
        Message({
          message: error.response.data
        });
      } else {
        const resData = error.response.data;
        if (
          resData.code === 40000 ||
          resData.code === 40001 ||
          resData.code === 40002 ||
          resData.code === 40003 ||
          resData.code === 40005 ||
          resData.code === 40006 ||
          resData.code === 40008 ||
          resData.code === 40009
        ) {
          MessageBox.alert(resData.msg || resData.message, "提醒", {
            confirmButtonText: "确定",
            callback: () => {
              db.clear();
              window.location.hash = "/login";
            }
          });
        } else if (resData.msg) {
          Message({
            message: resData.msg
          });
        } else if (resData.message) {
          Message({
            message: resData.message
          });
        }
      }
    } else if (error.message) {
      Message({
        message: error.message
      });
    }
  }
  reject(error);
}

function handleSuccess(res, resolve, opts) {
  let isAlert = opts.custom ? opts.custom["isAlert"] : true;
  isAlert = isAlert === undefined ? true : isAlert;
  const resData = res.data;
  if (resData.code !== 0) {
    // 未登录
    if (
      resData.code === 40000 ||
      resData.code === 40001 ||
      resData.code === 40002 ||
      resData.code === 40003 ||
      resData.code === 40005 ||
      resData.code === 40006 ||
      resData.code === 40008 ||
      resData.code === 401
    ) {
      // debugger;
      MessageBox.alert(resData.msg, "提醒", {
        confirmButtonText: "确定",
        callback: () => {
          window.location.hash = "/login";
        }
      });
    } else {
      if (isAlert && resData.msg && resData.msg !== "没有权限，请联系管理员授权") {
        Message.error(resData.msg);
      }
    }
  }
  resolve(res);
}

let BASE_URL = "";
if (process.env.NODE_ENV === "development") {
  // 开发环境，从配置文件读取
  // 默认取线上，如果连接后端本地，前往 .env.development 文件读取对应字段
  BASE_URL = process.env.VUE_APP_BASE_URL_ONLINE;
} else {
  // 其他环境，动态域名
  BASE_URL = window.location.origin + window.location.pathname;
}

// http请求
const httpServer = opts => {
  // 公共参数
  const publicParams = {
    ts: Date.now()
  };

  // http默认配置
  const method = opts.method.toUpperCase();
  // baseURL
  // 开发环境： /api                 // 开发环境在 vue.config.js 中有 devServer.proxy 代理
  // 生产环境： http://IP:PORT/api   // 生产环境中 代理失效， 故需要配置绝对路径
  const httpDefaultOpts = {
    method,
    // 远哥本地
    baseURL: opts.useMock ? 'http://121.89.192.156/mock/173' : BASE_URL,
    url: opts.url,
    responseType: opts.responseType || "",
    timeout: (opts.custom && opts.custom["timeout"]) || 30000
  };
  if (opts["meta"]) {
    httpDefaultOpts.headers = opts["meta"];
  }
  if(opts['headers']){
    httpDefaultOpts.headers = {
      'Content-Type': opts['headers']
    }
  }
  const dataRequest = ["PUT", "POST", "DELETE", "PATCH"];
  if (dataRequest.includes(method)) {
    httpDefaultOpts.data = opts.data || {};
    httpDefaultOpts.params = publicParams;
  } else {
    httpDefaultOpts.params = {
      ...publicParams,
      ...(opts.data || {})
    };
  }

  // formData转换
  if (opts.formData) {
    httpDefaultOpts.transformRequest = [
      data => {
        const formData = new FormData();
        if (data) {
          Object.entries(data).forEach(item => {
            formData.append(item[0], item[1]);
          });
        }
        return formData;
      }
    ];
  }

  const promise = new Promise((resolve, reject) => {
    axios(httpDefaultOpts)
      .then(response => {
        handleSuccess(response, resolve, opts);
      })
      .catch(error => {
        handleError(error, reject, opts);
      });
  });
  return promise;
};

export default httpServer;

export { BASE_URL };
