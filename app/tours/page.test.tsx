import '@testing-library/jest-dom'
import ToursPage from './page'
import { render } from '@testing-library/react';//+

const mockTours = [
	{
		id: "1",
		name: "Tour 1",
		info: "Info 1",
		image: "image1.jpg",
		price: "100",
	},
	{
		id: "2",
		name: "Tour 2",
		info: "Info 2",
		image: "image2.jpg",
		price: "200",
	},
];

// fetch のモック関数
const mockFetch = (data: any) => {
	global.fetch = jest.fn().mockResolvedValue({
		json: jest.fn().mockResolvedValue(data),
	}) as jest.Mock;
};

describe("ToursPage", () => {
	beforeEach(() => {
		mockFetch(mockTours);
	});

	it("should display the correct number of tour items", async () => {
		const PageComponent = await ToursPage(); // App Router の Page は Promise を返す
		const { getAllByRole } = render(PageComponent);

		const tourImages = getAllByRole("img");
		expect(tourImages).toHaveLength(mockTours.length);
	});
});
