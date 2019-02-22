/* eslint-disable */
import { getDataset } from "@utils";

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
