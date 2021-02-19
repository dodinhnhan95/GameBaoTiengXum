const stateDefault = {
  mangChon: [
    { chon: "keo", hinhAnh: "./img/keo.png" },
    { chon: "bua", hinhAnh: "./img/bua.png" },
    { chon: "bao", hinhAnh: "./img/bao.png" },
  ],
  ComputerChooose: "./img/keo.png",
  banChon: "./img/keo.png",
  BaoBuaKeo: "",
  soNgauNhien: 0,
  soBanThang: 0,
  tongSoBanChoi: 0,
};
const BaiTapGameOneTuTiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LUA_CHON": {
      state.banChon = action.Choose;
      state.BaoBuaKeo = action.ChooseBaoBuaKeo;
      return { ...state };
    }
    case "RANDOM_BAO_BUA_KEO": {
      let mangKeoBuaBao = ["keo", "bua", "bao"];
      const chonNgauNhien = Math.floor(Math.random() * mangKeoBuaBao.length);
      const hinhMayChon = `./img/${mangKeoBuaBao[chonNgauNhien]}.png`;
      // state.ComputerChooose: `./img/${mangKeoBuaBao[chonNgauNhien]}.png`,
      state.ComputerChooose = hinhMayChon;
      state.soNgauNhien = chonNgauNhien;

      return { ...state };
    }
    case "END_GAME": {
      let mangKeoBuaBao = ["keo", "bua", "bao"];
      console.log(state.BaoBuaKeo);
      if (
        (state.BaoBuaKeo == "keo" &&
          mangKeoBuaBao[state.soNgauNhien] == "bao") ||
        (state.BaoBuaKeo == "bua" &&
          mangKeoBuaBao[state.soNgauNhien] == "keo") ||
        (state.BaoBuaKeo == "bao" && mangKeoBuaBao[state.soNgauNhien] == "bua")
      ) {
        state.soBanThang += 1;
        console.log(state.soBanThang);
      }
      state.tongSoBanChoi += 1;
      return { ...state };
    }
  }
  return { ...state };
};
export default BaiTapGameOneTuTiReducer;
