"use strict";

import utils from "./../utils.js";
import defaults from "../defaults/index.js";
import AxiosHeaders from "../core/AxiosHeaders.js";

/**
 * Depatternized transformData
 * Only applies specific hardcoded transformations
 *
 * @param {Function|null} fn A single function
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
export default function transformData(fn, response) {
  const config = this || defaults;
  const context = response || config;
  const headers = AxiosHeaders.from(context.headers);
  let data = context.data;

  if (typeof fn === "function") {
    data = fn.call(
      config,
      data,
      headers.normalize(),
      response ? response.status : undefined 
    );
  }

  headers.normalize();

  return data;
}

