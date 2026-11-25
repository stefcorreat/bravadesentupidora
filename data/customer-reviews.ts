type CustomerReview = {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  location?: string;
};

export const customerReviews: readonly CustomerReview[] = [];
