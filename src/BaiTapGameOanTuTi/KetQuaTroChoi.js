import React, { Component } from "react";
import { connect } from "react-redux";
class KetQuaTroChoi extends Component {
  render() {
    return (
      <div
        style={{
          width: "500px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "orange",
            fontSize: "50px",
          }}
        >
          I'm iron man, i love you 3000!!!
        </h1>
        <br />
        <p
          className="text-success"
          style={{
            fontSize: "50px",
            margin: "0",
          }}
        >
          Số bàn thắng :{" "}
          <span className="text-warning"> {this.props.soBanThang}</span>
        </p>
        <br />
        <p
          className="text-success"
          style={{
            color: "green",
            fontSize: "50px",
            margin: "0",
          }}
        >
          Số bàn chơi :{" "}
          <span className="text-warning"> {this.props.tongSoBanChoi}</span>
        </p>
        <br />
        <button
          onClick={() => {
            this.props.playGame();
          }}
          className="display-4 btn btn-success"
        >
          Play Game
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let n = 0;
      // setInterval là hàm thực thi liên tục theo thời gian quy định => thực thi cho đến khi ta cọi clearInterval
      let ranDomBaoBuaKeo = setInterval(() => {
        const action = {
          type: "RANDOM_BAO_BUA_KEO",
        };
        dispatch(action);
        n++;
        if (n == 10) {
          clearInterval(ranDomBaoBuaKeo);
          //   // xử lý kết quả
          const actionXLKQ = {
            type: "END_GAME",
          };
          dispatch(actionXLKQ);
        }
      }, 50);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    banChon: state.stateBaiTapOneTuTi.banChon,
    soBanThang: state.stateBaiTapOneTuTi.soBanThang,
    tongSoBanChoi: state.stateBaiTapOneTuTi.tongSoBanChoi,
    mangChon: state.stateBaiTapOneTuTi.mangChon,
    ComputerChooose: state.stateBaiTapOneTuTi.ComputerChooose,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi);
