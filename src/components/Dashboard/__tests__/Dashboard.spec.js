import { describe, beforeEach, afterEach, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Dashboard from "../Dashboard.vue";

let wrapper;
describe("Dashboard", () => {
  describe("when movies are there", () => {
    beforeEach(async () => {
      wrapper = mount(Dashboard);
      wrapper.vm.$router = {
        push: vi.fn(),
      };

      wrapper.vm.movies = [
        {
          backdrop_path: "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
          id: 675353,
          original_language: "en",
          original_title: "Sonic the Hedgehog 2",
          overview:
            "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
          popularity: 6852.303,
          poster_path: "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
          release_date: "2022-03-30",
          title: "Sonic the Hedgehog 2",
          vote_average: 7.8,
          vote_count: 1450,
        },
      ];
      await wrapper.vm.$nextTick();
    });

    afterEach(() => {
      vi.clearAllMocks();
    });
    it("should renders movies properly", () => {
      expect(wrapper.findAll("h1").at(1).text()).toBe("Sonic the Hedgehog 2");
    });

    it("should go to movie details page on click of any moview", async () => {
      wrapper.vm.gotoMovie(wrapper.vm.movies[0]);
      await wrapper.vm.$nextTick();
      expect(wrapper.vm.$router.push).toHaveBeenCalled();
    });
  });
});
