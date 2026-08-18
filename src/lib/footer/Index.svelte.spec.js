import { test, expect } from "vitest";
import Footer from "./Index.svelte";
import { render } from "vitest-browser-svelte";

const mock = {
	platformName: "Test Title",
	platformDescription: "Test description",
};

test("Footer displays the most important elements", async () => {
	const footer = await render(Footer, {
		platformName: mock.platformName,
		platformDescription: mock.platformDescription,
	});
	const title = footer.getByText(mock.platformName, { exact: true });
	const description = footer.getByText(mock.platformDescription, {
		exact: true,
	});
	await Promise.all([
		expect.element(title).toBeInTheDocument(),
		expect.element(description).toBeInTheDocument(),
	]);
});
