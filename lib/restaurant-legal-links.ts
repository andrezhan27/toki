import "server-only";
import { restaurantInfo } from "./restaurant-info";

export type RestaurantLegalLinks = {
  privacyPolicyUrl: string | null;
  termsAndConditionsUrl: string | null;
};

// Only use documents explicitly configured for TOKI.
export async function getRestaurantLegalLinks(): Promise<RestaurantLegalLinks> {
  return {
    privacyPolicyUrl: restaurantInfo.privacyPolicyUrl,
    termsAndConditionsUrl: restaurantInfo.termsAndConditionsUrl,
  };
}
