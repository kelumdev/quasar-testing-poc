import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import Counter from "../../../src/components/CounterComp/CounterComp.vue";

describe("Counter.vue", () => {
  it("renders the initial count", () => {
    const wrapper = mount(Counter);
    expect(wrapper.find('[data-testid="result"]').text()).toBe("Count: 1");
  });

  it("increments the count when the increment button is clicked", async () => {
    const wrapper = mount(Counter);
    const incrementButton = wrapper.find('[data-testid="increment"]');
    await incrementButton.trigger("click");
    expect(wrapper.find('[data-testid="result"]').text()).toBe("Count: 2");
  });

  it("decrements the count when the decrement button is clicked", async () => {
    const wrapper = mount(Counter);
    const decrementButton = wrapper.find('[data-testid="decrement"]');
    await decrementButton.trigger("click");
    expect(wrapper.find('[data-testid="result"]').text()).toBe("Count: 0");
  });
});
