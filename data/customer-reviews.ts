type CustomerReview = {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  location?: string;
  date?: string;
  reply?: { text: string; date?: string };
};

export const customerReviews: readonly CustomerReview[] = [];
