// mock data
export enum housingType {
  apartment = "apartment",
  house = "house",
}
export enum electricityBillType {
  perUnit = "perUnit",
  fiatRate = "fiatRate",
}
export enum waterBillType {
  perUnit = "perUnit",
  fiatRate = "fiatRate",
}
export const housingForHouse = {
  id: 1,
  name: "บ้านซันนี่",
  description: "บ้านซันนี่ที่สวยงามตั้งอยู่ใจกลางเมือง",
  images: ["image1.jpg", "image2.jpg"],
  address: "123 ซันไชน์ บูเลอวาร์ด, เมืองซันนี่",
  latitude: "40.712776",
  longitude: "-74.005974",
  type: housingType.house,
};
export const roomForHouse = {
  id: 1,
  name: "ห้องอบอุ่น",
  description: "บ้านซันนี่ที่สวยงามตั้งอยู่ใจกลางเมือง",
  images: ["room1.jpg", "room2.jpg"],
  rent: 1200,
  electricityBillType: electricityBillType.perUnit,
  waterBillType: waterBillType.perUnit,
  electricityUnitPerPrice: 0.15, // optional for perUnit
  waterUnitPerPrice: 0.1, // optional for perUnit
  electricityAmount: 0, // optional for fiatRate
  waterAmount: 0, // optional for fiatRate
};
export const housingForApartment = {
  id: 2,
  name: "อพาร์ตเมนต์ซันนี่",
  description: "อพาร์ตเมนต์ซันนี่ที่สวยงามตั้งอยู่ใจกลางเมือง",
  images: ["image1.jpg", "image2.jpg"],
  address: "123 ซันไชน์ บูเลอวาร์ด, เมืองซันนี่",
  latitude: "40.712776",
  longitude: "-74.005974",
  type: housingType.apartment,
};
export const roomForApartment = [
  {
    id: 1,
    name: "101",
    description: "บ้านซันนี่ที่สวยงามตั้งอยู่ใจกลางเมือง",
    images: ["room1.jpg", "room2.jpg"],
    rent: 1200,
    electricityBillType: electricityBillType.perUnit,
    waterBillType: waterBillType.perUnit,
    electricityUnitPerPrice: 0.15, // optional for perUnit
    waterUnitPerPrice: 0.1, // optional for perUnit
  },
  {
    id: 2,
    name: "102",
    description: "บ้านซันนี่ที่สวยงามตั้งอยู่ใจกลางเมือง",
    images: ["room1.jpg", "room2.jpg"],
    rent: 1200,
    electricityBillType: electricityBillType.fiatRate,
    waterBillType: waterBillType.fiatRate,
    electricityAmount: 100, // optional for fiatRate
    waterAmount: 100, // optional for fiatRate
  },
  {
    id: 3,
    name: "103",
    description: "บ้านซันนี่ที่สวยงามตั้งอยู่ใจกลางเมือง",
    images: ["room1.jpg", "room2.jpg"],
    rent: 1200,
    electricityBillType: electricityBillType.fiatRate,
    waterBillType: waterBillType.fiatRate,
    electricityAmount: 100, // optional for fiatRate
    waterAmount: 100, // optional for fiatRate
  },
];
