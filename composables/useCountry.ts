import { NIGERIA_STATES } from "~/constants/countries";

export const useCountry = () => {
  // grows with time, (west african countries, etc)
  return {
    all_countries: ["Nigeria"],
    nigerian_states: NIGERIA_STATES,
  };
};
