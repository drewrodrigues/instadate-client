export const sparksLeftFormatter = (sparksLeft) => {
  let preText;
  switch(sparksLeft) {
    case 0:
      preText = 'No sparks';
      break;
    case 1:
      preText = '1 spark';
      break;
    default:
      preText = `${sparksLeft} sparks`;
  }
  return `${preText} left today`;
};

export const milesAwayFormatter = (miles) => {
  switch(miles) {
    case 0:
      return 'Nearby';
    case 1:
      return '1 mile away';
    default:
      return `${miles} miles away`;
  }
};