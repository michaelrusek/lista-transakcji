import { render } from "@testing-library/react";
import Balance from "./Balance";

const transactions = [
  {
    id: 3,
    amount: -2932.02,
    beneficiary: "Shields Slater",
    account: "PL10103855106271523000000000",
    address: "730 Division Place, Tyro, North Carolina, 6679",
    date: "2017-04-04T03:13:20",
    description:
      "Exercitation nostrud deserunt aliquip ea exercitation tempor cupidatat non.",
  },
  {
    id: 5,
    amount: 1009.66,
    beneficiary: "Dorothea Buchanan",
    account: "PL10104740854677562000000000",
    address: "547 Montgomery Place, Saddlebrooke, Kentucky, 1185",
    date: "2016-05-10T07:59:16",
    description: "Veniam sit sunt veniam duis.",
  },
];

describe(Balance, () => {
  it("balance displays correct value", () => {
    const { getByTestId } = render(<Balance transactions={transactions} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const balance = getByTestId("balance").textContent;
    expect(balance).toEqual("8077");
  });
});
