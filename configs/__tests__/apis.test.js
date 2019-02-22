/* eslint-disable */
import { delivery, preview } from "@apis";

describe("Testing Delivery API configurations", () => {
  const { addr, domain_id, token } = delivery;
  test("testing addr...", () => {
    expect(addr).toBe("delivery.blupoint.io");
  });
  test("testing domain_id...", () => {
    expect(domain_id).toBe(
      "5c4984af5a4da10008e77628"
    );
  });

  test("testing token...", () => {
    expect(token).toBe(
      "Basic 5c6570c017ff6d000703127b:wBWa98V9RgdT7v9SmhAA"
    );
  });
});

describe("Testing Preview API configurations", () => {
  const { addr, domain_id, token } = preview;
  test("testing addr...", () => {
    expect(addr).toBe("preview.blupoint.io");
  });
  test("testing domain_id...", () => {
    expect(domain_id).toBe(
      "5c4984af5a4da10008e77628"
    );
  });

  test("testing token...", () => {
    expect(token).toBe(
      "Basic 5c6570c017ff6d000703127b:wBWa98V9RgdT7v9SmhAA"
    );
  });
});
