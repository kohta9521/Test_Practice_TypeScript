import { ShoppingList } from "./practice";

describe("ShoppingList", () => {
  let shoppingList: ShoppingList;

  beforeEach(() => {
    shoppingList = new ShoppingList();
  });

  // q1
  describe("addItem", () => {
    it("アイテムをリストに追加する", () => {
      shoppingList.addItem("item");
      expect(shoppingList.list).toEqual(["item"]);
    });
  });

  describe("removeItem", () => {
    // q2
    it("アイテムをリストから削除する", () => {
      shoppingList.addItem("item");
      shoppingList.removeItem("item");
      expect(shoppingList.list).toEqual([]);
    });

    // q3
    it("存在しないアイテムの削除を試みたときにエラーをスローする", () => {
      expect(() => {
        shoppingList.removeItem("item");
      }).toThrow("アイテム: item は存在しません");
    });
  });
});
