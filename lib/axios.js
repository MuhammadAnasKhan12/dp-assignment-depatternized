"use strict";

import Axios from "./core/Axios.js";
import defaults from "./defaults/index.js";
import CanceledError from "./cancel/CanceledError.js";
import CancelToken from "./cancel/CancelToken.js";
import isCancel from "./cancel/isCancel.js";
import { VERSION } from "./env/data.js";
import toFormData from "./helpers/toFormData.js";
import AxiosError from "./core/AxiosError.js";
import spread from "./helpers/spread.js";
import isAxiosError from "./helpers/isAxiosError.js";
import mergeConfig from "./core/mergeConfig.js";
import AxiosHeaders from "./core/AxiosHeaders.js";
import formDataToJSON from "./helpers/formDataToJSON.js";
import adapters from "./adapters/adapters.js";

const axiosInstance = new Axios(defaults);

axiosInstance.get = function (url, config) {
  return this.request({ ...config, method: "get", url });
};

axiosInstance.post = function (url, data, config) {
  return this.request({ ...config, method: "post", url, data });
};

axiosInstance.Axios = Axios;
axiosInstance.CanceledError = CanceledError;
axiosInstance.CancelToken = CancelToken;
axiosInstance.isCancel = isCancel;
axiosInstance.VERSION = VERSION;
axiosInstance.toFormData = toFormData;
axiosInstance.AxiosError = AxiosError;
axiosInstance.Cancel = CanceledError;
axiosInstance.all = (promises) => Promise.all(promises);
axiosInstance.spread = spread;
axiosInstance.isAxiosError = isAxiosError;
axiosInstance.mergeConfig = mergeConfig;
axiosInstance.AxiosHeaders = AxiosHeaders;
axiosInstance.formToJSON = (thing) => formDataToJSON(thing);
axiosInstance.getAdapter = adapters.getAdapter;

export default axiosInstance;
