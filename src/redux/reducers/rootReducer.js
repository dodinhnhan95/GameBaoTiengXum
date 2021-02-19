// khai báo tất cả các state của ứng dụng
import { combineReducers } from "redux";
import BaiTapOneTuTiReducer from "./BaiTapOneTuTiReducers";

// state tổng hợp của ứng dụng

export const rootReducer = combineReducers({
  // nơi khai báo các state theo nghiệp vụ
  stateBaiTapOneTuTi: BaiTapOneTuTiReducer,
});
