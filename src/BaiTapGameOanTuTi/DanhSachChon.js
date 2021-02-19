import React, { Component } from "react";
import KetQuaTroChoi from "./KetQuaTroChoi";
import style from "./BaiTapOanTuTi.module.css";
import { connect } from "react-redux";
class DanhSachChon extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          paddingTop: "20px",
          margin: "auto 0px",
          justifyContent: "space-around",
        }}
      >
        <div>
          <div
            style={{
              paddingLeft: "60px",
            }}
          >
            <div
              className={`${style.speechbubble}`}
              style={{
                textAlign: "center",
                width: "170px",
                height: "145px",
                paddingTop: "4px",
              }}
            >
              <div
                style={{
                  width: "160px",
                  height: "135px",
                  padding: "30px 39px",
                  margin: "1px 5px",
                  backgroundColor: "white",
                }}
              >
                <img
                  src={this.props.banChon}
                  style={{
                    width: "80px",
                    height: "80px",
                    padding: "10px 10px",
                  }}
                />
              </div>
            </div>
            <img
              src="./img/player.png"
              className=""
              style={{ width: "120px", height: "180px" }}
              alt="model"
            />
          </div>
          {/* bảng chọn bao búa kéo  */}
          <div
            style={{
              display: "flex",
              margin: "0 auto",
              justifyContent: "space-around",
            }}
          >
            {this.props.mangChon.map((Chon, index) => {
              return (
                <img
                  onClick={() => this.props.PlayerChon(Chon.hinhAnh, Chon.chon)}
                  className={`${style.bangChon}`}
                  key={index}
                  src={Chon.hinhAnh}
                  style={{
                    width: 60,
                    backgroundColor: "white",
                    margin: "0px 10px",
                  }}
                />
              );
            })}
          </div>
        </div>

        <div>
          <KetQuaTroChoi />
        </div>
        <div>
          <div
            className={`${style.speechbubble}`}
            style={{
              textAlign: "center",
              width: "170px",
              height: "145px",
              paddingTop: "4px",
            }}
          >
            <div
              style={{
                width: "160px",
                height: "135px",
                padding: "30px 39px",
                margin: "1px 5px",
                backgroundColor: "white",
              }}
            >
              <img
                src={this.props.ComputerChooose}
                style={{
                  width: "80px",
                  height: "80px",
                  padding: "10px 10px",
                }}
              />
            </div>
          </div>
          <img
            src="./img/playerComputer.png"
            className=""
            style={{ width: "120px", height: "180px" }}
            alt="model"
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangChon: state.stateBaiTapOneTuTi.mangChon,
    banChon: state.stateBaiTapOneTuTi.banChon,
    ComputerChooose: state.stateBaiTapOneTuTi.ComputerChooose,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    PlayerChon: (Choose, ChooseBaoBuaKeo) => {
      const action = {
        type: "LUA_CHON",
        Choose,
        ChooseBaoBuaKeo,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachChon);
