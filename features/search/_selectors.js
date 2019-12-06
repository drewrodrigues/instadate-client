export const sparksLeft = (state) => {
  return 5 - state.sparks.filter(spark => spark.user_id === state.session.id).length;
};

export const anySparksLeft = (state) => (sparksLeft(state) > 0);