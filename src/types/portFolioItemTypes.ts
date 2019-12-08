export interface PortfolioResponseI {
  cars: PortfolioItemI[];
  maxPrice: number;
  minPrice: number;
}

export interface PortfolioItemI {
  portfolio: string;
  visible: boolean;
  available: boolean;
  teaser: TeaserI;
  conditions: ConditionsI;
  car: CarI;
  detailUrl: object;
  labels: object[];
  segment: string;
  images: object[];
  id: string;
  pricing: PricingI;
  estimatedDeliveryTime: string;
}
interface PricingI {
  startingFee: number;
  deliveryFee: number;
  monthlyExcessKilometers: number;
  excessKilometers: number;
  unusedKilometers: number;
  deductiblePartialCover: number;
  price: number;
  bookableOptions: Array<{}>;
}

export type PortfolioSubItem = PortfolioItemI | TeaserI | CarI | EnviromentI;

interface TeaserI {
  title: string;
  teaserImage: string;
  equipmentHighlights?: EquipmentHightlightI[];
}

interface EquipmentHightlightI {
  name?: string;
}

interface CarI {
  equipmentDetails?: EquipmentDetailI[];
  fueltype?: string;
  ps?: number;
  offerExtColor?: string;
  gearingType?: string;
  ccm?: string;
  kw?: number;
  version?: string;
  doors?: string;
  environment?: EnviromentI;
  model?: string;
  drive?: string;
  make?: string;
}

type EquipmentDetailI = EquipmentHightlightI;

interface EnviromentI {
  emissionLabel?: string;
  emissionClass?: string;
  consumptionCity?: number;
  emissionCO2?: number;
  consumptionCombined?: number;
  consumptionCountry?: number;
}

interface ConditionsI {
  minimumAge?: number;
  maximumAge?: number;
  minLicenseDuration?: number;
}
