import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cities",
  initialState: {
    houseLevel: 1,
    goldMineLevel: 1,
    miltaryBase: 1,
    gold: 1000,
    militaryPower: 0,
  },
  reducers: {
    queryCitydata: (city, action) => {
      city.houseLevel = action.payload.houseLevel;
      city.miltaryBase = action.payload.militaryBaseLevel;
      city.goldMineLevel = action.payload.goldMineLevel;
      city.gold = action.payload.gold;
      city.militaryPower = action.payload.militaryPower;
    },
    upgradeHouse: (city, action) => {
      city.houseLevel = action.payload.houseLevel;
    },
    upgradeGoldMine: (city, action) => {
      city.goldMineLevel = action.payload.goldMineLevel;
    },
    upgradeMiltaryBase: (city, action) => {
      city.miltaryBase = action.payload.militaryBaseLevel;
    },
  },
});

export const { queryCitydata } = slice.actions;
export const { upgradeHouse } = slice.actions;
export const { upgradeGoldMine } = slice.actions;
export const { upgradeMiltaryBase } = slice.actions;
export default slice.reducer;
