export interface PricingPlan {
  name: string;
  description: string;
  price: number;
  features: string[];
}


export const pricingPlans: PricingPlan[] = [
  {
    "name": "Basic Web Design",
    "description": "Essential and professional web design",
    "price": 799,
    "features": [
      "Modern and clean web design",
      "Corporate color palette",
      "Professional typography",
      "Mobile-responsive design",
      "Basic iconography",
      "Simple and effective layout"
    ]
  },
  {
    "name": "Advanced Web Design",
    "description": "Advanced and distinctive web design",
    "price": 1499,
    "features": [
      "Custom premium web design",
      "Unique visual identity",
      "Elegant animations and transitions",
      "Advanced responsive design",
      "Coherent design system",
      "Custom visual elements"
    ]
  },
  {
    "name": "Immersive Web Design",
    "description": "Exclusive high-end web design",
    "price": 2999,
    "features": [
      "Totally unique luxury web design",
      "Integrated complete branding",
      "Custom micro-interactions",
      "Premium UX/UI design",
      "Exclusive illustrations and graphics",
      "Immersive visual experience"
    ]
  }
];
