import React, { Component } from "react";
import DanhSachChon from "./DanhSachChon";
import KetQuaTroChoi from "./KetQuaTroChoi";
import style from "./BaiTapOanTuTi.module.css";
export default class BaiTapOanTuTi extends Component {
  render() {
    return (
      <div
        className={`${style.fontGameOanTuTi}`}
        style={{
          backgroundImage: "url(./img/bgGame.png)",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <DanhSachChon />
      </div>
    );
  }
}
