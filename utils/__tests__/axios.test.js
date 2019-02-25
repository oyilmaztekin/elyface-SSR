/* eslint-disable */
import { getDataset, getContent } from "@utils";

function testDatasets(data) {
  const item = data.data.data.items[0];
  expect(item.haber_metni).not.toBeUndefined();
  expect(item.slug).not.toBeUndefined();
  expect(item.title).not.toBeUndefined();
  expect(item.domain_id).toEqual(
    "5c4984af5a4da10008e77628"
  );
  expect(item.haber_gorsel.length).toEqual(1);
}

describe("Axios getDataset", () => {
  test("should be defined", () => {
    expect(getDataset).toBeDefined();
  });
  test("testing Manşet Altı dataset", async () => {
    return await getDataset("manset-alti").then(
      data => {
        testDatasets(data);
      }
    );
  });
  test("testing Gündem dataset", async () => {
    return await getDataset("cat-gundem").then(
      data => {
        testDatasets(data);
      }
    );
  });
  test("testing Seo haberleri dataset", async () => {
    return await getDataset("seo-haberleri").then(
      data => {
        testDatasets(data);
      }
    );
  });

  test("testing Çok Okunanlar dataset", async () => {
    return await getDataset("cok-okunanlar").then(
      data => {
        testDatasets(data);
      }
    );
  });

  test("testing Sür Manşet dataset", async () => {
    return await getDataset("sur-manset").then(
      data => {
        testDatasets(data);
      }
    );
  });

  test("testing Sağ Manşet dataset", async () => {
    return await getDataset("sag-manset").then(
      data => {
        testDatasets(data);
      }
    );
  });

  test("testing Manşet dataset", async () => {
    return await getDataset("manset").then(
      data => {
        testDatasets(data);
      }
    );
  });

  test("testing Ekonomi dataset", async () => {
    return await getDataset("cat-ekonomi").then(
      data => {
        testDatasets(data);
      }
    );
  });

  test("testing Siyaset dataset", async () => {
    return await getDataset("cat-siyaset").then(
      data => {
        testDatasets(data);
      }
    );
  });

  test("testing Yaşam dataset", async () => {
    return await getDataset("cat-yasam").then(
      data => {
        testDatasets(data);
      }
    );
  });

  test("testing Teknoloji dataset", async () => {
    return await getDataset("cat-teknoloji").then(
      data => {
        testDatasets(data);
      }
    );
  });

  test("testing Kültür dataset", async () => {
    return await getDataset("cat-kultur").then(
      data => {
        testDatasets(data);
      }
    );
  });

  test("testing Çevre dataset", async () => {
    return await getDataset("cat-cevre").then(
      data => {
        testDatasets(data);
      }
    );
  });

  test("testing Dünya dataset", async () => {
    return await getDataset("cat-dunya").then(
      data => {
        testDatasets(data);
      }
    );
  });

  test("testing Çok Okunanlar dataset", async () => {
    return await getDataset("cat-spor").then(
      data => {
        testDatasets(data);
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
