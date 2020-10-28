import { createSelector, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cities",
  initialState: {
    houseLevel: 1,
    goldMineLevel: 1,
    militaryBase: 1,
    gold: 1000,
    militaryPower: 0,
  },
  reducers: {
    queryCitydata: (city, action) => {
      city.houseLevel = action.payload.houseLevel;
      city.militaryBase = action.payload.militaryBaseLevel;
      city.goldMineLevel = action.payload.goldMineLevel;
      city.gold = action.payload.gold;
      city.militaryPower = action.payload.militaryPower;
    },
    upgradeHouse: (city, action) => {
      city.houseLevel = action.payload.houseLevel;
    },
    upgradeGoldMine: (city, action) => {
      city.goldMineLevel = action.payload.goldMineLevel + 1;
    },
    upgradeMiltaryBase: (city, action) => {
      city.militaryBase = action.payload.militaryBaseLevel;
    },
  },
});

export const { queryCitydata } = slice.actions;
export const { upgradeHouse } = slice.actions;
export const { upgradeGoldMine } = slice.actions;
export const { upgradeMiltaryBase } = slice.actions;

export const getGoldMineLevel = createSelector(
  (state: any) => state.city,
  (city: any) => city.goldMineLevel
);
export const getMilitaryBaseLevel = createSelector(
  (state: any) => state.city,
  (city: any) => city.militaryBase
);
export const getHouseLevel = createSelector(
  (state: any) => state.city,
  (city: any) => city.houseLevel
);
export const getGold = createSelector(
  (state: any) => state.city,
  (city: any) => city.gold
);
export const getmilitaryPower = createSelector(
  (state: any) => state.city,
  (city: any) => city.militaryPower
);
export default slice.reducer;
