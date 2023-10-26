import { render } from "@testing-library/react";

import Home from "./page";

describe("Home", () => {
  // This is just an example. A more detail example: https://github.com/ixartz/Next-js-Boilerplate/blob/main/src/layouts/Meta.test.tsx
  // eslint-disable-next-line jest/expect-expect
  it("Renders a heading in home component", () => {
    render(<Home />);
  });
});
