// toBe
it("数値のテスト", () => {
    expect(2 + 2).toBe(4);
})
it("文字列のテスト", () => {
    expect("Jest").toBe("Jest");
})
it("booleanのテスト", () => {
    expect(true).toBe(true);
})

// toEqual
it("配列のテスト", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    expect(arr1).toEqual(arr2);
})

it("オブジェクトのテスト", () => {
    const ob1 = {
        a: 1,
        b: 2,
    };
    const ob2 = {
        a: 1,
        b: 2,
    };
    expect(ob1).toEqual(ob2);
})


// not
it("notのテスト", () => {
    expect(1 + 1).not.toBe(3);
})