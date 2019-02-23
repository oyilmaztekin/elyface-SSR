/* eslint-disable */
import { getDataset, getContent } from "@utils";

describe("Axios getDataset", () => {
  test("should be defined", () => {
    expect(getDataset).toBeDefined();
  });
  test("testing returned object", async () => {
    return await getDataset("manset-alti").then(
      data => {
        const item = data.data.data.items[0];
        expect(
          item.haber_metni
        ).not.toBeUndefined();
        expect(item.slug).not.toBeUndefined();
        expect(item.title).not.toBeUndefined();
        expect(item.domain_id).toEqual(
          "5c4984af5a4da10008e77628"
        );
        expect(item.haber_gorsel.length).toEqual(
          1
        );
      }
    );
  });
});

describe("Axios getContent", () => {
  test("should be defined", () => {
    expect(getContent).toBeDefined();
  });
  test("testing category such as gundem, siyaset etc...", async () => {
    return await getContent(
      "5c6bc4866d87ea0007573927"
    ).then(data => {
      const item = data.data;
      expect(item.domain_id).not.toBeUndefined();
      expect(item.title).not.toBeUndefined();
      expect(item.url).not.toBeUndefined();
      expect(item.domain_id).toEqual(
        "5c4984af5a4da10008e77628"
      );
    });
  });
  test("testing content", async () => {
    return await getContent(
      "5c6e9e1ad74d9000078cddfb",
      "preview"
    ).then(data => {
      debugger;
      const item = data.data;
      expect(item.domain_id).not.toBeUndefined();
      expect(item.title).not.toBeUndefined();
      expect(item.url).not.toBeUndefined();
      expect(
        item.description
      ).not.toBeUndefined();
      expect(item.membership_id).toEqual(
        "sadece_haber"
      );
      expect(item.self_path).not.toBeUndefined();
      expect(item.slug).not.toBeUndefined();
      expect(item.domain_id).toEqual(
        "5c4984af5a4da10008e77628"
      );
    });
  });
});
